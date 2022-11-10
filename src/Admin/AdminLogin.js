import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../User/User.css';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
export default class AdminLogin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',
       password:'',
       emailerror:'',
      passworderror:''
    }
    this.submit=this.submit.bind(this);
      this.BtnSubmit=this.BtnSubmit.bind(this);
      this.handlechange=this.handlechange.bind(this);
  }
  submit()
    {
      console.log(this.state);
        let url="http://localhost:50450/api/Admin/Adminlogin";
          
        axios.post(url,{
            // email:'user0@gmail.com',         
            // password:'ss' 
            email:this.state.email,         
            password:this.state.password
          }).then(response=>{
            if(response.data.email!='')
            {
          //  alert(response.data.email);
            sessionStorage.setItem("email",JSON.stringify(response.data.email)); 
            window.location='/RegisterPolicy'; 
            // sessionStorage.setItem("customer",JSON.stringify(Response.data));
            // window.location="/Home";}}).catch(e=>setLogin('Incorrect email or password'))       
            }
            else
            {
                alert("Username/password is Invalid");
            }
       }).catch(error=>{
            alert(error);
        });
    }
handlechange(object)
  {
      this.setState(object);
  }
   BtnSubmit()
{
    this.setState({
      emailerror:'',passworderror:''
    })
     if(this.Validate())
     {
        this.submit();
        
        alert("Login Successful");
        
     }
  
}
   Validate()
{
  
  if(!this.state.email.includes("@") && this.state.password.length<4)
  {
   this.setState({emailerror:'Invalid Email',passworderror:"Password length should be more than 4 character"});
  }
  else if(!this.state.email.includes("@"))
  {
    this.setState({emailerror:'Invalid Email'}); 
  }
  else if(this.state.password.length<4)
  {
  this.setState({passworderror:'Password length should be more than 4 character'}); 
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
            <a class="nav-link active" id="tab-login"  href="/AdminLogin" 
             aria-selected="true">Login</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="/AdminRegister" role="tab"
              aria-controls="pills-register" aria-selected="false">Register</a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            

              <p class="text-center">Log In Admin</p>


              <div className="form-outline mb-4">
              <label className="form-label">Email</label>
              <input type="email" name="email" onChange={(e)=>this.handlechange({email:e.target.value})} className="form-control" ></input>
                <p style={{color:"red"}}>{this.state.emailerror}</p>
              </div>


              <div className="form-outline mb-4">
              <label className="form-label">Password</label>
              <input type="password" name="password" onChange={(e)=>this.handlechange({password:e.target.value})} className="form-control" ></input>
                <p style={{color:"red"}}>{this.state.passworderror}</p>
              </div>

              <button onClick={this.BtnSubmit} class="btn btn-primary btn-block mb-4" >Sign in</button><br></br>
              <Link to='/ForgotPassword' class="btn btn-danger btn-block mb-4" >Forgot Password</Link>
              <div class="text-center">
                <p>Not a member?<a href="/AdminRegister">Register</a></p>
              </div>
          
          </div>

        </div>
        </div>
    
      {/* <footer>
      <Footer></Footer>
      </footer> */}
      </>
    )
  }
}

