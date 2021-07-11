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
		<form onSubmit={handleSubmit(Userlogin)}>
			<div>
				<h2>Login</h2>
				<span>Login to View MyToDoApp</span>
			</div>
			<br />
			<div>
				<label htmlFor='email'>Email</label>
				<br />
				<input
					type='email'
					name='email'
					id='email'
					required
					{...register('email')}
				/>
			</div>
			<br />
			<div>
				<label htmlFor='password'>Password</label>
				<br />
				<input
					type='password'
					name='password'
					id='password'
					required
					{...register('password')}
				/>
			</div>
			<br />
			<div>
				<button className='btn' type='submit'>
					Login
				</button>
			</div>
		</form>
	);
}

