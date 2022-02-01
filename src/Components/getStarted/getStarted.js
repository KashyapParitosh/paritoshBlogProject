import React, { useState } from "react";
import './getStarted.css'

import SignUp from './signUp'

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
                <p className="optionForAccount">{isNew ? "Already have an account?" : "Don't have an account?"}
                &nbsp;
                &nbsp;
                <button className="signup-text" onClick={clickHandler}> {isNew ? "LogIn" : "SignUp"}</button>
                </p>
              </>
         }
       </>
    )
}

export default GetStarted;