import {createContext, useReducer } from 'react';

export const AppContext =createContext();

const reducer=(state,action)=>{
    let stateCopy ={...state};

    stateCopy.action=action;

    if (action.type ==='ADD_TASK'){

        // if(stateCopy.isEditing){
        //     stateCopy.toDoList = stateCopy.toDoList.map(
		// 		item => {
		// 			if (item.id === stateCopy.currentlyEditing) {
		// 				item.todo = stateCopy.todo;
						
		// 			}
		// 			return item;
		// 		}
		// 	);

        // }

        // else{
            stateCopy.toDOList.unshift(action.payload);
        // }
        

    }
    if (action.type==='LOGIN'){
        stateCopy.isUserLoggedIn=true;
        stateCopy.userData=action.payload;
    }

    if(action.type==='LOGOUT'){
        stateCopy.isUserLoggedIn=true;
        stateCopy.userData=null;
    }

    if (action.type === 'DELETE') {
		stateCopy.toDOList = stateCopy.toDOList.filter(
			item => item.id !== action.payload.id
		);
	}

    // if (action.type === 'UPDATE_TASK') {
	// 	stateCopy.todo = action.payload;
	// }

    // if (action.type === 'EDIT') {
	// 	stateCopy.todo = action.payload.todo;
	// 	stateCopy.isEditing = true;
	// 	stateCopy.currentlyEditing = action.payload.id;
	// }

	

    return stateCopy;
}



const initialTask={

     toDOList : [
    {
        id:1,
        task:'washing at 5pm'

    },
    {
        id:2,
        task:'eating at 5pm'
    },
    
],
    isUserLoggedIn: false,
	userData: null,
	todo: '',
	isEditing: false,
	currentlyEditing: '',

};
const AppState=({children})=>{

    const [appState,dispatch]=useReducer(reducer,initialTask);

    const contextObject = {
        state:appState,
        dispatch:dispatch
    };

    return(
        <AppContext.Provider value={contextObject}>
            {children}
        </AppContext.Provider>
    );

}

export default AppState;

