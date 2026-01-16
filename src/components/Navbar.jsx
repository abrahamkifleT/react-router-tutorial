import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" width="130px" />
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/product"}>Product</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default NavBar