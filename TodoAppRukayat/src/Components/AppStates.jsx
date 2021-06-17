import { createContext,useReducer} from 'react';

export const AppContext = createContext();

const initialState = {
	isLoggedIn: false,
	userId: null,
	userEmail: null,
	userTasks:[],
	

};

function reducer (state, action) {

	let saveState = { ...state };

	// set the name on our state copy to action
	saveState.action = action;

	if (action.type === 'ADD_TASK') {

		saveState.userTasks.unshift(action.payload);
		// return {
		// 		...state,
		// 	userTasks:[action.payload, ...state.userTasks],
		// };
	}
	if (action.type === 'SET_TASK') {
		return {
			...state,
			userTasks: action.payload,
		};
	}
	if (action.type === 'REGISTER') {
		return {
			...state,
			isLoggedIn:false,
			...action.payload,
		};
	}
	if (action.type === 'LOGIN') {
		return {
			...state,
			isLoggedIn:true,
			...action.payload,
		};
	}
	if (action.type === 'LOGOUT') {
		return {
			...state,
			isLoggedIn: false,
			userEmail: null,
			userId: null,
		};
	}

	return state;


}
export default function AppStates({children }) {
	const [appstate, dispatch] = useReducer(reducer, initialState);
	
	const ContextObject ={
		state: appstate,
		dispatch: dispatch,
	};
	
	
	//const [appData, setAppData] = useState(initialState);

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos')
	// 		.then(res => res.json())
	// 		.then(result => {
	// 			console.log(result);
	// 			setAppData(prevValue => {
	// 				return {
	// 					...prevValue,
	// 					Tasks: result,
	// 				};
	// 			});
	// 		});
	// }, []);

	return (
		<AppContext.Provider value={ContextObject}>
			{children}
		</AppContext.Provider>
	);
}
