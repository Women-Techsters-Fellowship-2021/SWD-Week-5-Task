import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Todo from './pages/todo.jsx';
// import StateProvider from './components/stateProvider.jsx';
import './App.css';

function App() {
  return (
    // <StateProvider>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/todo">
            <Todo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router >

    </div>
    // </StateProvider>
  );
}

export default App;
