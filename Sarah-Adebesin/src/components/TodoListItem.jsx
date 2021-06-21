import { useContext } from 'react';
import AppContext from './StateProvider';

function TodoListItem({ item }) {
    const context = useContext(AppContext);
    
    //function to edit an item on the todolist
    const editTodo = () => {
        context.dispatch({
            type : 'EDIT',
            payload : item,
        });
    };

     //setting the updated data to be posted to the API
     let updateData = {
        id: item.id,
        completed: true,
        title: context.state.todoInput,
    };
    console.log(updateData);
    
    fetch(
        `https://user-manager-three.vercel.app/api/todo/update`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateData),
    })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log('this error occured', err);
        })

     //function to delete from the todolist
    const deleteTodo =() => {
    fetch(`https://user-manager-three.vercel.app/api/todo/delete?todoId=${item.id}`)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            //calling the dispatch with payload
            context.dispatch({
                type : 'DELETE',
                payload : item,
            });
        })
        .catch(err => {
            console.log('this error occurred', err)
        })
    }


    return (
        <li className="card" key={item.id}>
            <h2 className="todo-card-heading">{item.todoInput}</h2>
            <div className="btn-box">
                <button className=" edit btn"onClick={() => {editTodo(item.id)}}>Edit</button>
                <button className="del btn" onClick={() => {deleteTodo(item.id)}}>Delete</button>
            </div>
        </li>
    );
}

export default TodoListItem; 