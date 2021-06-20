
import React, { useState } from 'react';
import Form from '../components/Form';
import Todo from '../components/Todo';

const Todos = () => {
    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState([]);


    return (
        <div>
            <Form todoList={todoList}
                setTodoList={setTodoList}
                setInputText={setInputText}
                inputText={inputText} />

            <Todo todoList={todoList}
                setTodoList={setTodoList} />

        </div>
    )
};

export default Todos;
