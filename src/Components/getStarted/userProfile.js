import { Navigate, Link } from 'react-router-dom';

const Logout = ()=> {
    localStorage.removeItem("user")
    localStorage.removeItem("token");
    window.location.reload(false);
}

function UserProfile () {
    return(
       <>
          <div className="userProfile-cont">
              <h1>User Profile</h1>
              <Link to="/GetStarted" ><button onClick={Logout}>Log Out</button></Link>
          </div>
       </>
    )
}

export default UserProfile;