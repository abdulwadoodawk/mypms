import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import Home from './Common/Home';
import AdminLogin from './Admin/AdminLogin';
import AdminRegister from './Admin/AdminRegister';
import UserLogin from './User/UserLogin';
import UserRegister from './User/UserRegister';
import ShowPolicy from './Policy/ShowPolicy';
import RegisterPolicy from './Policy/RegisterPolicy';
import SearchByType from './Policy/SearchByType';
import ForgotPassword from './Admin/ForgotPassword';
import UserForgotPassword from './User/UserForgotPassword';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/ShowPolicy' element={<ShowPolicy/>}></Route> 
       <Route path='/UserRegister' element={<UserRegister/>}></Route> 
       <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
        {/* <Route path='/RegisterPolicy/:id' element={<RegisterPolicy/>}></Route> */}
        <Route path='/RegisterPolicy' element={<RegisterPolicy/>}></Route>
        <Route path='/UserLogin' element={<UserLogin/>}></Route>
        <Route path='/AdminRegister' element={<AdminRegister/>}></Route>
        <Route path='/SearchByType' element={<SearchByType/>}></Route>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}></Route>
        <Route path='/UserForgotPassword' element={<UserForgotPassword/>}></Route>
        
</Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
