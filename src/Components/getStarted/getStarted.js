import React, { useState } from "react";
import NavBar from '../NavbarSection/Navbar';
import Login from '../loginSection/login'
import SignUp from './signUp'
import Footer from '../Footer/Footer'
import { Navigate } from 'react-router';
import LogIn from "../loginSection/login";

function GetStarted() {
    const [isNew, setIsnew] = useState(true);

    const user = localStorage.getItem("user");
    let loggedIn = true;
    if( user === null ){
        loggedIn = false;
    }

    return(
       <>
         {
           loggedIn ? (
                <Navigate to="/category/Home" />
              )  : 
              <>
                { isNew ? <SignUp /> : <LogIn />}
              </>
         }
       </>
    )
}

export default GetStarted;