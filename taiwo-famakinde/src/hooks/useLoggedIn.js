import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useContextGetter from './useContextGetter';

export default function useLoggedIn() {
    const context = useContextGetter();
    const history = useHistory();

    useEffect(() => {
        // if user is logged in, navigate to main todo app page

        if (context.state.isUserLoggedIn) {
            history.push('/todo-app');
        }
    }, [context.state, history]);
}
