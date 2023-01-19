import React from 'react'
import ReactDOM from 'react-dom/client'

const Navbar = (props) => {
  return(
    <div className="navbar">
      {props.name}'s Travel Journal
    </div>
  )
}

export default Navbar;