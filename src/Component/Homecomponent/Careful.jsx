import React from 'react'

function Careful(props) {
  return (
    <div className='careful'>
        <h3>{props.heading}</h3>  
        <p>{props.para}</p>      
    </div>
  )
}

export default Careful