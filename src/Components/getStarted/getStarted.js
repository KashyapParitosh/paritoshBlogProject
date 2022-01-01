import React, { useState } from "react";
import NavBar from '../NavbarSection/Navbar';
import Login from '../loginSection/login'
import SignUp from './signUp'
import Footer from '../Footer/Footer'
import { Navigate } from 'react-router';
import LogIn from "../loginSection/login";

import UserProfile from "./userProfile";

function GetStarted() {
    const [isNew, setIsnew] = useState(true);
    const clickHandler = () => setIsnew((prevState) => !prevState);
    
    const user = localStorage.getItem("user");
    let loggedIn = true;
    console.log(loggedIn);
    if( user === null ){
        loggedIn = false;
    }
    // console.log("")
    return(
       <>
         {
           loggedIn ? (
              <>
                {console.log(loggedIn)}
                <UserProfile></UserProfile>
              </>
              )  : 
              <>
                { isNew ? <SignUp /> : <LogIn />}
                <p>{isNew ? "Already have an account?" : "Don't have an account?"}
                <button className="signup-text" onClick={clickHandler}> {isNew ? "LogIn" : "SignUp"}</button>
                </p>
              </>
         }
       </>
    )
}

export default GetStarted;