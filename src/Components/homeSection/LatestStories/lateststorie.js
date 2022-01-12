import './lateststories.css'
import ListOfBlogData from '../../ListOfArrayOfObjects';
import {Link} from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function createLatestStories(data){
    return <div key={data.id} className="latest-stories-boxs">
    <Link to={`/${data.category}/${data.id}`}>
        <div className="latest-stories-title">{data.title}</div>
    </Link>
    <div className="latest-stories-description">
       <p>
           {data.desc}
       </p>
    </div>
    <div className="latest-stories-time">
        <span className="latest-stories-category">{data.category}</span>
        <span className="latest-stories-time">{data.time}</span>
    </div>
</div>
}
function LatestStories(){
    const token = localStorage.getItem("token");
    const [latestStories, setLatestData] = useState([]);
  
    useEffect(() => {
      const url1 = "https://blog-back-end-01.herokuapp.com/api/v1/blogs/filterByDate";
      const config = { headers: { authorization: `Bearer ${token}` } };
  
      axios
        .get(url1, config)
        .then((res) => {
          console.log(res);
          setLatestData(res.data.filterDataByDate);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [token]);
    return(
      <div className="LatestStories-cont">
          <div className="latest-stories-heading">
              Latest Stories
          </div>
          <div className="Latest-flex">
           {latestStories.slice(0,3).map(createLatestStories)}
                          
          </div>
      </div>
    );
}
export default LatestStories;