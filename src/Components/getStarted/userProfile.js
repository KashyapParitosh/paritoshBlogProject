import "./userProfile.css"
import { Link } from 'react-router-dom';
import photoOfUser from '../../images/singlePost-author-img.png'

const Logout = ()=> {
    localStorage.removeItem("user")
    localStorage.removeItem("token");
    window.location.reload(false);
}

function UserProfile () {
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

export default UserProfile;