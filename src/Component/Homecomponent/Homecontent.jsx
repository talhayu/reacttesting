import React from 'react'

function Homecontent(props) {

  return (

    <div className="content-1">
       <h2>{props.heading}</h2>
     <p>{props.para}</p>
      <button className='button'>{props.button}</button>
  

  <div>
    
  </div>
  </div>
  )
}

export default Homecontent
