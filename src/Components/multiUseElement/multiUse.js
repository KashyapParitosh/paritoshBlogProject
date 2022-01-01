import "./multiUse.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

function CreateBollywoodPosts(data){
  return <div className="dataOfArticles">
  <img src={data.ImgUrl} alt="Latest Article" />
  <div className="article-heading-home-flex">
    <div>
    <Link to={`/${data.category}/${data.id}`}>
      <div className="latest-post-title-1">{data.title}</div>
    </Link>
      <p>
        {data.desc}
      </p>
    </div>
    <div>
      {" "}
      <span className="latest-home-type">{data.category}</span>
      <span className="latest-home-date">{data.time}</span>
    </div>
  </div>
</div>
}


function MultiUse() {
  const [postNumber, setpostNumber] = useState(2)
  const { category } = useParams();
  const [blogs, setblog] = useState([])

  useEffect(() => {
    const config = { params : { category : category }}
    const url = "http://localhost:8000/api/v1/blogs/"
    axios.get(url, config).then((res)=> {
      console.log(res);
      return setblog(res.data.filteredData)
    })
    .catch((err)=> {
      console.log(err);
    })
  },[category])

   useEffect(()=>{
     setpostNumber(2);
   },[category])
      
   const UpdatePostCount = ()=> {
     setpostNumber((prev)=> prev + 2 );
   } 
  return (
    <>
      <div className="main-container margtop2rem">
        <div className="blog-heading">{category}</div>

        {/* <hr/> */}
        <div className="box-containes-leftAndRight">
          <div className="blogs-box-flex">

            
            {
              blogs.slice(0, postNumber).map(CreateBollywoodPosts)
            }

            <div className="load-more" onClick={UpdatePostCount}>
              {" "}
              <i className="fas fa-arrow-down"></i> Load More
            </div>
          </div>

          <div className="rightSide-box">
            <div className="advertisement-box">Advertisement</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MultiUse;
