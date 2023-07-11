import React from 'react'

function Homemaincard(props) {
  return (
       
          <div className="home-main-cards-box" >
                  <i className={props.icon}></i>
                      <h2>{props.heading2}</h2>
                      <p>{props.para}</p>
                </div>

  )
}

export default Homemaincard