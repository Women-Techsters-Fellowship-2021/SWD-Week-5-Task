import React, { useState } from 'react';
import '../Form.css';


const Form = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  
  //Targets the input value
  const inputHandler =(e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };


  const submitTodo = (e) => {
    e.preventDefault();

    if(!setInputText || !inputText) {
      return false;
    }
    setTodoList([
      ...todoList, {text: inputText, completed: false, id:new Date().getTime()}
    ]);
    console.log({text: inputText, completed: false, id:new Date().getTime()})
    console.log(todoList)

    setInputText("");
  };

    return (

<form className="input-form">
    <h2> TO-DO List</h2>
  <input 
  value={inputText}
  onChange={inputHandler}
  title="input"
  type='text'
  placeholder='Task'
  />
   
  <button
   onClick={submitTodo}>Save</button>
  </form>
      
    ); 
    
}

export default Form;