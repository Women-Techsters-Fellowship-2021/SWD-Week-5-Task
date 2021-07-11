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
		if (password!== confirmpassword) {
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
                    console.log(result);
                    alert(result.message + ', SignIN to continue.');
                    dispatch({
                        type: 'REGISTER',
                        payload: {
                            userId: result.body.id,
                            userEmail:result.body.email,
                        },
                    });
                    userHistory.push('/login');
                }
                              })
            .catch(err => {
              console.log('This error occurred'+ err);
            })

		
	}

// The template for the register
     return (
         <form onSubmit={handleSubmit(registerUser)}>
             <div>
                 <h2>Register </h2>
                 <span>New User!</span>
             </div>
             <br />
             <div>
                 <label htmlFor='email'>Email
                 </label>
                 <br />
                 <input 
                 type='email'
                  name='email'
                   id='email'
                  {...register('email')}
                  />
             </div>
             <br />
             <div>
                 <label htmlFor='password'>Password
                 </label>
                 <br />
                 <input 
                 type='password'
                  name='password'
                   id='password'
                  {...register('password')}
                  />
                 
             </div>
             <br />
             <div>
                 <label htmlFor='confirmpassword'>Confirm Password
                 </label>
                 <br />
                 <input 
                 type='password'
                  name='confirmpassword'
                   id='confirmpassword'
                  {...register('confirmpassword')}
                  />
                 
             </div>
             <br />
             <div>
                 <button type='submit' ClassName='btn'>
                     Register
                     </button> 
             </div>


         </form>
     );
}
export default Register;
  