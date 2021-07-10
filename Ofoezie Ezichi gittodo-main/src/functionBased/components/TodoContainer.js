import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

import About from "../pages/About";
import Navbar from "./Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import classes from "./TodoContainer.module.css"

const TodoContainer = () => {

  const [todos, setTodos] = useState(getInitialTodos())

  // useEffect(() => {
  //   // getting stored items
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)

  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [])

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || [] 
  }
 
  const handleChange = id => {
    setTodos(prevState => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  };

  const addTodoItem = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      completed: false  
    };
    setTodos([...todos, newTodo])
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  return (   
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className={classes.container}>
            <div className={classes.inner}>
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList 
                todos={todos} 
                handleChangeProps={handleChange} 
                deleteTodoProps={delTodo}
                setUpdate ={setUpdate} 
              />
            </div>
          </div>
        </Route>
        <Route path= "/about">
          <About />
        </Route>
        <Route path="*">
          <Register />
        </Route>
<Route path="/login">
<Login />
</Route>
</Switch>
    </>
  );
}

export default TodoContainer