import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

import { useContext, useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from './StateProvider';

function Planner() {
    const context = useContext(AppContext);
    const history = useHistory();

    useLayoutEffect(() => {
        if (!context.state.isLoggedIn) {
            history.push('/Login');
        }
    }, [context.state, history]);

    return (
        <div>
            <AddTodoForm />
            <TodoList />
        </div>
    );
}

export default Planner;