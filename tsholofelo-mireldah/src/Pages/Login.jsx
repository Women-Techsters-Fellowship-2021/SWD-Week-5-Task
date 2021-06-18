import React, {useState} from 'react';
import Dashboard from './Home/Dashboard';

function Login() {
 
	 const [emaillog, setEmaillog] = useState(" ");
	 const [passwordlog, setPasswordlog] = useState(" ");
 
	 const [flag, setFlag] = useState(false); 
	 const [dashboard, setDashboard] = useState(true);
	
 
	 function handleLogin(e) {
		 e.preventDefault();
		 let pass = localStorage.getItem('todoCartPassword').replace(/"/g, "");
		 let mail = localStorage.getItem('todoCartUsername').replace(/"/g, "");
		 // .replace(/"/g,"") is used to remove the double quotes for the string
 
		 if (!emaillog || !passwordlog) {
			 setFlag(true);
			 console.log("EMPTY");
		 } else if ((passwordlog !== pass) || (emaillog !== mail)) {
			 setFlag(true);
		 } else {
			 setDashboard(!dashboard);
			 setFlag(false);
			 
		 }
	 }


return (
            <div>
				
         <ol class="breadcrumb">
      
        <li class="breadcrumb-item active">Welcom to Dev4Tech Todo List</li>
      </ol>
	 
		<div class="box_general padding_bottom">
			 {dashboard ? <form onSubmit={handleLogin}>
			<div class="header_box version_2">
				<h2><i class="fa fa-user"></i>Login</h2>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="form-group">
					<br></br> <br></br>
					{flag && <p color='primary' variant="warning" >Fill correct Info else keep trying.                   </p>}
						<br></br> 		
					<p>If you dont have have an account <a href="/Registration"> Register</a> here.</p>					
				    </div>
				</div>
				<div class="col-md-8 add_top_30">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Username</label>
								<input type="email" class="form-control" placeholder="Username" onChange={(event) => setEmaillog(event.target.value)} />
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Password</label>
								<input type="password" class="form-control" placeholder="Password" onChange={(event) => setPasswordlog(event.target.value)} />
							</div>
						</div>
					</div>
				</div>
			</div> <button class="btn_1 medium">Login</button>
		 </form>
                : <Dashboard />
            }
		</div>	
	
            </div>
        );
}
 
export default Login;