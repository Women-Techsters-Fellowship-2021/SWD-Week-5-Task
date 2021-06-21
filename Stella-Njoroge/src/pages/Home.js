import Todos from "../components/todos";
import { useContext } from 'react';
import { AppContext } from '../components/stateprovider';

const Home = () => {

  const { state } = useContext(AppContext);

  return (
    <div>
      {state.isLoggedIn && <Todos />}
    </div>
  ) 
}

export default Home;