import { createContext,useEffect, useState } from "react";
import {v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext()

const TodoContextProvider  = (props) => {

    const [todolists, setTodoLists] = useState([
        {id:uuidv4(), description: 'Learn HTML', dueDate: '22 April 2020', inProgress: 'Completed', priority: 'Low'},
        {id:uuidv4(), description: 'Learn Javascript', dueDate: '22 June 2020', inProgress: 'Completed', priority: 'High'},
        {id:uuidv4(), description: 'Learn React', dueDate: '22 July 2020', inProgress: 'In-Progress', priority: 'Medium'},
        {id:uuidv4(), description: 'Learn API', dueDate: '22 August 2020', inProgress: 'Not started', priority: 'Normal'},
        {id:uuidv4(), description: 'Learn Angular', dueDate: '22 September 2020', inProgress: 'Pending', priority: 'High'}
])

useEffect(()=> {
    setTodoLists(JSON.parse(localStorage.getItem('todolists')))
},[])

useEffect(() => {
    localStorage.setItem('todolists', JSON.stringify(todolists));
})



const sortedTodos = todolists.sort((a,b)=>(a.description < b.description ? -1 : 1));



const addTodo = (description, dueDate, inProgress, priority) => {
    setTodoLists([...todolists , {id:uuidv4(), description, dueDate, inProgress, priority}])
}

const deleteTodo = (id) => {
    setTodoLists(todolists.filter(todolist => todolist.id !== id))
}

const updateTodo = (id, updatedTodolist) => {
    setTodoLists(todolists.map((todolist) => todolist.id === id ? updatedTodolist : todolist))
}

    return (
        <TodoContext.Provider value={{sortedTodos, addTodo, deleteTodo, updateTodo}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;