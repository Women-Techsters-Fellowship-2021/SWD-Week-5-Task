import { BrowserRouter, Switch, Route} from 'react-router-dom';
import AppState from './components/appState';
import InputTodo from './components/inputTodo';
// import { useContext,useEffect} from 'react';
import SignUp from './pages/signUp';
import Login from './pages/login';
import Navbar from './components/navbar';

function App() {
	//const {state} = useContext(AppContext);
	
	// useEffect(() => {
	// 	alert('state changed')
	// }, [state]);

	return (
		<BrowserRouter>
			<AppState>
				<Navbar />

				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/signup'>
						<SignUp />
					</Route>
					<Route path='/toDoList'>
						<InputTodo />
					</Route>
					<Route >
						<Login />
					</Route>
				</Switch>
			</AppState>
		</BrowserRouter>
	);
}

export default App;
