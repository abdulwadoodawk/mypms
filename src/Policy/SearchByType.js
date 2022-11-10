import React, { Component } from 'react'
import axios from 'axios';
import Header from '../Common/Header';
import '../Policy/ShowPolicy.css';

export default class Search extends Component {
    constructor(props) {
      super(props)
   
      this.state = {
        Policies:[]
    //     policyId:'',
    //   policyName:'',
    //   startDate:'',
    //   duration:'',
    //   companyName:'',
    //   initialDeposit:'',
    //   policyType:'',
    //   userTypes:'',
    //   term:'',
    //   termAmount:'',
    //   interest:'',
    //   maturityAmount:'',
    //   endDate:''
      }

      this.handleChange=this.handleChange.bind(this);
      this.SearchPolicy=this.SearchPolicy.bind(this);
    }
    SearchPolicy()
    {
       // e.preventDefault();
    //    http://localhost:50450/api/User/GetPolicyByType?policytype=a
    // http://localhost:50450/api/User/GetPolicyByType/a
        let policyType=this.state.policyType;
        // console.log(policyType);
        let url="http://localhost:50450/api/User/GetPolicyByType/"+policyType;
        axios.get(url).then(resp=>{
    //  alert(resp.data);
            
            this.setState({

                // Policies:resp.data
                // policyId:resp.data.policyId,
                // policyName:resp.data.policyName,
                // startDate:resp.data.startDate,
                // duration:resp.data.duration,
                // companyName:resp.data.companyName,
                // initialDeposit:resp.data.initialDeposit,
                // policyType:resp.data.policyType,
                // userTypes:resp.data.userTypes,
                // term:resp.data.term,
                // termAmount:resp.data.termAmount,
                // interest:resp.data.interest
                Policies:resp.data
                
            });
           }).catch(error=>{
            console.warn(error);
        })
    }
    componentDidMount()
    {
        this.SearchPolicy();
    }
    handleChange(object)
    {
        this.setState(object);

    }

  render() {
    // const {Policies}=this.state;
    // const{policyId}=this.state;
    // const {policyName}=this.state;
    // const {startDate}=this.state;
    // const {duration}=this.state;
    // const {companyName}=this.state;
    // const {initialDeposit}=this.state;
    // const {policyType}=this.state;
    // const {userTypes}=this.state;
    // const {term}=this.state;
    // const {termAmount}=this.state;
    // const {interest}=this.state;
    // const {maturityAmount}=this.state;
    // const {endDate}=this.state;
    const {Policies}=this.state;
    // console.log(this.state);

    return (
        <><Header></Header><div><br></br>
            <label style={{ color: 'black', fontSize:'large'}}><strong>Enter the Policy Type</strong></label><br></br>
        <input style={{margin:'10px',borderRadius:'5px'}} type="text" name="policyType" onChange={(e)=>this.handleChange({policyType:e.target.value})}></input><br></br>
    <button style={{color:'white',fontWeight:'500' ,textDecoration:'none',borderRadius:'5px', marginTop:'10px' ,padding:'5px',backgroundColor:'#4FC3A1'}} onClick={this.SearchPolicy}>Search</button>
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

                        {Policies.map(a=>
                          <tr> <td>{a.policyId}</td>
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
                          <td>{a.endDate}</td> </tr>
                            )}
                
      
                    </tbody>
                </table>
            </div>

        </div>
      </>
    )
  }
}