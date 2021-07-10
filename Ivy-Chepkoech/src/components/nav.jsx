// import { useContext } from 'react';
// import { AppContext } from './stateProvider';
import { Link, useHistory } from 'react-router-dom';

function Navbar() {

    // I KEPT GETTING A TYPE-OBJECT ERROR I COULDNT FIX IT SO I OPTED TO COMMENT THE PARTS AFFECTED
    // const { state, setState } = useContext(AppContext);
    const history = useHistory();

    const logout = () => {
        // setState(prev => {
        // return {
        // ...prev,
        // isLoggedIn: false,
        // userEmail: null,
        // userId: null
        // };
        // });
        history.push("/home");
    };
    // SO NOW ALL THE LINKS GET DISPLAYED ANG THE LOGOUT FUNCTION REALLY DOESN'T DO MUCH
    return (
        <nav>
            <Link className="navlink" to="/home">Home</Link>

            {/* {!state.isLoggedIn ? ( */}
            <>
                <Link className="navlink" to="/register">
                    Register
                </Link>
                <Link className="navlink" to="/login">
                    Login
                </Link>
            </>
            {/* ) : ( */}
            <>
                <Link className="navlink" to="/todo">
                    To-Do-List
                </Link>
                <span
                    onClick={logout}
                    className="navlink">
                    Logout
                </span>
            </>
            {/* ) */}
            {/* }) */}
        </nav>
    );
}

export default Navbar;