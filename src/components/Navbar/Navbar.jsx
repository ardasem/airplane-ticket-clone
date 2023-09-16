import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <nav className='navbar-container'>
        <ul className='list'>
            <li> 
                <Link className='linknav' to='/'>Home Page</Link>
            </li>
            <li> 
                <Link className='linknav'  to=''>Lorem</Link>
            </li>
            <li> 
                <Link className='linknav'  to=''>Ipsum</Link>
            </li>
            <li> 
                <Link className='linknav'  to=''>Dolor</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar