import React from 'react'

function Carefulcards(props) {
  return (
    <div className='careful-cards' >
                    <img src={props.image} alt="this is iamge"  />
                    <div className="careful-cards-content"> 
                   <h6>{props.h6}</h6>
                    <h5>{props.h5}</h5>
                    <p>{props.para}</p>
                  </div>
                  <div className='details'>
                    <div className="sub-details part-1">
                      <h6>{props.details_h6_1}</h6>
                      <h5>{props.details_h5_1}</h5>
                    </div>
                    <div className="sub-details part-2">
                    <h6>{props.details_h6_2}</h6>
                      <h5>{props.details_h5_2}</h5>
                    </div>
                    <div className="sub-details">
                    <h6>{props.details_h6_3}</h6>
                      <h5>{props.details_h5_3}</h5>
                    </div>
         
                  </div>
                  </div>
  )
}

export default Carefulcards