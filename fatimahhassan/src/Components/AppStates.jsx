import { createContext,useReducer} from 'react';

export const AppContext = createContext();

const initialState = {
	isLoggedIn: false,
	userId: null,
	userEmail: null,
	userTasks:[],
	title:"",
	description:"",
	isEditing:false,
	currentlyEditing:"",
	

};

function reducer (state, action) {

	let saveState = {...state};

	// set the name on our state copy to action
	saveState.action = action;

	if (action.type === 'ADD_TASK') {
		if(saveState.isEditing){
			saveState.userTasks = saveState.userTasks.map(
				todo=> {
					if(todo.id === saveState.currentlyEditing){  
						todo.title = saveState.title;
						todo.description = saveState.description;
			}
			return todo;
		}
		);
		}
		else {

			return {
						...state,
					userTasks:[action.payload, ...state.userTasks],
				};
			//saveState.userTasks.push(action.payload);
		}

		
		// return {
		// 		...state,
		// 	userTasks:[action.payload, ...state.userTasks],
		// };
	}
	if (action.type === 'SET_TASK') {
		//saveState.userTasks = action.payload;
		return {
			...state,
			userTasks: action.payload,
		};
	}
	if (action.type === 'REGISTER') {
		
		saveState.isLoggedIn=false;
		saveState.userEmail=action.payload.userEmail;
		saveState.userId=action.payload.userId;
		// return {
		// 	...state,
		// 	isLoggedIn:false,
		// 	...action.payload,
		// };
	}
	if (action.type === 'LOGIN') {
		saveState.isLoggedIn=true;
		saveState.userEmail=action.payload.userEmail;
		saveState.userId=action.payload.userId;

	}
	// 	return {
	// 		...state,
	// 		isLoggedIn:true,
	// 		...action.payload,
	// 	};
	// }
	if (action.type === 'LOGOUT') {
		saveState.isLoggedIn = false;
		saveState.userEmail=null;
		saveState.userId=null;
		// return {
		// 	// // ...state,
		// 	// isLoggedIn: false,
		// 	// userEmail: null,
		// 	// userId: null,

		// };
	}

	if (action.type === 'DELETE') {
		saveState.userTasks = saveState.userTasks.filter(todo => todo.id!== action.payload.id);
		}
			
	if (action.type === 'EDIT') {
		saveState.title = action.payload.title;
		saveState.description = action.payload.description;
		saveState.isEditing = true;
		saveState.currentlyEditing =action.payload.id;
		}

		if (action.type === 'UPDATE_TITLE'){
			saveState.title = action.payload;
			}
		
		if (action.type === 'UPDATE_DESC'){
			saveState.description = action.payload;
				}
		

			if (action.type === 'RESET_INPUTS'){
				saveState.title="";
				saveState.description="";
			}
			
			return saveState;
	}

	

export default function AppStates({children }) {
	const [appstate, dispatch] = useReducer(reducer, initialState);
	
	const ContextObject ={
		state: appstate,
		dispatch: dispatch,
	};
	
	
	return (
		<AppContext.Provider value={ContextObject}>
			{children}
		</AppContext.Provider>
	);
}
