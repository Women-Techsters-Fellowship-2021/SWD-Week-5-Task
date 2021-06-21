import { useContext } from "react";
import { AppContext } from "./stateprovider";


import "../styles/todolistitem.css";

export default function TodoListItem({item}) {

	const context = useContext(AppContext)

	function editHandler(){
		alert("This would edit your todo");
	context.dispatch({
      type: "EDIT_ITEM",
      
    });
	}

	function deleteHandler(){
		const deleteObject = {
			id:item.id,
			todo:item.todo
		}
	context.dispatch({
      type: "REMOVE_ITEM",
      payload: deleteObject,
    });
	
	}


  	return (
    	<li>
			<h2 className='title'>{item.todo}</h2>
			<button onClick={editHandler} className='btn'>Edit</button>
			<button onClick={deleteHandler} className='btn remove'>Delete</button>
		</li>
  	)
};


