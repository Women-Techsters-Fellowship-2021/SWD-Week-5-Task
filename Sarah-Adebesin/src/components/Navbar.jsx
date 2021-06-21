import { useContext } from 'react';
import { AppContext } from './StateProvider';
import { Link } from 'react-router-dom';

//import styles
import styles from '../styles/navbar.module.css';

function Navbar() {
    
    const {dispatch, state: {isLoggedIn}} = useContext(AppContext);

    const logout = () => {
        dispatch({
            type: 'LOGOUT',
        })
    }

    const renderNav = () => {
        if (!isLoggedIn) {
            return (
                <>
                    <Link className={styles.navlink} to='/Register'>Register</Link>
                    <Link className={styles.navlink} to='/Login'>Login</Link>
                    <Link className={styles.navlink} to='/Home'>Home</Link>
                </>
    
            );
        } else  if (isLoggedIn) {
			return (
				<>
					<Link className={styles.navlink} to='/TodoList'>My List</Link>
					<span className={styles.navlink} onClick={logout}>Logout</span>
				</>
			);
        }
    }

       
    return (
        <nav>{renderNav()}</nav>
    );
}


export default Navbar;