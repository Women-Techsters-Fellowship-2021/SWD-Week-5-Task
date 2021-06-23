import InputField from './inputField'
import ToDo from './toDoList'
import { useContext } from 'react'
import {AppContext } from './appState'


const InputTodo=()=>{
    const value = useContext(AppContext)
    console.log(value)
    return(
        <div>
            <InputField/>
            <ToDo/>
        </div>
        
    )
}

export default InputTodo