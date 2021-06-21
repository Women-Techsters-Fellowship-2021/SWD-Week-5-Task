import { createContext, useReducer } from "react";

export const AppContext = createContext();

function reducer(state, action) {
  // create a copy of your state
  let stateCopy = { ...state };

  // set the name on our state copy to action
  stateCopy.action = action;

  // if action.type is ADD_ITEM
  // add the payload to shoppingList
  if (action.type === "ADD_ITEM") {
    stateCopy.todoList.unshift(action.payload);
  }

  if (action.type === "REMOVE_ITEM") {
    let list_item = action.payload;
    stateCopy.todoList = stateCopy.todoList.filter(
      (item) => item.id !== list_item.id
    );
  }
  // if action.type is LOGIN
  // set isUserLoggedIn to true
  // & set userData to payload

  if (action.type === "LOGIN") {
    stateCopy.isUserLoggedIn = true;
    stateCopy.userData = action.payload;
  }

  // if action.type is LOGOUT
  // set isUserLoggedIn to false
  // & set userData to null

  if (action.type === "LOGOUT") {
    stateCopy.isUserLoggedIn = false;
    stateCopy.userData = null;
  }

  return stateCopy;
}

const initialState = {
  todoList: [],
  isUserLoggedIn: false,
  userData: null,
};

export default function StateProvider({ children }) {
  const [appstate, dispatch] = useReducer(reducer, initialState);

  const contextObject = {
    state: appstate,
    dispatch: dispatch,
  };

  return (
    <AppContext.Provider value={contextObject}>{children}</AppContext.Provider>
  );
}
