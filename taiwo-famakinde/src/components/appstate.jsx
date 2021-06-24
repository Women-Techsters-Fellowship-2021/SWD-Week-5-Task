import { createContext, useReducer } from 'react';

export const AppContext = createContext();

// reducer function
function reducer(state, action) {
	let stateCopy = { ...state };

	// set the name on state copy to action
	stateCopy.action = action;

	// if action.type is LOGIN
	// set isUserLoggedIn to true
	// & set userData to payload
	if (action.type === 'LOGIN') {
		stateCopy.isUserLoggedIn = true;
		stateCopy.userData = action.payload;
	}

	// if action.type is LOGOUT
	// set isUserLoggedIn to false
	// & set userData to null
	if (action.type === 'LOGOUT') {
		stateCopy.isUserLoggedIn = false;
		stateCopy.userData = null;
	}

	return stateCopy;
}




const initialState = {
    tasks: [
	{ id: 'todo-0', name: 'Pick up laundry', completed: true },
	{ id: 'todo-1', name: 'Get fruits for Kevin', completed: false },
	{ id: 'todo-2', name: 'Do grocery shopping', completed: false },
],
	isUserLoggedIn: false,
    name: '',
    completed: false,

};


function AppState({ children }) {
	// const [state, setState] = useState('');

	const [appstate, dispatch] = useReducer(reducer, initialState)

	const contextObject = {
		state: appstate,
		dispatch: dispatch,
	};

	return (
		<AppContext.Provider value={contextObject}>
			{children}
		</AppContext.Provider>
	);
}

export default AppState;
