import React from 'react'
import Aboutcontent from './Aboutcomponent/Aboutcontent'
import Aboutinfo from './Aboutcomponent/Aboutinfo'
import { aboutinfo } from './Aboutcomponent/Aboutjason'
import img from './images/bb6.jpg'



function About() {
  return (
    <React.Fragment>
   
    <section className='aboutofabout'>
      <Aboutcontent heading={'about us'}/>
    </section >

    <section className="info-aboutus">
      <Aboutinfo heading={aboutinfo[0].heading} para={aboutinfo[0].para} /> 
    </section>

    <section className="recent-work">
      <div className="recent-work-container">
      <h2>A Clan That Slays</h2>
      <p>Consectetur Lorem ipsum dolor sit amet adipisicing elit. Recusandae nulla beatae exercitationem iusto dolore animi, voluptatem inventore minima corporis asperiores dicta molestiae dolorum quod numquam iure ipsam nostrum tempore porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti possimus culpa nemo asperiores aperiam mollitia, maiores, modi facilis atque consequuntur hic officia unde, fugiat tempora? Vero est aliquid nisi fugit.</p>
      </div>

    </section>
     <section className='about-high-roll'>
      <div className="about-box-container" >
        <div className="about-box bk" >
            {/* <img src={img} alt="" /> */}
        </div>
        <div className="about-box  about-boxofcontent" >
            <h3>Going For The High Roll.</h3>
            <p className='p'>Mollitia placeat modi explicabo voluptatum adipisci Quisquam exercit tionem praesentium suscipit.Est enim persp iciatis corporis unde? Dicta, provident! Rem adipisci Mollitia placeat modi explicabo voluptatum corporis unde? Dicta, provident! Rem adipisci Quisquam exercitationem praesentium suscipit.Est enim perspi ciatis.Tnisi rerum vitae, ullam aliquam at sit perspi ciatis voluptatum</p>
            <div className="tryabout">
              <div className="trynot">  
              <div className="fa fa-ils"></div>
              <p className='ils'>consectetur adipisicing elit.Lorem ipsum dolor sit, amet Id obcaecati quos omnis dolorum voluptatum assumenda aliquam ducimus aperiam explicabo similique. Nulla nobis neque esse laudantium, cum odit error quidem amet</p>
              </div>

              <div className="trynot">  
              <div className="fa fa-linode"></div>
              <p className='ils'>consectetur adipisicing elit.Lorem ipsum dolor sit, amet Id obcaecati quos omnis dolorum voluptatum assumenda aliquam ducimus aperiam explicabo similique. Nulla nobis neque esse laudantium, cum odit error quidem amet</p>
              </div>
              </div>

    
        </div>
      </div>
    </section> 
    </React.Fragment>
  )
}

export default About
