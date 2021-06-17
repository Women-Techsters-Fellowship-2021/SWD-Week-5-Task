import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppContext } from '../Components/AppStates';
import  "../Styles/Pages.css";

const Register=()=> {

	const { register, handleSubmit } = useForm();
    const {dispatch } = useContext(AppContext);
	const userHistory = useHistory();

    function registerUser({ email, password, confirmpassword }) {
		if (!email) {
			return alert(`please provide an email`);
		}
		if (password !== confirmpassword) {
        return alert(`passwords don't match`);
		}
		
		// create new user object and post to API
		const newUser = {
			email: email,
			password: password,
			userId: Date.now(),
		};
		
        fetch(`https://user-manager-three.vercel.app/api/user/register`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(newUser)
          })
            .then(res => res.json())
            .then(result => {
                if (result.error===false){
                    alert(result.message + ', SignIN to continue.');
                    dispatch({
                        type: 'REGISTER',
                        payload: {
                            userId: newUser.userId,
                            userEmail: newUser.email,
                        },
                    });
                    userHistory.push('/login');
                }
                              })
            .catch(err => {
              console.log('This error occurred'+ err);
            })

		
	}

// Register form template
    return (

      <div className="limiter">
          <div className="wrap-login100">
                <form className="login100-form validate-form p-l-55 p-r-55 p-t-178"
                onSubmit ={handleSubmit(registerUser)}>
                    <span className="login100-form-title">New User Sign UP!</span>
                        <div className="wrap-input100 validate-input m-b-16">
                                <input className="input100" 
                                type="text" name="username" 
                                placeholder="jane.doe@gmail.com"
                                {...register('email', { required: true })}/>
                         </div>
                        <div className="wrap-input100 validate-input m-b-16">
                                <input className="input100"
                                 type="password" name="pass"
                                 id="password"
                                  placeholder="password"
                                  {...register('password', { required: true })}/>
                                    
                        </div>
                        <div className="wrap-input100 validate-input m-b-16">
                                <input className="input100"
                                 type="password" name="Confirmpassword" 
                                 id="confirmpassword"
                                 placeholder="confirm password"
                                 {...register('confirmpassword', { required: true })}/>
                                    
                        </div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn"> Sign Up</button>
                        </div>


                             </form>
                </div>
                </div>
                
    );
  }
  
  export default Register;