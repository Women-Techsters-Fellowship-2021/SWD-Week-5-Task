import React from 'react'

const Login= () => {
  return (
  
          <div className="gop">
      <h1>Login</h1>
      
      <form>
      <container>

          <label>
              <p>Email</p>
              <input name="email" type="email" placeholder="Email">
              </input>
          </label>

          <label>
              <p>Password</p>
              <input name="password" type="password" placeholder="Password">
              </input>
          </label>
         
       </container>
       <br></br>
       <button type="submit">Login</button>
      </form>
    </div>
  )
}
  


export default Login;