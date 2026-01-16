import React from 'react'
import logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" width="130px" />
        <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default NavBar