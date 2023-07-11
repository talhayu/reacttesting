import React from 'react'
import Homecontent from './Homecomponent/Homecontent'
import Homeabout from './Homecomponent/Homeabout'
import Homeaboutcard from './Homecomponent/Homeaboutcard'
import { homeAboutCard,homeMaincard, about, content, careful, carefulCards, responsive, content_h4, content_h6, content_para, image } from './Homecomponent/Homejasonfile'
import Homemaincard from './Homecomponent/Homemaincard'
import { useState } from 'react'
import Careful from './Homecomponent/Careful'
import Carefulcards from './Homecomponent/Carefulcards'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';





function Home() {

const [currentContentIndex, setCurrentContentIndex]= useState(0)
const handleContentChange= (index) =>{
  setCurrentContentIndex(index)
  const contentContainer = document.querySelector('.content-of-content-changer');
  contentContainer.classList.add('fade-out');

  setTimeout(() => {
    contentContainer.classList.remove('fade-out');
  }, 700);
}

const [currentImageIndex, setCurrentImageIndex] = useState(0);
const handleImageChange = (index) => {
  setCurrentImageIndex(index);
    const home=document.getElementsByClassName('home')[0]
    home.classList.add('fade-out') 
    setTimeout(() => {
     home.classList.remove('fade-out');
    }, 500);

};



 return (
    <React.Fragment>
      <section
        className='home'
        style={{
          backgroundImage: `linear-gradient(to top, rgba(12, 12, 12, 0.1), rgba(12, 12, 12, .9)), url(${image[currentImageIndex]})`,
         }}>   
        
              <div className="content">
          <Homecontent heading={content[0].heading} para={content[0].para} button={content[0].button}/>
        </div>
        <div className='image-ccursor-container'>
        <div className='image-cursor-1'
        style={{ backgroundColor: currentImageIndex === 0 ? "#57e2b2" : "white"}} 
        onClick={()=>handleImageChange(0)} >
        </div>
        <div  className='image-cursor-2' style={{backgroundColor:currentImageIndex === 1 ? "#57e2b2" : "white"}}
           onClick={()=>handleImageChange(1) } >
        </div>
        </div>
      </section>
        <section className='home-about'>
          <Homeabout  heading={about[0].heading} para={about[0].para}  />
           <div className="home-about-container">
           {
           homeAboutCard.map((a)=>{
            return(
              <Homeaboutcard heading2={a.heading2} heading4={a.heading4}/>  
            )
           })
      
             }
           </div>
        </section>
      <section className="home-main">
          <div className="home-main-cards">
                  {
                     homeMaincard.map((a)=>{
                        return(
                          <Homemaincard heading2={a.heading2} para={a.para} icon={a.icon}/>
                    
                        )
                      })
                  }
          </div>
     </section>
    <section className='careful-container'>
    <Careful heading={careful[0].heading} para={careful[0].para}/>
    <div className='careful-cards-box'>
    <Carousel responsive={responsive}>
      { carefulCards.map((item)=>{
                     return(
                     <Carefulcards
                         image={item.imageSrc}
                          h6={item.h6}
                          h5={item.h5} 
                          para={item.para} 
                          details_h6_1={item.details_h6_1} 
                          details_h5_1={item.details_h5_1}
                          details_h6_2={item.details_h6_2} 
                          details_h5_2={item.details_h5_2}
                          details_h6_3={item.details_h6_3} 
                          details_h5_3={item.details_h5_3}
                        /> )})}
                      </Carousel>;
               </div>
            </section> 

          <section className='content-changer'>
            <div className="content-of-content-changer">
                      <h6>{content_h6[currentContentIndex]}.</h6>
                      <p>{content_para[currentContentIndex]}</p>
                        <h4>{content_h4[currentContentIndex]}</h4>
                        <div className='content-cursor-main'>
                        <div className='content-cursor-1'
                         onClick={()=>handleContentChange(0)} style={{backgroundColor: currentContentIndex === 0 ? '#57e2b2': 'white'}}
                         ></div>
                        <div className='content-cursor-2' onClick={()=>handleContentChange(1)} style={{backgroundColor: currentContentIndex === 1 ? '#57e2b2': 'white'}}></div>
                        <div className='content-cursor-3' onClick={()=>handleContentChange(2)} style={{backgroundColor: currentContentIndex === 2 ? '#57e2b2': 'white'}}></div>
                        </div>
                        </div>
                       
          </section>
        
          
                      
      













    

    </React.Fragment>
  )
}

export default Home
