// create form with button
// when form is filled and button is clicked,
// detailsof form gets converted to an item that gets added to a todo list
// each tiem in todo list to have 2 buttons: done & edit
// when done button is clicked, item should fade from list
// when edit is clicked, item gets inserted back into form
// register page registers user
// login page logs user in
// logout logs user out


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppState, { AppContext } from './components/appstate';
import TodoApp from './components/todo-app';
import { useContext, useEffect } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/navbar';



// REACT HOOKS

function App() {
	const context = useContext(AppContext);
	console.log(context);

	useEffect(() => {}, []);

	return (
		<BrowserRouter>
			<AppState>
				<Navbar />

				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/todo-app'>
						<TodoApp />
					</Route>
					<Route>
						<Register />
					</Route>
				</Switch>

			</AppState>
		</BrowserRouter>
	);
}

export default App;