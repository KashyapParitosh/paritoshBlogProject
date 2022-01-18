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
  const [error, setError] = useState(null);
  // const [,setToken] = useState(()=>localStorage.getItem("token" || ""));
  let token = "";
  const clickHandler = (e) => {
    e.preventDefault();
    // if (emailValue.length >= 1 && passValue.length >= 1) {
    //     setActive(true);
    // } else {
    //     alert("invalid")
    // }
    const email = emailValue;
    const password = passValue;
    // if(email ===undefined || password === undefined ){
    //   alert("Please enter valid Email & Password")
    //   return;
    // }
    if( password.length < 6 || email.length < 6 ){
      setError("too Short!!!");
      return;
  }
  setError("");
    const body = {
      email, password
    }
    axios.post("https://blog-back-end-01.herokuapp.com/api/v1/auth/login", body)
    .then(( res ) => {
          token = res.data.data.token
          console.log(res.data.data.token)
          localStorage.setItem("token", token)
          localStorage.setItem("user", "Signed")
          navigate("/category/Home");
          props.userSignedOut();
    })
    .catch(res=> console.log(res))

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
            {error}
            <input
              onChange={(e) => setPass(e.target.value)}
              required
              placeholder="Password"
              type="Password"
            />
            {error}
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
