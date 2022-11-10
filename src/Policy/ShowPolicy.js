import React, { Component } from 'react';
import '../Policy/ShowPolicy.css';
import Header from '../Common/Header';
import axios from 'axios';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
export default class ShowPolicy extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           Policies:[]
        }
      }
      DisplayAllPolicies()
      {
          let url="http://localhost:50450/api/Policy";
          axios.get(url).then(resp=>{
             // alert(resp.data);
              this.setState({Policies:resp.data});
          }).catch(error=>{
              console.warn(error);
          })
  
      }
      componentDidMount()
      {
          this.DisplayAllPolicies();
      }
  render() {
    const {Policies}=this.state;
    return (
      <>
      <Header></Header>
        <div class="search">
      <Link style={{color:'white',fontWeight:'500' ,textDecoration:'none',borderRadius:'5px', marginTop:'40px' ,padding:'15px',backgroundColor:'#4FC3A1'}} to="/SearchByType">Search Policy</Link>
      </div>
            {/* <button onClick={this.SearchPolicy} >Search</button> */}
      <div>
        <h2>POLICIES</h2>
<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>Policy Id</th>
            <th>Policy Name</th>
            <th>Start Date</th>
            <th>Duration(in years)</th>
            <th>Company</th>
            <th>Initial Deposit</th>
            <th>Policy Type</th>
            <th>User Types</th>
            <th>Terms per year</th>
            <th>Term amount</th>
            <th>Interest</th>
            <th>Maturity Amount</th>
            <th>End Date</th>
        </tr>
        </thead>
        <tbody>
        {
        Policies.map(a=>
            <tr>
                <td>{a.policyId}</td>
                <td>{a.policyName}</td>
                <td>{a.startDate}</td>
                <td>{a.duration}</td>
                <td>{a.companyName}</td>
                <td>{a.initialDeposit}</td>
                <td>{a.policyType}</td>
                <td>{a.userTypes}</td>
                <td>{a.term}</td>
                <td>{a.termAmount}</td>
                <td>{a.interest}</td>
                <td>{a.maturityAmount}</td>
                <td>{a.endDate}</td>
            </tr>
        )
    }
        {/* <tr>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
        </tr> */}
        </tbody>
    </table>
</div>

{/* <button className='btn' onClick={/SearchByType}>Search Policy</button> */}
    
      </div>
      </>
    )
  }
}
