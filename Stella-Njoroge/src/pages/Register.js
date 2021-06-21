import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AppContext } from '../components/stateprovider';
import { useHistory, Link } from 'react-router-dom';
import '../styles/register.css';

const Register = () => {

	const { register, handleSubmit } = useForm();
	const { setState } = useContext(AppContext);
	const history = useHistory();

	function registerUser({ email, password, confirmPassword }) {
		if (!email) {
			return alert('please provide an email');
		}
		if (password !== confirmPassword) {
			return alert('passwords do not match');
		}
		let userFound = localStorage.getItem(email);
		if (userFound) {
			return alert('this user already has an account');
		}
		// create new user object and save it to local storage
		const newUser = {
			email: email,
			password: password,
			userId: Date.now(),
		};
		localStorage.setItem(email, JSON.stringify(newUser));

		alert('user registered');
		setState(prevValue => {
			return {
				...prevValue,
				isLoggedIn: true,
				userId: newUser.userId,
				userEmail: newUser.email,
			};
		});
		history.push('/home');
	}

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(registerUser)} className='form'>

                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter your email'
                    {...register('email', { required: true })}
                />

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='********'
                    {...register('password', { required: true })}
                />

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    placeholder='********'
                    {...register('confirmPassword', { required: true })}
                />

                <button type='submit' className='register-btn'>Register</button>
                <Link to='/login' className='login-link'>I already have an account</Link>

            </form>
        </div>
    )
}

export default Register;