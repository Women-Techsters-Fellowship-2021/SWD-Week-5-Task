import { useContext } from 'react';
import { AppContext } from '../components/appstate';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
// import Navbar from '../components/navbar';

function Register() {
	const { register, handleSubmit } = useForm();
	const context = useContext(AppContext);
	const history = useHistory();

	const handleRegister = ({ email, password, confirmPassword }) => {
		// check if the password and confirm password match
		if (password !== confirmPassword) {
			return alert(`passwords don't match`);
		}

		// send a request to register a new user
		let newuser = {
			email: email,
			password: password,
		};

		fetch(`https://user-manager-three.vercel.app/api/user/register`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(newuser),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.error === true) {
					return alert(result.message);
				}

				context.dispatch({
					type: 'LOGIN',
					payload: result.body,
				});

			
			})
			.catch((err) => {
				console.log('this error occurred', err);
				alert('an error occurred. Please try again later');
			});

            	// save the users data for accessing later
				localStorage.setItem(email, JSON.stringify(newuser));

		history.push('/login');
	};

	return (
		<>
			{/* <Navbar /> */}

			<form onSubmit={handleSubmit(handleRegister)}>
				<div>
					<h2>Register</h2>
					<span>Complete and begin your tasks dump.</span>
				</div>
				<br />
				<div>
					<label htmlFor='email'>email</label>
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
					<label htmlFor='password'>password</label>
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
					<label htmlFor='confirm-password'>confirm password</label>
					<br />
					<input
						type='password'
						name='confirm-password'
						id='confirm-password'
						required
						{...register('confirmPassword')}
					/>
				</div>
				<br />
				<div>
					<button type='submit' className='btn '>
						register
					</button>
				</div>
			</form>
		</>
	);
}

export default Register;
