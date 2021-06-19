// import { useContext } from 'react';
// import { AppContext } from '../Components/AppStates';
import "../Styles/Form.css";



const TodoListitem =({todo})=>{

//const context = useContext(AppContext);

   const EditTaskHandler= (id)=>{

       //  fetch(`https://user-manager-three.vercel.app/api/todo/update`, {
   //    method: 'POST',
   //    headers: {
   //      'Content-type': 'application/json',
   //    },
   //    body: JSON.stringify(updateData)
   //  })
   //    .then(res => res.json())
   //    .then(result => {
   //      console.log(result)
   //    })
   //    .catch(err => {
   //      console.log('this error occurred', err)
   //    })
   //    */
      
   }

const CompletedTaskHandler = ()=>{

 
}

const DeleteTaskHandler =()=>{


// fetch(`https://user-manager-three.vercel.app/api/todo/delete?todoId=${id}`)
//   .then(res => res.json())
//   .then(result => {
//     console.log(result)
//   })
//   .catch(err => {
//     console.log('this error occurred', err)
//   })


}

    
   return(
      <div className="Todolist-container" key={todo.id}>
         <h2><p>{todo.title}</p></h2>
          <h4><p>{todo.description}</p></h4>
               <div className="button-container">
            <button className="btn, btnEdit" onClick={EditTaskHandler(todo.id)}>Edit</button>
            <button className="btn btnDone" onClick={CompletedTaskHandler}>Done</button>
            <button className="btn btnDelete"  onClick={DeleteTaskHandler}>Delete</button>
            
          </div>
       </div>
          )
      
            
    }

    export default TodoListitem;

