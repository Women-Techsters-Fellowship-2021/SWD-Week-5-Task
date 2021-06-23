import {useContext} from 'react' 
import{AppContext} from '../componnents/appState';

export default function useContextGetter(){
    const context = useContext(AppContext);
    return context;

}
