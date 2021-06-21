import { createContext, useReducer } from 'react';

export const AppContext = createContext();

//reducer function
function reducer(state, action) {
    //create a copy of your state
    let stateCopy = {...state};

    //set the name on stateCopy to action
    stateCopy.action = action;

    //if a user clicks on ADD TODO, the todo item should be added to the todoList array
    if (action.type === 'ADD_TODO') {
        if (stateCopy.isEditing) {
            stateCopy.todoList = stateCopy.todoList.map((item) => {
                    if (item.id === stateCopy.currentlyEditing) {
                        item.todoInput = stateCopy.todoInput;
                    }
                    return item;
            });
        } else {
            return stateCopy.todoList.unshift(action.payload);
        }
    }
    
    //if a user registers, set login to false and userData to payload
    if (action.type === 'REGISTER') {
        stateCopy.isLoggedIn =  true;
        stateCopy.userEmail = action.payload.userEmail;
        stateCopy.userId = action.payload.userId;
    }

    //if a user is logged in, set login to true and userData to payload
    if (action.type === 'LOGIN') {
        stateCopy.isLoggedIn =  true;
        stateCopy.userEmail = action.payload.userEmail;
        stateCopy.userId = action.payload.userId;
    }

    //if a user is logged out, set isLoggedin to false and userData to null
    if (action.type === 'LOGOUT') {
        stateCopy.isLoggedIn = false;
        stateCopy.userEmail = action.payload.userEmail;
        stateCopy.userId = action.payload.userId;
    }

    //remove from the list if action.type is DELETE
    if (action.type === 'DELETE') {
        stateCopy.todoList = stateCopy.todoList.filter(
            item => item.id !== action.payload.id
        );
    }

    //action to update todo
    if (action.type === 'UPDATE_TODO') {
        stateCopy.todoInput = action.payload;
    }

    //action to edit an item on a list-
    //get the todo item from action payload and set the input to the content of
    //input found in payload. On save, find and update todo item.
    if (action.type === 'EDIT') {
        stateCopy.todoInput = action.payload.todoInput;
        stateCopy.isEditing = true;
        stateCopy.currentlyEditing = action.payload.id;
    }
    if (action.type === 'RESET_INPUT') {
        stateCopy.todoInput = '';
    }
    if (action.type === 'SET_TODO') {
        stateCopy.todoList = action.payload;
    }
    return stateCopy;
}

const initialState = {
    todoList: [],
    isLoggedIn: false,
    userData: null,
    userId: null,
    todoInput: '',
    isEditing: false,
    currentlyEditing: '',
};

function StateProvider({ children }) { 

    const [state, dispatch] = useReducer(reducer, initialState); //the useReducer takes in a reducer function and an initialState. The initialState is an object

    const contextObject = {
        state,
        dispatch,
    };

    return(
        <AppContext.Provider value={contextObject}>
            { children }
        </AppContext.Provider>
    );
}

export default StateProvider;

//reducer function - this is the fuction used to set state in useReducer
//the reducer function always takes in state and action
//the dispatch when called calls the reducer function which has the state and action











 