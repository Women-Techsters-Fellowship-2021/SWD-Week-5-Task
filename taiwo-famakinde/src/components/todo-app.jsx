import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/form';
import TodoListBtns from './todo-list-btns';
import useContextGetter from '../hooks/useContextGetter';
import '../style/index.css';

const TodoApp = (props) => {
	// console.log(props.tasks);

	const {state} = useContextGetter();
	const contextTasks = state.tasks;
	// console.log(contextTasks, "things", state)
	const [tasks, setTasks] = useState(contextTasks);




	const toggleTaskCompleted = (id) => {
		const updatedTasks = tasks.map((task) => {
			// if this task has the same ID as the edited task
			if (id === task.id) {
				// use object spread to make a new object
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	const deleteTask = (id) => {
		const remainingTasks = tasks.filter((task) => id !== task.id);
		setTasks(remainingTasks);
	};

  const editTask = (id, newName) => {
		const editedTaskList = tasks.map((task) => {
			// if the task has the same ID as the edited task
			if (id === task.id) {
				return { ...task, name: newName };
			}
			return task;
		});
		setTasks(editedTaskList);
	};

	const taskList = tasks.map(task => (
		<TodoListBtns
			id={task.id}
			name={task.name}
			completed={task.completed}
			key={task.id}
			toggleTaskCompleted={toggleTaskCompleted}
			deleteTask={deleteTask}
			editTask={editTask}
		/>
   )
  );

	const addTask = (name) => {
		const newTask = { id: 'todo-' + nanoid(), name: name, completed: false };
		setTasks([...tasks, newTask]);
	};



	//to count number of tasks left
	const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
	const headingText = `${taskList.length} ${tasksNoun} remaining`;

	return (
		<>

     <div className="todoapp stack-large">

     <Form addTask={addTask} />

			<h2 id='list-heading'>{headingText}</h2>

      <ul
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"
>
  		{taskList}
</ul>

</div>

		</>
	);
};

export default TodoApp;
