import React from 'react'
import logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <div>
        <img src={logo} alt="" />
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