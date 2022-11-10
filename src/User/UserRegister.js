import React, { Component } from 'react';
import Header from '../Common/Header';
import '../Admin/Admin.css';
import axios from 'axios';
import '../User/User.css'
import Footer from '../Common/Footer';
export default class UserRegister extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
      fname:'',
      lname:'',
       dob:'',
       address:'',
       contactNo:'',
       email:'',
       password:'',
       cPassword:'',
       salary:0,
       panNo:'',
       employerType:'',
       employer:'',
       usernameerror:'',
       passworderror:'',
       confirmpasserror:'',
       requirederror:''


    }
    this.create=this.create.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.BtnSubmit=this.BtnSubmit.bind(this);
  }
  create()
    {
        let a = parseFloat(this.state.salary);
       // var a=this.state.salary;
      console.log(this.state.salary);
    //  http://localhost:50450/api/User
        let url="http://localhost:50450/api/User";
        axios.post(url,{
          fname:this.state.fname,
          lname:this.state.lname,
          dob:this.state.dob,
          address:this.state.address,
          contactNo:this.state.contactNo,
          email:this.state.email,
          password:this.state.password,
          cPassword:this.state.cPassword,
          salary:a,
          panNo:this.state.panNo,
          employerType:this.state.employerType,
          employer:this.state.employer,
          //salary
        }).then(response=>{
            alert(response.data);
            window.location='/UserLogin';

        }).catch(error=>{
            alert(error);
        });
      }
BtnSubmit()
{
  this.setState({
    usernameerror:'', confirmpasserror:'',requirederror:''
    })
     if(this.Validate())
     {
      this.create();
      alert("User registration successful");
       }
        
}
Validate()
{
  // if(this.state.fname=='' || this.state.lname==''||this.state.dob==''||this.state.address==''||this.state.contactNo==''||this.state.salary==''||this.state.panNo==''||this.state.employerType==''||this.state.employer=='')
  // {
  //   this.setState({requirederror:'Field is required'});
  // }

if(!this.state.email.includes("@") && this.state.password=='' && this.state.fname=='' && this.state.lname=='' && this.state.dob=='' && this.state.address=='' && this.state.contactNo=='' && this.state.salary=='' && this.state.panNo=='' && this.state.employerType==''&&this.state.employer=='')
          {
              this.setState({usernameerror:'Email is required', passworderror:'Password is required', requirederror:'This field is required'});
          }
         else if(!this.state.email.includes("@"))
          {
              this.setState({usernameerror:'InvalidUsername'}); 
          }
          else if(this.state.password!==this.state.cPassword)
          {
              this.setState({confirmpasserror:'Password and Confirm Password Should be Same'}); 
          }
          
          
          else
          {
              return true;
          }
      }
      handleChange(object)
    {
        this.setState(object);

    }
    
  render() {
    return (
      <><header>
<Header></Header>
      </header>
      <div className='register'>
      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href='/UserLogin' role="tab"
              aria-controls="pills-login" aria-selected="true">Login</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="/UserRegister" role="tab"
              aria-controls="pills-register" aria-selected="false">Register</a>
          </li>
        </ul>


          {/* <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register"> */}
            
              <div className="text-center mb-3">
                <hr></hr>
                <h3>Register Here:</h3>
              </div>
              
              <div className="form-outline mb-4">
              <label className="form-label">First Name</label>
                <input type="text" name="fname" onChange={(e)=>this.handleChange({fname:e.target.value})} className="form-control"></input>
                <p style={{color:"red"}}>{this.state.requirederror}</p>
              </div>


              <div className="form-outline mb-4">
              <label className="form-label">Last Name</label>
                <input type="text" name="lname" onChange={(e)=>this.handleChange({lname:e.target.value})} className="form-control"></input>
                <p style={{color:"red"}}>{this.state.requirederror}</p>
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Date of birth</label>
                <input type="date" name="dob" onChange={(e)=>this.handleChange({dob:e.target.value})} className="form-control" ></input>
                <p style={{color:"red"}}>{this.state.requirederror}</p>
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Address</label>
                <input type="text" name="address" onChange={(e)=>this.handleChange({address:e.target.value})} className="form-control" ></input>
                <p style={{color:"red"}}>{this.state.requirederror}</p>
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Contact Number</label>
                <input type="text" name="contactNo" onChange={(e)=>this.handleChange({contactNo:e.target.value})} className="form-control" ></input>
                <p style={{color:"red"}}>{this.state.requirederror}</p>
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
              <label className="form-label">Confirm Password</label>
                <input type="password" name="cPassword" onChange={(e)=>this.handleChange({cPassword:e.target.value})} className="form-control" ></input>
                <p style={{color:"red"}}>{this.state.confirmpasserror}</p>
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Salary (Annual)</label>
                {/* <input type="text" name="salary" onChange={(e)=>this.handleChange({salary:e.target.value})} className="form-control"></input> */}
                <input type="text" name="salary" onChange={(e)=>this.handleChange({salary:e.target.value})} className="form-control" ></input>
                <p style={{color:"red"}}>{this.state.requirederror}</p>
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">PAN Number</label>
                <input type="text" name="panNo" onChange={(e)=>this.handleChange({panNo:e.target.value})} className="form-control"></input>
                <p style={{color:"red"}}>{this.state.requirederror}</p>  
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Employer Type</label>
                <input type="text" name="employerType" onChange={(e)=>this.handleChange({employerType:e.target.value})} className="form-control"></input>
                <p style={{color:"red"}}>{this.state.requirederror}</p> 
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Employer</label>
                <input type="text" id="employer" onChange={(e)=>this.handleChange({employer:e.target.value})} className="form-control"></input>
                <p style={{color:"red"}}>{this.state.requirederror}</p>  
              </div>
              <br></br>

              <button type='button' onClick={this.BtnSubmit} className="btn btn-primary btn-block mb-3">Register</button>
            
          </div>
          <footer>
            <Footer></Footer>
          </footer>
        
        </>
    )
  }
}
