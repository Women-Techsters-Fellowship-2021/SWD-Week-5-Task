import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../Components/AppStates';
import  "../Styles/Pages.css";

export default function Login() {
    const context  = useContext(AppContext);
	const { register, handleSubmit } = useForm();
	const userHistory = useHistory();

    const Userlogin = ({email, password }) => {

      let userlogin = {
        email : email,
        password: password,
      }

      fetch(`https://user-manager-three.vercel.app/api/user/login`, {
        method: 'POST',
        headers: {
        'Content-type': 'application/json',
          },
            body: JSON.stringify(userlogin)
        })
          .then(res => res.json())
            .then(result => {
         console.log(result)
         if (!result.body) {
          return alert(result.message);
         }

         if(result.error===false) {
          alert("Login Successful!, Welcome: "+ result.body.email );
          
         context.dispatch({
            type: 'LOGIN',
            payload: {
              userId:result.body.id,
              userEmail:result.body.email,
                     },
          });
          userHistory.push('/addtask');
         }
        
              })
              .catch(err => {
                console.log('This error occurred'+ err);
              })
	
	};




    return (

      <div className="limiter">
          <div className="wrap-login100">
                <form 
                className="login100-form validate-form p-l-55 p-r-55 p-t-178"
                    onSubmit={handleSubmit(Userlogin)}>
                    <span className="login100-form-title">Sign In</span>
                        <div className="wrap-input100 validate-input m-b-16">
                                <input 
                                className="input100"
                                 type="text" name="username"
                                  placeholder="Email"
                                  required
                                  {...register("email")}/>
                         </div>
                        <div className="wrap-input100 validate-input m-b-16">
                                <input className="input100" 
                                type="password" name="pass" 
                                placeholder="Password"
                                required
                                  {...register("password")}/>
                                    
                        </div>
                        <div className="container-login100-form-btn">
                        <button className="login100-form-btn" type="submit"> Sign in</button>
                        </div>


                <div className="flex-col-c p-t-170 p-b-40">
                <span className="txt1 p-b-9">
                Don’t have an account?
                </span>
                <a href="/register" className="txt3">Sign up now</a>
                </div>
                </form>
                </div>
                </div>
                
    );
  }
  
