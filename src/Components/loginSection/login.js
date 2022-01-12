import "./login.css";
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'

function LogIn(props) {
  const [isValid] = useState(false);
  var [emailValue, setEmail] = useState("");
  var [passValue, setPass] = useState("");
  const navigate = useNavigate();
  const [,setToken] = useState(()=>localStorage.getItem("token" || ""));

  const clickHandler = (e) => {
    e.preventDefault();
    // if (emailValue.length >= 1 && passValue.length >= 1) {
    //     setActive(true);
    // } else {
    //     alert("invalid")
    // }
    const email = emailValue;
    const password = passValue;
    if(email ===undefined || password === undefined ){
      alert("Please enter valid Email & Password")
      return;
    }
    const body = {
      email, password
    }
    axios.post("https://blog-back-end-01.herokuapp.com/api/v1/auth/login", body)
    .then(( res ) => {
          const token = res.data.data.token
          setToken(token);
          console.log(res.data.data.token)
          localStorage.setItem("token", token)
    })
    .catch(res=> console.log(res))

    localStorage.setItem("user", "Signed")

    navigate("/category/Home");
    props.userSignedOut();
}

//   const clickHandler = () => {
//     setActive((prevState) => !prevState);
//   };

  return (
    <>
      {isValid ? (
        <Navigate to="/category/Home" />
      ) : (
        <div className="logIn-cont">
          <h1 className='WelcomeHeading'>Welcome</h1>

          <form className="form">
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />

            <input
              onChange={(e) => setPass(e.target.value)}
              required
              placeholder="Password"
              type="Password"
            />

            <button type="submit" onClick={clickHandler} className="login-btn">
              Log In
            </button>
          </form>
        </div>
      )}
    </>
  );
}


const mapStateToProps = (state) =>{
  console.log(state);
  return {
    state
  }
} 

const mapDispatchToState = (dispatch)=>{
  return{
    userSignedOut : ()=>{
      const authSignOut = localStorage.getItem("token");
      dispatch({type:"logOut",data:authSignOut})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToState)(LogIn);
