
import { useContext} from 'react';
//import { useForm } from 'react-hook-form';
import { AppContext } from '../Components/AppStates';
import "../Styles/Form.css";
import TodoList from './TodoList';


const  TodoForm = ()=>{

   // const [TodoTask, setTodoTask] = useState("");
   // const [TodoDesc, setTodoDesc] = useState("");
    //const [editTask, setEditTask] = useState({});

 //const { register, handleSubmit} = useForm();
    const context = useContext(AppContext);
     
//Preparing for Edit
    // const EditTaskHandler= ()=>{
           
    // }
    //    // Handler for the onSubmit
    const ToDoItemHandler = e => { 
        e.preventDefault();    
        
        if(!(context.state.title)||(!context.state.description)) {
        return false;
        }
  // creat new task and post to the API
              const newtodo = {
                title:context.state.title,
                completed:false,
                description:context.state.description,
                id:Date.now(),
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
                            
                                context.dispatch({
                                    type: 'RESET_INPUTS',
                                })
                        }
                       
                 })
                .catch(err => {
              console.log('this error occurred', err)
                });
             
                //Clearing My inout fields
                    
            };
        
            const setTitle =e =>{
                context.dispatch({
                    type:'UPDATE_TITLE',
                    payload: e.target.value,
                })
            }

            const setDesc =e =>{
                context.dispatch({
                    type:'UPDATE_DESC',
                    payload: e.target.value,
                })
            }

    return (
        
        <div className="div-style">
    
            <h1 className="Todoheader" id="header">
            My ToDo List
            </h1>
            <form onSubmit={ToDoItemHandler}>
                <input 
                 id="task"
                type="text"
                className="TaskInput" 
                placeholder="Enter Task"
                value={context.state.title}
               onChange={setTitle}
                //{...register('task', { required: true })}
                />
               
            <textarea 
                 id="desc"
                type="text"
                className="descInput" 
                placeholder="Task Description"
                value={context.state.description}
               onChange={setDesc}
               // {...register('description', { required: false })}
               />
               
                <button
                type ="submit"
                 className="btn">
                     Save ToDo
                </button>
            </form>
            <TodoList
                      
            />
  
        </div>
    
    );
    
    
    }
export default TodoForm;