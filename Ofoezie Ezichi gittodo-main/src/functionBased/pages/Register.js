import React from 'react'
import classes from './Register.module.css'
const Register = () => {
  return (
  
          <div className={classes.wrapper}>
      <h1 className={classes.rap}>Register</h1>
      
      <form>
      <container>
          <label className={classes.pin}>
            <p>First Name</p>
            <input className={classes.tow}  name="Firstname" type="text" placeholder="FirstName" />
          </label>

           <label>
            <p>Last Name</p>
            <input name="Lastname" type="text" placeholder="LastName" />
          </label>

          <label>
            <p>Address</p>
            <input name="text" type="textarea" placeholder="Address"/>
          </label>

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
          
          <label>
              <p>Confirm Password</p>
              <input name="password" type="password" placeholder="Confirm password">
              </input>
          </label>
       </container><br></br>
       <button className={classes.btn} type="submit">Submit</button>
      </form>
    </div>
  )
}
  


export default Register