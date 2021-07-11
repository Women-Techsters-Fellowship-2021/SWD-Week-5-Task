 import { useContext } from 'react';
import { AppContext } from '../Components/AppStates';


import "../Styles/Form.css";



const TodoListitem =({todo})=>{


const context = useContext(AppContext);

 const EditTaskHandler= ()=>{


   context.dispatch({
      type:'EDIT',
      payload:todo,
  
})
// Setting the updated data to be posted to the API

     let updateData = {
     id:todo.id, //required
     completed: true, // change the status to completed
     description: context.state.description, // change the description as well
      title: context.state.title,
   }
    
   console.log(updateData)

 fetch(`https://user-manager-three.vercel.app/api/todo/update`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateData)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        
             }
      )
      .catch(err => {
        console.log('this error occurred', err)
      })
      
   }


const DeleteTaskHandler =()=>{
fetch(`https://user-manager-three.vercel.app/api/todo/delete?todoId=${todo.id}`)
  .then(res => res.json())
  .then(result => {
 console.log(result)

 context.dispatch({
   type:'DELETE',
    payload:todo,
}
)
  })
  .catch(err => {
    console.log('this error occurred', err)
  })

   


}


   return(
      <div className="Todolist-container" key={todo.id}>
         <h3>{todo.title}</h3><br/>
          <h4>{todo.description}</h4>
               <div className="button-container">
            <button className="btn, btnEdit" onClick={()=> {EditTaskHandler(todo.id)}}>Edit</button>
            {/* <button className="btn btnDelete" onClick={CompletedTaskHandler}>Done</button> */}
            <button className="btn btnDelete"  onClick={ ()=> {DeleteTaskHandler(todo.id)}}>Delete</button>
            
          </div>
       </div>
                 )
      
            
    }

    export default TodoListitem;



 
