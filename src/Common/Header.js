import React, { Component } from 'react'
import '../Common/Header.css';
export default class Header extends Component {
  render() {
    return (
      <div>
<nav className='navbar'>
    <div className='heading'>
        <h5><a href='/'>POLICY MANAGEMENT SYSTEM</a></h5>
    </div>
    <div className='nav'>
        <ul>
            <li><a href='/'>HOME</a></li>
            <li><a href='/AdminRegister'>ADMIN</a></li>
            <li><a href='/UserRegister'>USER</a></li>
        </ul>
    </div>
</nav>

      </div>
    )
  }
}
