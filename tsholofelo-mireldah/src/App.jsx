
import {BrowserRouter as  Router,Route, Switch} from "react-router-dom";
import Dashboard from "./Pages/Home/Dashboard";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import ToDoCart from "./Pages/todolist/ToDoCart";
import TodoContextProvider from "./Pages/todolist/TodoContext";

function App(){

    return(
        <Router>
            <Switch>
              
                <Route path="/Registration" component={Registration} />
                <Route path="/Login" component={Login} />
               <TodoContextProvider> 
                <Route path='/Dashboard' component={Dashboard} /> 
                <Route path="/ToDoCart" component={() => <ToDoCart auth={true}/>} />
              
               </TodoContextProvider>
                                
            </Switch>
        </Router>
    )
}

export default App;