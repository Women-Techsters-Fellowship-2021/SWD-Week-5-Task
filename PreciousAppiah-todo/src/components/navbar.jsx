import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './appState';
import  '../style/input.css'

function Navbar() {
	const context = useContext(AppContext);

	const logout = () => {
		context.dispatch({
			type: 'LOGOUT',
		});
	};

	return (
		<nav className='navbar'>
			{context.state.isUserLoggedIn ? (
				<>
					<Link   to='/toDoList' >My List</Link>
					<br />
					
					<span onClick={logout}>Logout</span>
				</>
			) : (
				<>
					<Link className='link' activclassName='link' to='/login'>Login</Link>
					<br />
					<Link to='/signup'>Sign Up</Link>
					<br />
				</>
			)}
		</nav>
	);
}

export default Navbar;