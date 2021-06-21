import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import { AppContext } from '../components/stateprovider';
import '../styles/login.css';

const Login = () => {

	const { setState } = useContext(AppContext);
	const { register, handleSubmit } = useForm();
	const history = useHistory();

    const login = ({ email, password }) => {
        // get the users data
        const user = localStorage.getItem(email);
        
        if (!user) {
			return alert('An account for this email was not found');
        }
        
        const userdata = JSON.parse(user);

		if (password !== userdata.password) {
			return alert('Email or Password was incorrect');
        }
        
        alert('Login Successful');
        setState(prevstate => {
			return {
				...prevstate,
				isLoggedIn: true,
				userId: userdata.userId,
				userEmail: userdata.email,
			};
		});
		history.push('/home');
    }

return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(login)} className='form'>

                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter your email'
                    {...register('email')}
                />

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='********'
                    {...register('password')}
                />

                <button type='submit' className='login-btn'>Login</button>
                <Link to='/register' className='register-link'>New user? Create an account</Link>

            </form>
        </div>
    )    
}

export default Login;