import React from "react";
// import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "./stateprovider";

export default function TodoForm() {
  // const { register, handleSubmit } = useForm();
  const context = useContext(AppContext);
  const [todo, setTodo] = useState("");

  const createTodo = (e) => {
    e.preventDefault();

    if (!todo) {
      return false;
    }
    const newItem = {
      todo: todo,
      id: Date.now(),
    };

    console.log(newItem);

    context.dispatch({
      type: "ADD_ITEM",
      payload: newItem,
    });

    // reset the value of the input box
    setTodo("");
  };

  return (
    <div className="todo-form-container">
      <form onSubmit={createTodo}>
        <div className="formgroup">
          <input
            id="title-input"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Write todo here"
          />
        </div>
        <div>
          <button className="form-submit-btn" type="submit">
            Create Todo
          </button>
        </div>
      </form>
    </div>
  );
}
