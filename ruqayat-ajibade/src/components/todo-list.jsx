import { useContext } from 'react';
import { AppContext } from './stateprovider';


import TodoListItem from '../components/todo-list-item';


export default function Todos() {

	const context = useContext(AppContext);
	// console.log(context);

	return (
    <ul className="todo-list-container">
      {context.state.todoList.map(function (ListItem) {
        return <TodoListItem key={ListItem.id} item={ListItem} />;
      })}
    </ul>
  );
};

