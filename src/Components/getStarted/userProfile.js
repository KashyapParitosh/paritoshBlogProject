import "./userProfile.css"
import { Link } from 'react-router-dom';
import photoOfUser from '../../images/singlePost-author-img.png'
import { Navigate, useNavigate } from 'react-router';
import {connect} from 'react-redux'

function UserProfile (props) {
    const navigate = useNavigate();
    const Logout = ()=> {
        localStorage.removeItem("user")
        localStorage.removeItem("token");
        props.userSignedOut();
        navigate("/GetStarted");
    }
    return(
       <>
          <div className="userProfile-cont">
              <div className="imageOfUser"><img src={photoOfUser} alt="photoOfUser" /></div>
              <div className="userdetails">
                 <div className="userName">Paritosh Kahsyap</div>
                 <Link to="/GetStarted" ><button onClick={Logout}>Log Out</button></Link>
              </div>
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
      userSignedOut : ()=>{
        const authSignOut = localStorage.getItem("token");
        dispatch({type:"logOut",data:authSignOut})
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToState)(UserProfile);