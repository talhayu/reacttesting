import React from 'react'
import image1 from '../src/Component/images/l1.jpg'
import image2 from '../src/Component/images/l2.jpg'
import image3 from '../src/Component/images/l3.jpg'
import image4 from '../src/Component/images/l4.jpg'
import image5 from '../src/Component/images/l5.jpg'
import image6 from '../src/Component/images/l6.jpg'
import { useNavigate } from 'react-router-dom'

function Footer() {
  
  const navigate = useNavigate();
  const navigateToBlogPage = () => {
    navigate('/blog'); 
  };

  return (
   <React.Fragment>
    <footer className='footer'>

      <div className="container">
    <div className="logo box">
    <i className="fa fa-gamepad"></i>
    <span className='odd'>Odd</span>
    <p>Adipisicing elit.exercit ationem accu samus lauda ntium porro sunt repudt ationem accusamus exercit ationem accus amus lauda ntium porro elit exerc sunt repud.</p>
  </div>

    <div className="news  ">
      <h2>Latest news</h2>
      <div className="sub-news">
        <img src={image1} alt=""  onClick={navigateToBlogPage}/>
        <div className="sub-news-content">
        <h5 onClick={navigateToBlogPage}>Black Hunt</h5>
        <p>june 28</p>
        </div>
      </div>
      <div className="sub-news">
        <img src={image2} alt=""  onClick={navigateToBlogPage} />
        <div className="sub-news-content">
        <h5  onClick={navigateToBlogPage}>Black Hunt</h5>
        <p>june 28</p>
        </div>
      </div>
    </div>

    <div className="instagram ">
      <h2>Instagram</h2>
      <div className="image">
        <div className='box-image'>
          <img src={image1} alt="" />
          </div>
          <div className='box-image'>
          <img src={image2} alt="" />
          </div>
          <div className='box-image'>
          <img src={image3} alt="" />
          </div>
          <div className='box-image'>
          <img src={image4} alt="" />
          </div>
          <div className='box-image'>
          <img src={image5} alt="" />
          </div>
          <div className='box-image'>
          <img src={image6} alt="" />
          </div>

      </div>
    </div>

    <div className="newsletter ">
      <h2>Newselleter</h2>
      <p>Adipisicing elit exerc tationem accusamus exercit ationem accus amus lauda ntium porro elit exerc sunt repud.</p>
      <input type="email" name="" id="" placeholder='email' />
      <div className='btn button-icon'></div>
    </div>
    </div>
    <div className="conclude">

     
      <p>© All rights reserved | Design by <span className="credit">Mr. Talha Ahmed</span>  </p>
      

    </div>
    </footer>
   </React.Fragment>
  )
}

export default Footer