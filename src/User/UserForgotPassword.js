import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserForgotPassword.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';


const ForgotPassword = () => {

  const [password,setPassword] = useState('');
  const [error,setError] = useState();
  const [success,setSuccess] = useState(false);
  const passwordRecovery = () =>{
    console.log(email);
    axios.get('http://localhost:50450/api/User/Forgotpassword?email='+email).then(res=>setPassword(res.data)).catch(res=>console.log(res));
  }

  const [email,setEmail]=useState('');

 
  const sendEmail = (e)=>{
    e.preventDefault();
    passwordRecovery();
    if(password !==''){
    console.log('hi')
    emailjs.send('service_dvd21xv','template_ok8l6la',{
      Subject: "Password Recovery",
      from_name: 'Abdul Wadood Khan',
      to_name: email,
      message: password,
      reply_to: email,
  },'_9xNf_zK6fouybXnY').then(result=>{
    console.log(result.text)},error=>{console.log(error.text)})
    setError('Mail send successfully');
    setSuccess(true);
  }
  else{
  setError('')
  }
 }


  return (
    <><header>
      <Header></Header>
    </header><div className='register'>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">

                <div className="text-center mt-4">
                  <h1 className="h2">Reset password</h1>
                  <p className="lead" style={{ color: 'black' }}><b>
                    Enter your email to get your password.</b>
                  </p>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-4">
                      <form onSubmit={sendEmail}>
                        <div className="form-group">
                          <label>Email</label>

                          <input style={{ width: '400px' }} className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" required={true} onChange={(e) => setEmail(e.target.value)} />
                          {success ? <p style={{ color: 'green' }}>{error}</p> : <p style={{ color: 'red' }}>{error}</p>}
                        </div>
                        <div className="text-right mt-3">
                          <input type='submit' value='Click Here' className="btn btn-lg btn-primary" />

                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
      </>
      

  )
}

export default ForgotPassword