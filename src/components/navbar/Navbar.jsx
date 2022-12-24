import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex'>Navbar:
        <ul className='flex gap-2'>
            <li> <NavLink to="/">To Home</NavLink></li>
            <li> <NavLink to="login">To login</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar