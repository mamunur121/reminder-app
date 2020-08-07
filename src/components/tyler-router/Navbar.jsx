import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
      <div className='container navbar h3'>
        <Link to='/'>Home</Link>
        <nav className='nav-links'>
          <Link to='/players'>Our Services</Link>
          <Link to='/teams'>About Us</Link>
        </nav>
      </div>
  )
}