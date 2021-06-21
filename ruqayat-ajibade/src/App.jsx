import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import FourOhFour from "./pages/404";
import Home from "./pages/Home";
// import UserTodos from "./pages/UserTodos";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TodoPage from "./pages/todopage";


import Navbar from "./components/navbar";
import StateProvider from "./components/stateprovider";

function App() {

  return (
    <StateProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/" exact component={Home}/>
          <Route path="/home" exact component={Home}/>
          <Route exact path="/todopage" component={TodoPage}/>
          <Route component={FourOhFour}/>
        </Switch>
      </Router>
    </StateProvider>
  );
};

export default App;
