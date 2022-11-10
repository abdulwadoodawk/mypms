import React, { Component } from 'react';
import '../Policy/RegisterPolicy.css' ; 
import Header from '../Common/Header';
import '../Admin/Admin.css';
import axios from 'axios';
import Footer from '../Common/Footer';
export default class RegisterPolicy extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
      policyId:'',
      policyName:'',
      startDate:'',
      duration:'',
      companyName:'',
      initialDeposit:'',
      policyType:'',
      userTypes:'',
      term:'',
      termAmount:'',
      interest:'',
      maturityAmount:'',
      endDate:''

    }
    this.create=this.create.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  // calculate(){
  //   g
  // }
  create()
    {
      // let a = parseInt(this.state.policyId);
      let b = parseInt(this.state.duration);
      let c = parseInt(this.state.initialDeposit);
      let d = parseInt(this.state.term);
      let e = parseFloat(this.state.termAmount);
      let f = parseFloat(this.state.interest);
      let g = parseFloat(this.state.maturityAmount);
      console.log(this.state);
        let url="http://localhost:50450/api/Policy";
        axios.post(url,{
          // "policyId": 0,
          // "policyName": "string",
          // "startDate": "2022-11-07T04:32:53.231Z",
          // "duration": 0,
          // "companyName": "string",
          // "initialDeposit": 0,
          // "policyType": "string",
          // "userTypes": "string",
          // "term": 0,
          // "termAmount": 0,
          // "interest": 0,
          // "maturityAmount": 0,
          // "endDate": "2022-11-07T04:32:53.231Z"
          
          
          // policyId:a,
          policyName:this.state.policyName,
          startDate:this.state.startDate,
          duration:b,
          companyName:this.state.companyName,
          initialDeposit:c,
          policyType:this.state.policyType,
          userTypes:this.state.userTypes,
          term:d,
          termAmount:e,
          interest:f
          
         

        }).then(response=>{
            alert(response.data);

        }).catch(error=>{
            alert(error);
        });
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
      <div className='bg-img'> 

          {/* <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register"> */}
            
              <div className="text-center mb-3">
                <h3 className='heading'>Register Policy:</h3>
              </div>
              


              <div className="form-outline mb-4">
              <label className="form-label">Policy Name</label>
                <input type="text" name="policyName" onChange={(e)=>this.handleChange({policyName:e.target.value})} className="form-control"></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Start Date</label>
                <input type="date" name="startDate" onChange={(e)=>this.handleChange({startDate:e.target.value})} className="form-control" ></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Duration (in years)</label>
                <input type="text" name="duration" onChange={(e)=>this.handleChange({duration:e.target.value})} className="form-control" ></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Company name</label>
                <input type="text" name="companyName" onChange={(e)=>this.handleChange({companyName:e.target.value})} className="form-control" ></input>
                
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Initial Deposite (in rupees)</label>
                <input type="text" name="initialDeposit" onChange={(e)=>this.handleChange({initialDeposit:e.target.value})} className="form-control"></input>
              </div>
              
              {/* <div className="form-outline mb-4">
              <label className="form-label">Policy Type</label>
                <input type="text" name="policyType" onChange={(e)=>this.handleChange({policyType:e.target.value})} className="form-control"></input>
                
              </div>  */}
            <label className="form-label" placeholder='Select an option'>Policy Type</label>
            <select value={this.state.policyType} onChange={(e)=>this.handleChange({policyType:e.target.value})} className="form-control">
            <option name="default" style={{color:'grey'}}>Select an option</option>
            <option name="vehicle">Vehicle Insurance</option>
            <option name="travel">Travel Insurance</option>
            <option name="life">Life Insurance</option>
            <option name="health">Health Insurance</option>
            <option name="child">Child Insurance</option>
            <option name="retirement">Retirement Insurance </option>
            </select>

              {/* <div className="form-outline mb-4">
              <label className="form-label">User Type</label>
                <input type="text" id="userTypes" onChange={(e)=>this.handleChange({userTypes:e.target.value})} className="form-control"></input>
                
              </div> */}
              <label className="form-label" placeholder='Select an option'>User Type</label>
            <select value={this.state.userTypes} onChange={(e)=>this.handleChange({userTypes:e.target.value})} className="form-control">
            <option name="default" style={{color:'grey'}}>Select an option</option>
            <option name="A">A(5 Lakh)</option>
            <option name="B">B(10 Lakh)</option>
            <option name="C">C(15 Lakh)</option>
            <option name="D">D(30 Lakh)</option>
            <option name="E">E(More than 30 Lakh)</option></select>

              <div className="form-outline mb-4">
              <label className="form-label">Number of terms</label>
                <input type="text" name="term" onChange={(e)=>this.handleChange({term:e.target.value})} className="form-control" ></input>
                
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Term amount (in rupees)</label>
                <input type="text" name="termAmount" onChange={(e)=>this.handleChange({termAmount:e.target.value})} className="form-control"></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Interest (in %)</label>
                <input type="text" name="interest" onChange={(e)=>this.handleChange({interest:e.target.value})} className="form-control"></input>
                
               </div>
              {/* <div className="form-outline mb-4">
              <label className="form-label">Maturity Amount (in rupees)</label>
                <input type="text" name="maturityAmount" onChange={(e)=>this.handleChange({maturityAmount:e.target.value})} className="form-control"></input>
                
              </div> */}
              {/* <div className="form-outline mb-4">
              <label className="form-label">End date</label>
                <input type="text" id="endDate" onChange={(e)=>this.handleChange({endDate:e.target.value})} className="form-control"></input>
                
              </div>   */}


              <br></br>

              {/* <button type='button' onClick={this.calculate} className="btn btn-primary btn-block mb-3">Show</button> */}

              <button type='button' onClick={this.create} className="btn btn-primary btn-block mb-3">Register</button>
            
          </div>
          <footer>
            <Footer></Footer>
          </footer>
        {/* </div> */}
        </>
    )
  }
}
