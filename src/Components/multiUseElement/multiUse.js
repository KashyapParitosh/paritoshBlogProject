import "./multiUse.css";
import ListOfBlogData from "../ListOfArrayOfObjects";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const [blog, setblog] = useState(null)

  useEffect(() => {
      let blog = ListOfBlogData.find(blog => blog.category === category)
      if (blog) {
          setblog(blog)
      }
  }, [category])
      
  return (
    <>
      <div className="main-container margtop2rem">
        <div className="blog-heading">{category}</div>

        {/* <hr/> */}
        <div className="box-containes-leftAndRight">
          <div className="blogs-box-flex">

            {ListOfBlogData.filter((filtering)=>
              filtering.category === category
            ).map(CreateBollywoodPosts)}


            <div className="load-more">
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
