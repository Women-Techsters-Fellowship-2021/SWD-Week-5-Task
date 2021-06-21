import { useContext } from 'react';
import { AppContext } from './StateProvider';

import TodoList from './TodoList';

function AddTodoForm() {
    const context = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!context.state.todoInput) {
            return false;
        }

        //create a newtodo and post it in the API
        const newTodo = {
            userId: context.state.userId,
            completed: false,
            title: context.state.todoInput,
            id: Date.now(),
        };


        fetch(
			`https://user-manager-three.vercel.app/api/todo/create`,
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(newTodo),
			}
		)
			.then(res => res.json())
			.then(result => {
                console.log(result);
                if (result.error === false) {
                    console.log(result);
                    //alert (result.message);

                    //add a new todo
                    context.dispatch({
                        type: 'ADD_TODO',
                        payload: newTodo,
                    });

                    //reset the value of the input box to empty the box out
                    context.dispatch({
                        type: 'RESET_INPUT',
                    });
                }  
            })
            .catch(err => {
                console.log('this error occured', err);
            })
        
    };

            const setTodoInput = (e) => {
                context.dispatch({
                    type : 'UPDATE_TODO',
                    payload : e.target.value,
                });
            }

    return (
        <div className="form-container">
            <h1 className="main-heading">My Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={context.state.todoInput}
                    onChange={setTodoInput} 
                    name="todoInput" 
                    id="myForm" 
                    placeholder="Write your plans here..."
                />
                <button type="submit" className="add-btn">Add Todo</button>
            </form>
            <TodoList />
        </div>
    );
}

export default AddTodoForm;