import { useContext } from 'react';
import { AppContext } from '../components/appstate';
// import  AppState from '../components/appstate';

console.log("in this file")
function useContextGetter() {
    const context = useContext(AppContext)
    // console.log("items", AppState());
    // console.log("stuff", context);
    return context;
}

export default useContextGetter;