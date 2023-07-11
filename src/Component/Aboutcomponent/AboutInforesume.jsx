import React from 'react'


function AboutInforesume(props) {
  return (
    <div className="about-info-resume">
    <p className="para"><span className="para-info  fa fa-check-square-o"></span> {props.resume1} </p>
     <p className="para"><span className="para-info  fa fa-check-square-o"></span> {props.resume2} </p>
    <p className="para"><span className="para-info  fa fa-check-square-o"></span> {props.resume3} </p>
    <p className="para"><span className="para-info  fa fa-check-square-o"></span> {props.resume4} </p>
    <p className="para"><span className="para-info  fa fa-check-square-o"></span> {props.resume5} </p>
    <p className="para"><span className="para-info  fa fa-check-square-o"></span> {props.resume6} </p> 

  </div>
  )
}

export default AboutInforesume