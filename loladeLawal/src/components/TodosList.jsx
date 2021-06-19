import React from 'react';

const TodosList = ({todos, setTodos, setEditTodo}) => {
        // marking an item as completed
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        );
    };
// deleting a Todo list item 
    const handleDelete =({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

// editing the Todo list item when the edit button is clicked
    const handleEdit =({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

   return(
        <div>
            {/* mapping through the todo item */}
            {todos.map((todo) =>(
                <li className="list-item" key={todo.id}>
                    <input 
                        type="text" 
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(e) => e.preventDefault()}
                    />
                    <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                        <i className="fa fa-check-circle"></i>
                    </button>
                    <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                        <i className="fa fa-trash"></i>
                    </button>
                    <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                        <i className="fa fa-edit"></i>
                    </button>
                </li>
            )
            )}
        </div>
    )
}

export default TodosList