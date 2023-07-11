import React from 'react'

import Navbarlogo from './Navbarcomponent/Navbarlogo';
import Navul from './Navbarcomponent/Navul'

function Navbar() {

    window.addEventListener('scroll', function() {
      let header = document.getElementById('header');
      if (window.pageYOffset > 0) {
        header.style.backgroundColor = '#000000d7';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    });
  
  return (
    <React.Fragment>
      <div id='header'>
        <Navbarlogo logo={"ODD"}/>
        <Navul home={"home"} about={"about"} game={"game"} blog={"blog"} shop={"shop"} contact={"contact"}/>
      

      </div>
    </React.Fragment>
  )
}

export default Navbar;
