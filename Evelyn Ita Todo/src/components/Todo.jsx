import AddTodo from './AddTodo';
import Todos from '../pages/Todos';

const Todo = ({ todoList, setTodoList }) => {
  console.log(todoList)
  
return ( 
    <div className="todo-container">
        <ul className="todo-list">
          {todoList.map(todo => (

          <AddTodo setTodoList={setTodoList} 
          todoList={todoList}
           key={todo.id}
            text={todo.text}/>

      ))}
        </ul>
</div>
);
};
export default Todo;
 