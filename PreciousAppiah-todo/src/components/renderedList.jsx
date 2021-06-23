import '../style/renList.css'
import '../style/input.css'
import {useContext} from 'react'
import {AppContext} from './appState'

const RenList=({ item }) => {


	const context = useContext(AppContext);
	// remove an todo from the list
	const deleteHandler = () => {
		context.dispatch({ type: 'DELETE', payload: item });
	};

	
    return (

        <li>
			
			<p className='task'>{item.task}</p>
			<button  className='btn edit'>Edit</button>
			<button onClick={deleteHandler} className='btn remove'>Delete</button>
		</li>

    )
     
}

export default RenList;