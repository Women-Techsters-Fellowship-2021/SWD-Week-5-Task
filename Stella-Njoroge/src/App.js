import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Error from './pages/Error';

import Navbar from './components/navbar';
import StateProvider from './components/stateprovider';

const App = () => {
  return (
    <StateProvider>

      <Router>
        
      <Navbar />

        <Switch>

          <Route exact path='/'>
            <LandingPage />
          </Route>

          <Route exact path='/home'>
            <HomePage />
          </Route>

          <Route exact path='/register'>
            <RegisterPage />
          </Route>

          <Route exact path='/login'>
            <LoginPage />
          </Route>

          <Route>
            <Error />
          </Route>

        </Switch>
      </Router>
    </StateProvider>
  )
}

export default App;