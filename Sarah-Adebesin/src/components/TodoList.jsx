import { AppContext } from './StateProvider';
import { useContext } from 'react';
import TodoListItem from './TodoListItem';


function TodoList() {
	const context = useContext(AppContext);
	///console.log(context);

  //fetching user's todolist from the API
  fetch(`https://user-manager-three.vercel.app/api/todo?userId=${context.state.userId}`)
    .then(res => res.json())
    .then(result => {
           if (result.error === false) {
             console.log(result);
             //call the dispatch to dispatch the body(content) of the result
             context.dispatch({
               type: 'SET_TODO', 
               payload: result.body,
             });
           }
          })
           .catch(err => {
             console.log('this error occured', err);
           })

    return (
      <div className="card-container">
          <ul>
            {context.state.todoList.map((todoItem) => {
              return (
                <TodoListItem
                  key={todoItem.id}
                  item={todoItem}
                />
              );
            })}
          </ul>
      </div>
    );
}

export default TodoList;