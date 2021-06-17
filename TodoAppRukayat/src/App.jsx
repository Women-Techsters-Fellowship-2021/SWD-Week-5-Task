import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import FourOhFour from './Pages/404';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AppStates from "./Components/AppStates";
import HomePage from "./Pages/HomePage";
import TodoForm from"./Pages/TodoForm";
import TodoList from "./Pages/TodoListitem";
 
function App() {
  return (
    <AppStates>
    <Router>
        <NavBar/>
        <Switch>

			 {/*render Home Component when we hit /home */} 
			 <Route exact path='/home'>
						<HomePage />
					</Route> 
          	{/* render Login Component when we hit /login */}
					<Route exact path='/login'>
						<Login />
					</Route>
          {/* render Register Component when we hit /register */}
					<Route exact path='/register'>
						<Register />
					</Route>

					
					{/* render Add task Component when we hit /add task*/}
					 
					 <Route exact path='/addtask'>
						<TodoForm />
					</Route>

					<Route exact path='/'>
						<HomePage />
					</Route>
						
						{/* render Post Component when we hit /post*/}
					 
						<Route exact path='/tasks'>
						<TodoList/>
					</Route>
					{/* fallback to a 404 if a route is not matched */}
					 <Route>
						<FourOhFour />
					</Route>

     </Switch>
  </Router>
  </AppStates>  
     );
}

export default App;
