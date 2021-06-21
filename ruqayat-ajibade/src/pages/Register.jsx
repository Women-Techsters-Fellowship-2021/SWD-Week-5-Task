import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AppContext } from "../components/stateprovider";

// scoped styling imported
import "../styles/register.css";

function Register() {
  const { register, handleSubmit } = useForm();
  const context = useContext(AppContext);
  const history = useHistory();

  const registerUser = ({ email, password, confirmPassword }) => {
    //  confirm if passowrds entered match
    if (password !== confirmPassword) {
      return alert("The password entered does not match");
    }

    // send a request to the api to register a new user
    let newuser = {
      email: email,
      password: password,
    };

    fetch(`https://user-manager-three.vercel.app/api/user/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newuser), 
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error === true) {
          return alert(result.message);
        }

        context.dispatch({
          type: "LOGIN",
          payload: result.body,
        });

        history.push("/todopage");
      })
      .catch((err) => {
        console.log("this error occurred", err);
        alert("an error occurred. Please try again later");
      });
  };

  return (
    <div className="register-form-container">
      <div className="form">
        <div className="register-title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <form onSubmit={handleSubmit(registerUser)}>
          <div className="input-container ic1">
            <input
              id="email"
              className="input"
              type="text"
              {...register("email", { required: true })}
              placeholder=" "
            />

            <div className="cut" />
            <label htmlFor="Email" className="placeholder">
              Email
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="password"
              className="input"
              type="password"
              {...register("password", { required: true })}
              placeholder=" "
            />
            <div className="cut" />
            <label htmlFor="Password" className="placeholder">
              Password
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="confirm-password"
              className="input"
              type="password"
              {...register("confirmPassword", { required: true })}
              placeholder=" "
            />
            <div className="cut" />
            <label htmlFor="Password" className="placeholder">
              Confirm Password
            </label>
          </div>
          <button type="submit" className="submit">
            Sign Up
          </button>
        </form>
        <a className="login-link" href="/login">
          I already have an account
        </a>
      </div>
    </div>
  );
}

export default Register;
