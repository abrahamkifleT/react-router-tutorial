import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img src={logo} alt="" width="130px" />
      <ul>
        <NavLink to={"/"}><li>Home</li></NavLink>
        <NavLink to={"/product"}><li>Product</li></NavLink>
        <NavLink to={"/about"}><li>About</li></NavLink>
        <NavLink to={"/contact"}><li>Contact</li></NavLink>
      </ul>
      <button onClick={() => navigate("/contact" , {replace:true})}>Get Started</button>
    </div>
  )
}

export default NavBar