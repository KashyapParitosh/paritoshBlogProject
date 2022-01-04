import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [emailValue, setEmail] = useState("");
    const [passValue, setPass] = useState("");
    const [fullName, setName] = useState("");
    const navigate = useNavigate();
    const [token,setToken] = useState(()=>localStorage.getItem("token" || ""));

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
        const name = fullName;
        const password = passValue
        const email = emailValue;
        console.log(password, email)
        if( password.length < 6 || email.length < 6 ){
            setError("too Short!!!");
            return;
        }
        setError("");

        console.log("here");
        
        const body = {
          name, password, email
        }
        axios.post( "http://localhost:8000/api/v1/auth/signup", body )
        .then( (res) => {
          const token = res.data.data.token
          setToken(token);
          console.log(res.data.data.token)
          localStorage.setItem("token", token)
        })
        .catch( err =>console.log(err.status, err.message));

        localStorage.setItem("user", "Signed")

        navigate("/category/Home")
        window.location.reload(false);
    }

    
      // if( localStorage.getItem("user") !== null){
      //   window.location.reload(false);
      //   return <Navigate replace to="/category/Home" />
      // }

    return(
       <>
         <div className="logIn-cont">
          <h1 className='WelcomeHeading'>Welcome</h1>

          <form className="form">
            <input
              required
              onChange={(e) => setName(e.target.value)}
              // onChange={handleData}
              placeholder="Enter Name"
              type="text"
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