import { Link, useLocation,useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import { AppContext } from '../components/appstate';

function Navigation() {
	
    const context = useContext(AppContext);
    const location = useLocation();
    const history = useHistory();

	const logout = () => {
		context.dispatch({
			type: 'LOGOUT',
		});
        history.push('/login');
	};

    const conditionalRendering = () => {
		if (!context.state.isUserLoggedIn && location.pathname === '/login') {
			return (
				<>
					<Link to='/register'>Register</Link>
				</>
			);
		}

		if (!context.state.isUserLoggedIn && location.pathname === '/register') {
			return (
				<>
					<Link to='/login'>Login</Link>
				</>
			);
		}

		if (context.state.isUserLoggedIn) {
			return (
				<>
					<Link to='/todo-list'>My List</Link>
					<br />
					<span onClick={logout} style={{cursor:'pointer'}}>Logout</span>
				</>
			);
		}
	};

    return(
        <div>
            
            {conditionalRendering()}
        </div>
    )
}

export default Navigation;


// {!context.state.isUserLoggedIn 
//     && location.pathname === '/login' 
// ? (
//     <>
//         <Link to='/todo-list'>My List</Link>
//         <br />
//         <span onClick={logout}>Logout</span>
//     </>
//  ) : (
//     <>
//         <Link to='/login'>Login</Link>
//         <br />
//         <Link to='/register'>Register</Link>
//         <br />
//     </>
// )}