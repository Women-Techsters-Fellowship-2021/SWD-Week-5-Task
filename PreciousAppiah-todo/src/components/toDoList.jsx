import RenList from './renderedList'
// import inputField from './inputField'
import{useContext} from 'react'
import {AppContext} from './appState'

const ToDo =()=>{
    const context=useContext(AppContext)
    return(
        <ul>
            <h2>My To-do</h2>
            {context.state.toDOList.map( function (taskItem){
                return(
                    <RenList
                    key={taskItem.id}
                    item={taskItem}
                    />
                );
            })}
            
        </ul>
    );
}

export default ToDo