import React, { useState }  from 'react';
import Login from './Login';

function Registration() {
    
   const [name, setName] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setUsername] = useState("");
   const [password, setPassword] = useState("");
  

   const [flag, setFlag] = useState(false);
   const [login, setLogin] = useState(true);

function handleFormSubmit(e) {

    e.preventDefault();

    if (!name || !lastname || !password || !email) {
        setFlag(true);

    } else {
        setFlag(false);        
        localStorage.setItem("todoCartUsername", JSON.stringify(email));
        localStorage.setItem("todoCartPassword", JSON.stringify(password));
        console.log("Saved in Local Storage");

        setLogin(!login)

    }

}

// Directly to the login page
function handleClick() {
    setLogin(!login)
}

 return (
            <div>
         <ol class="breadcrumb">
      
        <li class="breadcrumb-item active">Welcom to Dev4Tech Todo List</li>
      </ol>
		<div class="box_general padding_bottom">
        {login ? 
        <form onSubmit={handleFormSubmit}>
			<div class="header_box version_2">
				<h2><i class="fa fa-user"></i>Registration</h2>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="form-group">	
                    <br></br> <br></br>
                    {flag &&
                    <p color='primary' variant="danger" >
                        I got it you are in hurry! But every Field is important!
                   </p>}
                    <br></br> 		

					<p>If you have already have an account <a href="/login" onClick={handleClick} >log in?</a>  here.</p>
				    </div>
				</div>
				<div class="col-md-8 add_top_30">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Name</label>
								<input type="text" class="form-control" name="name" placeholder="Your name" onChange={(event) => setName(event.target.value)}/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Last name</label>
								<input type="text" class="form-control" name="lastname" placeholder="Your last name" onChange={(event) => setLastname(event.target.value)}/>
							</div>
						</div>
					</div>
			
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Username</label>
								<input type="email" class="form-control"  placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label>Password</label>
								<input type="password" class="form-control" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
							</div>
						</div>
                        <div class="col-md-3">
							<div class="form-group">
								<label>Confirm Password</label>
								<input type="Password" class="form-control" name="cpassword" placeholder="Confirm Password"/>
							</div>
						</div>
					</div>
				
				</div>
			</div>
            <button  class="btn_1 medium">Register</button>
            </form> : <Login />}
            </div>
            </div>
          
        );
}
 
export default Registration;