import "./latest.css";
import React from "react";
import ListOfBlogData from "../../ListOfArrayOfObjects";
import {Link} from 'react-router-dom'
function createLatest(data){
  return  <div key={data.id} className="latest-posts">
  <img src={data.ImgUrl} alt="Latest Post" />
  <div className="latest-post-text1">
    <Link to={`/${data.category}/${data.id}`}>
      <div className="latest-post-title-1">{data.title}</div>
    </Link>
    <p>
      {data.desc.substring(0,100)}
    </p>
    <div className ="latest-post-date1">
      <span className="latest-home-type">{data.category}</span>
      <span className="latest-home-date">{data.time}</span>
    </div>
  </div>
</div>
}
function Latest() {
  return (
    <div className="latest-container">
      <div className="latest">
        <div className="latest-heading">The Latest</div>
        <div className="latest-flex">
          {ListOfBlogData.slice(3,6).map(createLatest)}          
        </div>
      </div>
    </div>
  );
}

export default Latest;