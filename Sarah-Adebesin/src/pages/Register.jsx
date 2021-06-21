import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { AppContext } from '../components/StateProvider';
import { useHistory } from 'react-router-dom';

function Register() {
    const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
    const history = useHistory();

    useEffect(() => {
        //If a user is logged in, navigate away from current page to TodoList page
        if (context.state.isLoggedIn) {
            history.push('/TodoList');
        }
    }, [context.state, history]);

    const registerUser = ({ email, password, confirmPassword }) => {
        //check if passwords match
        if (password !== confirmPassword) {
            return alert("Passwords don't match");
        }

        //Send a request to register a new user
        let newUser = {
            email,
            password,
        };

        fetch(
            `https://user-manager-three.vercel.app/api/user/register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newUser)
            }
        )
            .then(res => res.json())
            .then(result => {
                if (result.error === true) {
                    console.log(result);
                }

                context.dispatch({
                    type: 'REGISTER',
                    payload : result.body,
                });

                history.push('/TodoList');

             })
            .catch(err => {
                console.log('this error occurred', err);
                alert('Oops! an error occured, please try again later');
            });

    }


    return (
        <form className="form" onSubmit={handleSubmit(registerUser)}>
            <div>
                <h2 className="redhead">Get started with organizing your plans</h2>
            </div>
            <br />
            <div>
                <label htmlFor="email">Email</label>
                <br />
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    {...register('email')}
                />
            </div>
            <br />
            <div>
                <label htmlFor="password">Password</label>
                <br />
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    required
                    {...register('password')} 
                />
            </div>
            <br />
            <div>
                <label htmlFor="confirm-password">Confirm Password</label>
                <br />
                <input 
                    type="password" 
                    name="confirm-password" 
                    id="confirm-password"
                    required
                    {...register('confirmPassword')}
                />
            </div>
            <br />
            <div>
                <button type="submit" className="edit btn">Register</button>
            </div>
        </form>
    );   
}

export default Register;
















































































































// import { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import { AppContext } from '../components/StateProvider';
// import { useForm } from 'react-hook-form';
// import { auth } from './firebase';
// import { useEffect, useState} from 'react';

// //import styles
// import '../styles/register.css';

// const Register = () => {
//     const { register, handleSubmit } = useForm();
//     const { state, setState } = useContext(AppContext);
//     const history = useHistory();
//     const [user, setUser] = useState([]);

//     const createAccount = () => auth.signInAnonymously()

//     function registerUser({ email, password, confirmPassword }) {
//         if (!email) {
//             return alert('Please provide an email');
//         }
//         if (password !== confirmPassword) {
//             return alert("Passwords don't match");
//         }

//         let userFound = localStorage.getTodo(email);
//         console.log(userFound);
//         if (userFound) {
//             return alert('This user has already been registered');
//         }
//         //create a new user object and save it to local storage
//         const newUser = {
//             email: email,
//             password: password,
//             userId: Date.now(),
//         };
//         //save users data in other to access it later
//         localStorage.setTodo(email, JSON.stringify(newUser));

//         alert('User registered!');
//         setState(prevValue => {
//             return {
//                 ...prevValue,
//                 isLoggedIn: true,
//                 userId: newUser.userId,
//                 userEmail: newUser.userEmail
//             };
//         });
//         history.push('/home');
//     }

//     useEffect(() => {
//         auth.onAuthStateChanged((user) => {
//             if (user) {
//                 setUser(user.JSON());
//             }
//         });
//     }, []);

//     return (
//         <>
//             <div className='container__child signup__form'>
// 				<form onSubmit={handleSubmit(registerUser)}>
// 					<div className='form-group'>
// 						<label htmlFor='email'>Email</label>
// 						<input
// 							className='form-control'
// 							type='text'
// 							name='email'
// 							id='email'
// 							placeholder='username@address.com'
// 							{...register('email', { required: true })}
// 						/>
// 					</div>
// 					<div className='form-group'>
// 						<label htmlFor='password'>Password</label>
// 						<input
// 							className='form-control'
// 							type='password'
// 							name='password'
// 							id='password'
// 							placeholder='********'
// 							{...register('password', { required: true })}
// 						/>
// 					</div>
// 					<div className='form-group'>
// 						<label htmlFor='passwordRepeat'>Repeat Password</label>
// 						<input
// 							className='form-control'
// 							type='password'
// 							name='passwordRepeat'
// 							id='passwordRepeat'
// 							placeholder='********'
// 							{...register('confirmPassword', { required: true })}
// 						/>
// 					</div>
// 					<div className='m-t-lg'>
// 						<ul className='list-inline'>
// 							<li>
// 								{user ? null : <button onClick={createAccount} className='btn btn--form' type='submit'>
// 									Register
// 								</button>}
// 							</li>
// 							<li>
// 								<a className='signup__link' href='/login'>
// 									I already have an account
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</form>
// 			</div>
//         </>
//     );
// };

// export default Register;