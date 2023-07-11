import React from 'react'

function Navbarlogo(props) {
  return (
    <div className="logo">
    <i className="fa fa-gamepad"></i>
    <span className='odd'>{props.logo}</span>
  </div>
  )
}

export default Navbarlogo
