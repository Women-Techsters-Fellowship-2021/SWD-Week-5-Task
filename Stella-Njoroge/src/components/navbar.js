import { useContext } from 'react';
import { AppContext } from './stateprovider';
import { Link, useHistory } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
	const { state, setState } = useContext(AppContext);
	const history = useHistory();

	const logout = () => {
		setState(prev => {
			return {
				...prev,
				isLoggedIn: false,
				userEmail: null,
				userId: null,
			};
		});
		history.push('/');
	};

	return (
		<nav className='navbar'>
			{!state.isLoggedIn ? (
				<div>
					<Link to='/register' className='nav-link'>Register</Link>
					<Link to='/login' className='nav-link'>Login</Link>
				</div>
			) : (
				<div>
					<Link to='/home' className='nav-link'>Todos</Link>
					<span onClick={logout} className='nav-link'>Logout</span>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
