import "./Navbar.css";
import React, { useState } from "react";
import {Link} from 'react-router-dom' 
import navLinks from "./navlinks";

function NavBar() {
    const [menuIcon, setMenuIcon] = useState(false)
    const clickHandler = ()=> setMenuIcon((prevState) => !prevState)
  return (
    <div className="navSec-container">
      <nav className="navbar">
        <div className="logo">
          <span className="the">The</span>
          <span className="siren">Siren</span>
        </div>
        <div className="navBar-ul">
          <div onClick={clickHandler}><i className="fas menu-btn fa-bars" ></i></div>  
          <ul className={ menuIcon? "show" : "" }>
            {navLinks.map((item,index)=>{return <li key={index}><Link exact to={`/category/${item.category}`}>{item.name}</Link></li>})}
            <li><Link exact="true" to="/GetStarted">Login/Signin</Link></li>
          </ul>
        </div>
      </nav>
      <hr className="hr"></hr>
    </div>
  );
}
export default NavBar;

// onClick={clickHandler}