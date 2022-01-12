import "./App.css";
import Home from "./Components/homeSection/home";
import NavBar from './Components/NavbarSection/Navbar'
import { Route, Routes } from "react-router-dom"
import SinglePost from "./Components/singlePagePost/singlePost";
import Footer from "./Components/Footer/Footer";
import MultiUse from "./Components/multiUseElement/multiUse";
import GetStarted from "./Components/getStarted/getStarted";
import {connect} from 'react-redux'


function App() {
  console.log("app render");
  let isLoggedIn = localStorage.getItem("user");
  if( isLoggedIn == null ){
    return <>
       {/* <BrowserRouter> */}
      <NavBar />
        <Routes>
        <Route exact path="/GetStarted" element={<><GetStarted /></>} />
          <Route exact path="/" element={<><GetStarted /></>} />
          <Route exact path="/category/:category" element={<><GetStarted /></>} />
        </Routes>
        <Footer></Footer>
      {/* </BrowserRouter> */}
    </>
  }  
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <NavBar />
        <Routes>
          <Route exact path="/" element={<><GetStarted /></>} />
          <Route exact path="/category/Home" element={<><Home /></>} />
          <Route exact path="/category/:category" element={<><MultiUse /></>} />
          <Route exact path="/:category/:id" element={<><SinglePost /></>} />
          <Route exact path="/GetStarted" element={<><GetStarted /></>} />
        </Routes>
        <Footer></Footer>
      {/* </BrowserRouter> */}
    </div>
  );
}

const mapStateToProps = (state) =>{
  console.log(state);
  return {
    state
  }
} 

export default connect(mapStateToProps)(App);


