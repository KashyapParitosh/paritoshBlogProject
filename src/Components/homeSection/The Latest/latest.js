import "./latest.css";
import React from "react";
// import ListOfBlogData from "../../ListOfArrayOfObjects";
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
  const token = localStorage.getItem("token");
  const [dataForMost, setDataForMost] = useState([]);

  useEffect(()=> {
    setTimeout(() => {
      const token = localStorage.getItem("token");
    const url = "https://blog-back-end-01.herokuapp.com/api/v1/blogs/filterByClap";
    // const url1 = "http://localhost:8000/api/v1/blogs/filterByClap";
    const config = { headers: {"authorization": `Bearer ${token}`}}

    axios.get(url, config).then((res)=> {
      console.log(res)
      setDataForMost(res.data.filterDataByClap)
    }).catch((err)=> {
      console.log(err)
    })
  },1000)
  },[token])
  return (
    <div className="latest-container">
      <div className="latest">
        <div className="latest-heading">Most Recommended Articles</div>
        <div className="latest-flex">
          {dataForMost.slice(0,3).map(createLatest)}          
        </div>
      </div>
    </div>
  );
}

export default Latest;