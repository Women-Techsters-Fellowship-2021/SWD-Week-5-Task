import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AppContext } from '../components/StateProvider';
import { useHistory } from 'react-router-dom';


function Login() {
	const context = useContext(AppContext);
	//console.log(context);

	const { register, handleSubmit } = useForm();
	const history = useHistory();

	//function to login a user
	const loginUser = ({ email, password }) => {
		// create data to be sent to the API for validation
		let userData = {
			email,
			password,
		};

		fetch(
			'https://user-manager-three.vercel.app/api/user/login',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(userData),
			}
		)
			.then(res => res.json())
			.then(result => {
				if (result.error === true) {
					console.log(result);
					//return alert(result.message);
				}
				context.dispatch({
					type: 'LOGIN',
					payload: result.body,
				});

				history.push('/TodoList');
			})
			.catch(err => {
				alert('Unable to complete request. Please try again later');
				console.log({ err });
			});
	};

	return (
		<form className="form" onSubmit={handleSubmit(loginUser)}>
			<div>
				<h2 className="redhead">Login to check your todo list</h2>
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
				<button className='edit btn' type='submit'>
					Login
				</button>
			</div>
		</form>
	);
}

export default Login;








// useEffect(() => {
// 	//If a user is logged in, navigate away from current page to TodoList page
// 	if (context.state.isLoggedIn) {
// 		history.push('/TodoList');
// 	}
// }, [context.state, history]);