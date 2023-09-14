import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
            <li> 
                <Link to='/'>Home Page</Link>
            </li>
            <li> 
                <Link to='/available-flights'>Available Flights</Link>
            </li>
            <li> 
                <Link to='/selected-flight'>Selected Flight</Link>
            </li>
            <li> 
                <Link to='/payment'>Payment</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar