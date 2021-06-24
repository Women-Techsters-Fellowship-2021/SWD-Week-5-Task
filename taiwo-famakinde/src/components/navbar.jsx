import useContextGetter from '../hooks/useContextGetter';
import { Link, useLocation } from 'react-router-dom';
import styles from '../style/navbar.module.css';


function Navbar() {
	const {
		dispatch,
		state: { isUserLoggedIn },
	} = useContextGetter();
	const location = useLocation();

	// const isUserLoggedIn = true;

	const logout = () => {
		dispatch({
			type: 'LOGOUT',
		});
	};

	const renderNav = () => {
		if (!isUserLoggedIn && location.pathname === '/register') {
			return (
				<>
					<Link className={styles.navlink} to='/login'>Login</Link>
				</>
			);
		}

		if (isUserLoggedIn && location.pathname === '/register') {
			return (
				<>
					<Link className={styles.navlink} to='/login'>Login</Link>
				</>
			);
		}

		if (isUserLoggedIn) {
			return (
				<>
					<Link className={styles.navlink} to='/todo-app'>My List</Link>
					<br />
					<span onClick={logout} className={styles.navlink}>Logout</span>
				</>
			);
		}
	};

	return <nav className={styles.navbar}>{renderNav()}</nav>;




}

export default Navbar;




