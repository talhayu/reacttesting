import React from 'react'
import iamge1 from '../images/a7.jpg'
import { aboutinforesume } from './Aboutjason'
import AboutInforesume from './AboutInforesume'

function Aboutinfo(props) {
  return (
    <div className='box-container'>
        <div className="box">
            <h3>{props.heading}</h3>
            <p>{props.para}</p>
           

                <AboutInforesume
                  resume1 ={aboutinforesume[0].resume1}
                  resume2={aboutinforesume[1].resume2}
                  resume3={aboutinforesume[2].resume3}
                  resume4={aboutinforesume[3].resume4}
                  resume5={aboutinforesume[4].resume5}
                  resume6={aboutinforesume[5].resume6}
                  
                 />
            
        </div>
        <div className="box">
            <img src={iamge1} alt="" />
        </div>


    </div>
  )
}

export default Aboutinfo