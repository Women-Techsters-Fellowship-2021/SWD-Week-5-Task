import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import TodoApp from './components/todoApp';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';


const App = () =>  {

  
  return (
		<BrowserRouter>
		
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
						<Login />
					</Route>
				</Switch>
			
		</BrowserRouter>
	);
}

export default App;
