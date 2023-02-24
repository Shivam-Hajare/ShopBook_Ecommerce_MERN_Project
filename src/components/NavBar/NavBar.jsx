import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='NavBar'>
      <img src="/logo.jpg" alt="" />
      <div className="nav_items">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </ul>
      </div>
    </div>

  )
}

export default NavBar