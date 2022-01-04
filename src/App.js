import "./App.css";
import Home from "./Components/homeSection/home";
import NavBar from './Components/NavbarSection/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Food from "./Components/food/food";
// import Travel from "./Components/travel/travel";
// import Fitness from "./Components/fitness/fitness";
// import Bollywood from "./Components/bollywood/bollywood";
// import Hollywood from "./Components/hollywood/hollywood";
import SinglePost from "./Components/singlePagePost/singlePost";

import Footer from "./Components/Footer/Footer";
import MultiUse from "./Components/multiUseElement/multiUse";
import GetStarted from "./Components/getStarted/getStarted";
function App() {
  let isLogedIn = localStorage.getItem("user");
  if( isLogedIn == null ){
    return <>
       <BrowserRouter>
      {/* <NavBar /> */}
        <Routes>
        <Route exact path="/GetStarted" element={<><NavBar /><GetStarted /></>} />
          <Route exact path="/" element={<><NavBar /><GetStarted /></>} />
          <Route exact path="/category/:category" element={<><NavBar /><GetStarted /></>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  }  
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<><NavBar /><GetStarted /></>} />
          <Route exact path="/category/Home" element={<><NavBar /><Home /></>} />
          <Route exact path="/category/:category" element={<><NavBar /><MultiUse /></>} />
          {/* <Route exact path="/Fitness" element={<Fitness />} />
          <Route exact path="/Travel" element={<Travel />} />
          <Route exact path="/Hollywood" element={<Hollywood />} />
        <Route exact path="/Food" element={<Food />} /> */}
          <Route exact path="/:category/:id" element={<><NavBar /><SinglePost /></>} />
          {/* <Route exact path="/Food/:id" element={<SinglePost />} />
          <Route exact path="/Fitness/:id" element={<SinglePost />} />
          <Route exact path="/Bollywood/:id" element={<SinglePost />} />
        <Route exact path="/Hollywood/:id" element={<SinglePost />} /> */}
          <Route exact path="/GetStarted" element={<><NavBar /><GetStarted /></>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;


