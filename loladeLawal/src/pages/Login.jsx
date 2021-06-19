import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function Login() {


	const { register, handleSubmit } = useForm();
	const history = useHistory();

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



				history.push('/todo-app');
			})
			.catch(err => {
				alert(
					'Unable to complete request. Please try again after some time'
				);
				console.log({ err });
			});
	};

	return (
		
        <div className='container'>
            <form className='form-container' onSubmit={handleSubmit(loginHandler)}>
                <div>
                    <h2>Login</h2>
                    <span>Welcome back, Login to view your todo lists</span>
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
        </div>
	);
}

export default Login;
