// import AppState from './components/appstate';
import { useContext,useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppContext } from '../components/appState';


function Login() {

	
	const context = useContext(AppContext);
	console.log(context);

	const { register , handleSubmit } = useForm();
	const history = useHistory();

	const loginHandler = ({ email, password }) => {

		
		// create data to be sent to the api for validation
		let userdata = {
			email: email,
			password: password,
		};

		fetch('https://user-manager-three.vercel.app/api/user/login',
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
			if (result.error === true) {
				return alert(result.message);
			}
			
	
			context.dispatch({
				type: 'LOGIN',
				payload: result.body,
			});
	
	
			history.push('/toDoList');
		})
		.catch(err => {
			alert(
				'Unable to complete request.'
			);
			console.log({ err });
		});
	
		
	};
	
		
	
	//monitoring when state changes
		useLayoutEffect(()=>{
			if(context.state.isUserLoggedIn){
				history.push('/toDoList');
			}
		},[context.state,history])

	return (
		<form onSubmit={handleSubmit(loginHandler)}>
			<div>
				<h2>LOGIN</h2>
			
			</div>
			<div>
				<input
				type='email' 
				id='email' 
				name='email' 
				placeholder='email'
				required
				{...register('email')}
				/>
				
			</div>
			<br />
			<div>
				<input
				type='password' 
				id='password' 
				name='password' 
				placeholder='password'
				required
				{...register('password')}
				/>
				
			</div>
			<br />
			<div>
			
				<button type='submit'>Login</button>
        	</div>
		</form>
	);
}

export default Login;










//using axios 

// const loginHandler =async ({ email, password }) => {

// 	try{
// 	// create data to be sent to the api for validation
// 	let userdata = {
// 		email: email,
// 		password: password,
// 	};

// 	const res = await fetch(
// 		'https://user-manager-three.vercel.app/api/user/login',
// 		{
// 			method: 'POST',
// 			headers: {
// 				'content-type': 'application/json',
// 			},
// 			body: JSON.stringify(userdata),
// 		}
// 	)
// 	const data= res.json();
	
// 	if(data.error===true){
// 		alert(data.message)
// 	}
// 	context.dispatch({
// 		type: 'LOGIN',
// 		payload: data.body,
// 	});

// }
// catch (err){
	
// 		alert(
// 			'Unable to complete request.'
// 		);
// 		console.log({ err });
	
// }
	


//  };