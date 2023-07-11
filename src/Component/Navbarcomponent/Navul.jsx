import { useRef } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlist(props) {
      const navbarRef = useRef(null);
     const menuRef = useRef(null);

  const handleMenuClick = () => {
    if(window.scrollY>10){
    menuRef.current.classList.toggle("fa-times");
    navbarRef.current.classList.toggle("active");
    }
  };
  

  return (
    <React.Fragment>
    <div className="navbar" ref={navbarRef}>
    <ul>
      <li>
        <NavLink to="/" className="link"> {props.home} </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="link"> {props.about} </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="link"> {props.blog} 
        </NavLink>
      </li>
      <li>
        <NavLink to="/game" className="link"> {props.game} 
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className="link"> {props.shop} </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="link"> {props.contact} </NavLink>
      </li>
    </ul>

  </div>
  {/* <div className="fa fa-bars" id='menu-bar' ></div> */}
        <div className="fa fa-bars" id='menu-bar' ref={menuRef} onClick={handleMenuClick}></div>


  </React.Fragment>
  )
}

export default Navlist
