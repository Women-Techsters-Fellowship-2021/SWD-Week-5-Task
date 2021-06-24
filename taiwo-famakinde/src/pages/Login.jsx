import { useForm } from 'react-hook-form';
import useContextGetter from '../hooks/useContextGetter';
import useLoggedIn from '../hooks/useLoggedIn';
import Navbar from '../components/navbar';

function Login() {
	// redirect the user to the todo list page if they are already signed in
	useLoggedIn();

	const context = useContextGetter();

	const { register, handleSubmit } = useForm();

	const loginHandler = ({ email, password }) => {
		// create data to be sent to the api for validation
		let newuser = {
			email: email,
			password: password,
		};

		fetch(`https://user-manager-three.vercel.app/api/user/login`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newuser),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.error) {
					return alert(result.message);
				}

				context.dispatch({
					type: 'LOGIN',
					payload: result.body,
				});
			})
			.catch((err) => {
				alert('Unable to complete request. Please try again after some time');
				console.log({ err });
			});
	};

	return (
		<>
			<Navbar />

			<form onSubmit={handleSubmit(loginHandler)}>
				<div>
					<h2>Login</h2>
					<span>Hello User, login to view your tasks</span>
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
					<button className='btn' type='submit'>
						login
					</button>
				</div>
			</form>
		</>
	);
}

export default Login;
