import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'

function SignUp(props) {
    console.log(props)
    const [emailValue, setEmail] = useState("");
    const [passValue, setPass] = useState("");
    const [fullName, setName] = useState("");
    const navigate = useNavigate();
    const [,setToken] = useState(()=>localStorage.getItem("token" || ""));

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
        axios.post( "https://blog-back-end-01.herokuapp.com/api/v1/auth/signup", body )
        .then( (res) => {
          const token = res.data.data.token
          setToken(token);
          console.log(res.data.data.token)
          localStorage.setItem("token", token)
        })
        .catch( err =>console.log(err.status, err.message));

        localStorage.setItem("user", "Signed")
        
        navigate("/category/Home", {replace:true})
        props.userSignedIn();
        // console.log(token);
        // if( localStorage.getItem("token") === token ){
          
        // }
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