 import TodoListitem from './TodoListitem';
import {useContext} from 'react';
//import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../Components/AppStates';
import "../Styles/Form.css";


const TodoList =()=>{
   const history = useHistory();
    const context = useContext(AppContext);

    //Checking if user is logged on
    if(context.state.isLoggedIn===false) {
        alert("Please Sign in to continue!")
        history.push('/login');
    }
            
    // Consuming the API to fetch users todo items
   
 fetch(`https://user-manager-three.vercel.app/api/todo?userId=${context.state.userId}`) 
    .then(res => res.json())
    .then(result => {
     if(result.error===false){
          //console.log(result)
     //Sending my dispatch rider....
          context.dispatch({
            type:'SET_TASK',
            payload: result.body,
           });
        }
        // break;
                 })
                
                .catch(err => {
                 console.log('this error occurred', err)
    }) 
 
//console.log(context.state.userTasks)

    return (
        <>
                {context.state.userTasks.map(function(todoItem) {
                return (
                 <TodoListitem
                    key={todoItem.id}
                     todo={todoItem}   
                        />
          );
          
           })}
        </> 
 
    );       
    }
export default TodoList;

         