import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navLinks from "./navlinks";
import { connect } from 'react-redux'

function NavBar() {
  const [menuIcon, setMenuIcon] = useState(false);
  const clickHandler = () => setMenuIcon((prevState) => !prevState);
  const [onLogOut, setOnLogOut] = useState(false);
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user == null && onLogOut === false) {
      setOnLogOut(true);
    }
  }, [onLogOut, user]);
  // const user = localStorage.getItem("user");
  // let loggedIn = true;
  // if ( user === null ){
  //   loggedIn = false;
  // }
  return (
    <div className="navSec-container">
      <nav className="navbar">
        <div className="logo">
          <span className="the">The</span>
          <span className="siren">Siren</span>
        </div>
        <div className="navBar-ul">
          <div onClick={clickHandler}>
            <i className="fas menu-btn fa-bars"></i>
          </div>
          <ul className={menuIcon ? "show" : ""}>
            {navLinks.map((item, index) => {
              return (
                <li onClick={clickHandler} key={index}>
                  <Link exact="true" to={`/category/${item.category}`}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li onClick={clickHandler}>
              <Link exact="true" to="/GetStarted">
                { !(onLogOut) ? "View Profile" : "Login/Signin"}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="hr"></hr>
    </div>
  );
}


const mapStateToProps = (state) =>{
  console.log(state);
  return {
    state
  }
} 

export default connect(mapStateToProps)(NavBar);

// onClick={clickHandler}
