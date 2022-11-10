import React, { Component } from 'react';
import Header from '../Common/Header';
import axios from 'axios';
import '../User/User.css';

export default class AdminRegister extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email:'',
      password:'',
      confirmPass:'',
      usernameerror:'',
      passworderror:'',
      confirmpasserror:''

    }
    this.create=this.create.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.BtnSubmit=this.BtnSubmit.bind(this);
  }
  create()
    {
        let url="http://localhost:50450/api/Admin";
        axios.post(url,{
          email:this.state.email,
          password:this.state.password,
          confirmPass:this.state.confirmPass,
          
        }).then(response=>{
            alert(response.data);
            window.location='/AdminLogin';

        }).catch(error=>{
            alert(error);
        });
        
      }
      handleChange(object)
    {
        this.setState(object);

    }
BtnSubmit()
    {
    this.setState({
        usernameerror:'', passworderror:'',confirmpasserror:''
    })
    if(this.Validate())
    {
      this.create();
        alert("Registration successful...!");
    }
    }
Validate()
{
 
  if(!this.state.email.includes("@") && this.state.password.length<4)
  {
   this.setState({usernameerror:'Invalid Email',passworderror:"Password length should be more than 4 characters"});
  }
  else if(!this.state.email.includes("@"))
  {
    this.setState({usernameerror:'Invalid Email'}); 
  }
  else if(this.state.password.length<5)
  {
this.setState({passworderror:'Password length should be more than 4 characters'}); 
}
else if(this.state.password!=this.state.confirmPass)
  {
this.setState({confirmpasserror:'Password & Confirm Password should be same'}); 
}
 else
 {
 return true;
 }
}


  render() {
    return (
      <><header>
<Header></Header>
      </header>
      <div className='register'>
      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">

<li class="nav-item" role="presentation">

  <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href='/AdminLogin' role="tab"

    aria-controls="pills-login" aria-selected="true">Login</a>

</li>

<li class="nav-item" role="presentation">

  <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href='/AdminRegister' role="tab"

    aria-controls="pills-register" aria-selected="false">Register</a>

</li>

</ul>
          {/* <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register"> */}
            <form>
              <div class="text-center mb-3">
                <hr></hr>
                <h3>Register Here:</h3>
              </div>
              
              <div className="form-outline mb-4">
              <label className="form-label">Email</label>
                <input type="email" name="email" onChange={(e)=>this.handleChange({email:e.target.value})} className="form-control"></input>
                <p style={{color:"red"}}>{this.state.usernameerror}</p>
                
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Password</label>
                <input type="password" name="password" onChange={(e)=>this.handleChange({password:e.target.value})} className="form-control"></input>
                <p style={{color:"red"}}>{this.state.passworderror}</p>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Comfirm Password</label>
                <input type="password" name="confirmPass" onChange={(e)=>this.handleChange({confirmPass:e.target.value})} className="form-control"></input>
                <p style={{color:"red"}}>{this.state.confirmpasserror}</p>
                
              </div>

              <br></br>

              <button type='button' onClick={this.BtnSubmit} className="btn btn-primary btn-block mb-3">Register</button>
            </form>
          </div>
        {/* </div> */}
        </>
    )
  }
}