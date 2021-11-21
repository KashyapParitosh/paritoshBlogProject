// import NavBar from "../NavbarSection/Navbar";
import Intro from "./intro/intro";
import Latest from "./The Latest/latest";
import LatestArticle from "./LatestArticle/LatestArticle";
import LatestStories from "./LatestStories/lateststorie";
// import {Routes, Route } from 'react-router-dom'
function Home (){
  return(
    <div>
    
        {/* <NavBar/> */}
        <Intro></Intro>
        <Latest></Latest>
        <LatestArticle></LatestArticle>
        <LatestStories></LatestStories>
    </div>
  );
}

export default Home;