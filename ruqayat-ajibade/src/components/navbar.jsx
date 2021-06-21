import { useContext } from "react";
import { AppContext } from "./stateprovider";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import Styles from "../styles/navbar.module.css";

function Navbar() {

  const context = useContext(AppContext);
  const history = useHistory();

  function logOut(){
    context.dispatch({
      type: "LOGOUT",
    });
    history.push("/login");
  }

  return (
    <nav className={Styles.navbar}>
      <Link className={Styles.navlink} to="/home">
        Home
      </Link>
      {context.state.isUserLoggedIn ? (
        <>
          <Link className={Styles.navlink} to="/todopage">
            Todo Page
          </Link>
          <span className={Styles.navlink} onClick={logOut}>
            Log Out
          </span>
        </>
      ) : (
        <>
          <Link className={Styles.navlink} to="/register">
            Register
          </Link>
          <Link className={Styles.navlink} to="/login">
            Login
          </Link>
        </>
      )}
    </nav>
  );
};
export default Navbar;
