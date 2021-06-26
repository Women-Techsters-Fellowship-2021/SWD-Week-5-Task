import React,{ useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { AppContext } from '../components/appstate';

function Login() {

	const context = useContext(AppContext);
    const history = useHistory();

	const { register, handleSubmit } = useForm();

	const loginHandler = ({ email, password }) => {
		// create data to be sent to the api for validation
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
				if (result.error) {
					return alert(result.message);
				}

				context.dispatch({
					type: 'LOGIN',
					payload: result.body,
				});

				history.push('/todo-list');
			})
			.catch(err => {
				alert(
					'Unable to complete request. Please try again after some time'
				);
				console.log({ err });
			});
	};

	return (
		<form onSubmit={handleSubmit(loginHandler)}>
            <div>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					required
					{...register('email')}
				/>
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					id='password'
					required
					{...register('password')}
				/>
			</div>
			<div>
				<button className='btn' type='submit' style={{background:'#fff', width:'100px', marginLeft:'100px'}}>
					Login
				</button>
			</div>

        </form>
	);
}

export default Login;