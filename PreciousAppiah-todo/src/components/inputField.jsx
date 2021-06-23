import '../style/input.css'
import { useState,useContext } from 'react';
import {AppContext} from './appState'

const InputField =()=>{

    const [todo,setTodo]=useState('');
    const context = useContext(AppContext);

    const saveHandler=(e)=>{
        e.preventDefault();
        if(!todo){
            return false;
        }

        const newTask={
            task: todo,
            id:Date.now(),
        };

        context.dispatch({
			type: 'ADD_TASK',
			payload: newTask,
		});

        
       
    } ; 

    // function  setTodo(e){
    //     context.dispatch({
    //         type:'UPDATE_TASK',
    //         payload:e.target.value
    //     })

    // }
    return(
        <form onSubmit={saveHandler} >

            <textarea className="input" 
            value={todo}
             onChange={e=>setTodo(e.target.value)}
             type='text'
             name='todo'
             placeholder='Add your Task'
             id='todo'
                
            />
            <button className ='btn'
            type='submit' 
            >SAVE</button>
           

        </form>
    );
}

export default InputField