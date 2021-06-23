import {useLayoutEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useContext} from 'react' 
import {AppContext} from '../components/appState'
import {useHistory} from 'react-router-dom'


const SignUp=()=>{
    const { register , handleSubmit }=useForm()
    const context=useContext(AppContext);
    const history=useHistory();

    const handleSignup=({
        email,
        password,
        confirmPassword,
    })=>{
        if (password !== confirmPassword){
            return alert(`passwords don't match`)
        }
        
        
            let newuser = {
            email: email,
            password: password
            }

            fetch(`https://user-manager-three.vercel.app/api/user/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newuser)
            })
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
                console.log('this error occurred', err);
                alert('an error occured, please try again')
            });
            
    };
       
    useLayoutEffect(()=>{
        if(context.state.isUserLoggedIn){
            history.push('/toDoList');
        }
    },[context.state,history])

    

    

    return(
        <form onSubmit={handleSubmit(handleSignup)}>
        
            <div>
                <h2>Sign Up Here</h2>
            </div>
            <br />
            <div>
                <input 
                    name='email' 
                    type='email'
                    id='email'
                    placeholder='email'
                    required
                    {...register('email')}
                />
            </div>
            <br />
            <div>
                <input 
                    name='password' 
                    type='password'
                    id='password'
                    placeholder='paasword'
                    required
                    {...register('password')}
                  />
            </div>
            <br />

            <div>
                <input 
                    name='confirm-password' 
                    type='confirm-password'
                    id='confirm-password'
                    placeholder='confirm Password'
                    required
                    {...register('confirmPassword')}
                  />
            </div>
            <br />
            <div>
                <button type='submit'>sign Up</button>
            </div>
        </form>
        
    );
}

export default SignUp