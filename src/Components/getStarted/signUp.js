import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function SignUp() {
    const [emailValue, setEmail] = useState("");
    const [passValue, setPass] = useState("");
    const [fullName, setName] = useState("");

    const [error, setError] = useState(null);
    // const [userDetails, setUserDetails] = useState({
    //     fullName : "",
    //     email : "",
    //     password : "",
    // });

    // const handleData = (e) =>{
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     setUserDetails({...userDetails, [name] : value })
    // }

    const submitData = (e) => {
        e.preventDefault();
        console.log("run");
        const password = passValue
        const email = emailValue;
        console.log(password, email)
        if( password.length < 6 || email.length < 6 ){
            setError("too Short!!!");
            return;
        }
        setError("");

        localStorage.setItem("user", "Signed")
        console.log("here")
      }
      if( localStorage.getItem("user") !== null){
        return <Navigate to="/category/Home" />
      }

    return(
       <>
         <div className="logIn-cont">
          <h1>Welcome</h1>

          <form className="form">
            <input
              required
              onChange={(e) => setName(e.target.value)}
              // onChange={handleData}
              placeholder="Enter Name"
              type="text"
              // name='fullname'
              // value= {userDetails.fullName}

            />

            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handleData}
              placeholder="Email"
              type="email"
              // name='email12'
              // value= {userDetails.email}
            />
            {error}

            <input
              onChange={(e) => setPass(e.target.value)}
              // onChange={handleData}
              required
              placeholder="Password"
              type="password"
              // value= {userDetails.password}
            />
            {error}

            <button type="submit" onClick={submitData} className="login-btn">
              Sign Up
            </button>
          </form>
        </div>
       </>
    )
}

export default SignUp;