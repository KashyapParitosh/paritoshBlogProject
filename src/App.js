import "./App.css";
import NavBar from "./Components/NavbarSection/Navbar";
import Home from "./Components/homeSection/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Food from "./Components/food/food";
// import Travel from "./Components/travel/travel";
// import Fitness from "./Components/fitness/fitness";
// import Bollywood from "./Components/bollywood/bollywood";
// import Hollywood from "./Components/hollywood/hollywood";
import SinglePost from "./Components/singlePagePost/singlePost";
import LogIn from './Components/loginSection/login'
import Footer from "./Components/Footer/Footer";
import MultiUse from "./Components/multiUseElement/multiUse";
import GetStarted from "./Components/getStarted/getStarted";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<GetStarted />} />
          <Route exact path="/category/Home" element={<Home />} />
          <Route exact path="/category/:category" element={<MultiUse />} />
          {/* <Route exact path="/Fitness" element={<Fitness />} />
          <Route exact path="/Travel" element={<Travel />} />
          <Route exact path="/Hollywood" element={<Hollywood />} />
          <Route exact path="/Food" element={<Food />} /> */}
          <Route exact path="/:category/:id" element={<SinglePost />} />
          {/* <Route exact path="/Food/:id" element={<SinglePost />} />
          <Route exact path="/Fitness/:id" element={<SinglePost />} />
          <Route exact path="/Bollywood/:id" element={<SinglePost />} />
          <Route exact path="/Hollywood/:id" element={<SinglePost />} /> */}
          <Route exact path="/GetStarted" element={<LogIn />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;


