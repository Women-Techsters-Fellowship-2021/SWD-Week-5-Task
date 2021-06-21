import "../styles/login.css";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppContext } from "../components/stateprovider";
import { useContext } from "react";

export default function Login() {

  const context = useContext(AppContext)
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const loginHandler = ({ email, password }) => {

   let userdata = {
			email: email,
			password: password,
		};

		fetch(
			'https://user-manager-three.vercel.app/api/user/login',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(userdata),
			}
		)
			.then(res => res.json())
			.then(result => {
        console.log(result)
				if (result.error) {
					return alert(result.message);
				}
        alert("Login successful");
        
				context.dispatch({
					type: 'LOGIN',
					payload: result.body,
				});

				history.push("/todopage");
			})
			.catch(err => {
				alert(
					'Unable to complete request. Please try again after some time'
				);
				console.log({ err });
			});
	
  };
  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit(loginHandler)}>
          <div className="input-container c1">
            <input
              id="email"
              className="input"
              type="text"
              required
              {...register("email")}
              placeholder=" "
            />
            <div className="cut" />
            <label htmlFor="Email" className="placeholder">
              Email
            </label>
          </div>
          <div className="input-container c2">
            <input
              id="password"
              className="input"
              type="password"
              required
              {...register("password")}
              placeholder=" "
            />
            <div className="cut" />
            <label htmlFor="Password" className="placeholder">
              Password
            </label>
          </div>

          <button type="submit" className="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

