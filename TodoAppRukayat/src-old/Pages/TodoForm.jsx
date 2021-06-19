
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../Components/AppStates';
import "../Styles/Form.css";
import TodoList from './TodoList';


const  TodoForm = ()=>{

    const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
     
       // Handler for the onSubmit
    const ToDoItemHandler = ({task, description}) => {
        
        
  // creat new task and post to the API
              const newtodo = {
                title:task,
                completed:false,
                description:description,
                id: Date.now(),
                userId:context.state.userId
                };

         fetch(`https://user-manager-three.vercel.app/api/todo/create`, {
                method: 'POST',
            headers: {
                 'Content-type': 'application/json',
                         },
                 body: JSON.stringify(newtodo)
                })
                 .then(res => res.json())
                    .then(result => {
                       console.log(result)
                        if(result.error===false){
                            alert(result.message);

                             context.dispatch({
                                  type: 'ADD_TASK',
                                  payload: newtodo,
                                });
                              

                        }
                        
                 })
                .catch(err => {
              console.log('this error occurred', err)
                })
             
                    
                           
            }
        	
	        
    return (
        
        <div className="div-style">
    
            <h1 className="Todoheader" id="header">
            My ToDo List
            </h1>
            <form onSubmit={handleSubmit(ToDoItemHandler)}>
                <input 
                 id="task"
                type="text"
                className="TaskInput" 
                placeholder="Enter Task"
                //value={TodoTask}
                //onChange={e => setTodoTask(e.target.value)}
                {...register('task', { required: true })}/>
               
            <textarea 
               
                 id="desc"
                type="text"
                className="descInput" 
                placeholder="Task Description"
                //value={TodoPriority}
               // onChange={e => setTodoPriority(e.target.value)}
                {...register('description', { required: false })}/>
               
                <button
                type ="submit"
                 className="btn">
                     Save ToDo
                </button>
            </form>
            <TodoList/>
  
        </div>
    
    );
    
    
    }
export default TodoForm;