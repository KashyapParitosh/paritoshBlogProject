import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'

function SignUp(props) {
    const [emailValue, setEmail] = useState("");
    const [passValue, setPass] = useState("");
    const [fullName, setName] = useState("");
    const navigate = useNavigate();
    // const [,setToken] = useState(()=>localStorage.getItem("token" || ""));
    let token = ""; 

    const [error, setError] = useState(null);

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
        
        const body = {
          name, password, email
        }
        // const tempUrl = "http://localhost:8000/api/v1/auth/signup";
        const herokuUrl = "https://blog-back-end-01.herokuapp.com/api/v1/auth/signup";
        axios.post( herokuUrl, body )
        .then( (res) => {
          alert(res.data.message);
          token = res.data.data.token
          console.log(res.data.data.token)
          localStorage.setItem("token", token)
          localStorage.setItem("user", "Signed")
          
          props.userSignedIn();
          navigate("/category/Home", {replace:true})
        })
        .catch( err =>console.log(err.status, err.message));
        
        
    }

    return(
       <>
         <div className="logIn-cont">
          <h1 className='WelcomeHeading'>Welcome</h1>

          <form className="form">
            <input
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              type="text"
            />

            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
            {error}

            <input
              onChange={(e) => setPass(e.target.value)}
              required
              placeholder="Password"
              type="password"            
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


const mapStateToProps = (state) =>{
  console.log(state);
  return {
    state
  }
} 

const mapDispatchToState = (dispatch)=>{
  return{
    userSignedIn : ()=>{
      const authSignIn = localStorage.getItem("user");

      dispatch({type:"login",data:authSignIn})
    }
  }
} 

export default connect(mapStateToProps,mapDispatchToState)(SignUp);