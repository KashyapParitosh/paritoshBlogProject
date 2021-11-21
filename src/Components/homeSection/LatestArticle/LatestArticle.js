import "./LatestArticle.css";
import React from "react";
import { Link } from "react-router-dom";
import ListOfBlogData from "../../ListOfArrayOfObjects";

function CreateLatestArticles(data){
  return <>
   <div key={data.id} className="dataOfArticles">
  <img src={data.ImgUrl} alt="Latest Article" />
  <div className="article-heading-home-flex">
    <div>
      <Link to={`/${data.category}/${data.id}`}>
        <div className="latest-post-title-1">{data.title}</div>
      </Link>
      <p>
        {data.desc.substring(0,140)}
      </p>
    </div>
    <div>
      {" "}
      <span className="latest-home-type">{data.category}</span>
      <span className="latest-home-date">{data.time}</span>
    </div>
  </div>
</div>
<hr></hr>
</>
}

function createTopPosts(data){
  return <> 
  <div key={data.id} className="top-post-section-side">
  <img src={data.ImgUrl} alt="alt" />
  <div className="top-post-section-home-flex">
    <div>
      <Link to={`/${data.category}/${data.id}`}>
        <div className="latest-top-post-section-title-1">{data.title}</div>
      </Link>
    </div>
    <div>
      <span className="latest-home-type">{data.category}</span>
      <span className="latest-home-date">{data.time}</span>
    </div>
  </div>
</div>
<hr className="margtop1rem" />
</>
}

function LatestArticle() {
  return (
    <div className="LatestArticles-Container">
      <div className="heading-home-latest">Latest Articles</div>
      <div className="LatestArticles">
        <div className="articles-left-home">
          <hr />
            
            {ListOfBlogData.slice(3,7).map(CreateLatestArticles)}



          <div onClick={() => {ListOfBlogData.slice(2, 4).map(CreateLatestArticles)}} className="load-more">
            <i className="fas fa-arrow-down"></i> Load More
          </div>

          <div className="ArticleImg" style={{backgroundImage : `url(${ListOfBlogData[12].ImgUrl})`}}></div>
        </div>

        <div className="articles-right-home">
          <div className="advertisement-box">Advertisement</div>
          <br />
          <div className="heading-home-latest">Top Posts</div>

          <div className="top-post-home margtb2rem">
            <div className="top-post-homePhoto">
              <img src={ListOfBlogData[11].ImgUrl} alt="alt" />
              <Link to={`/${ListOfBlogData[11].category}/${ListOfBlogData[11].id}`}>
                <div className="latest-post-title-1 margtop1rem">{ListOfBlogData[11].title}</div>
              </Link>
              <div className="date-on-top-post margtop1rem">
                <span className="latest-home-type ">{ListOfBlogData[11].category}</span>
                <span className="latest-home-date">{ListOfBlogData[11].time}</span>
              </div>
            </div>

            <hr className="margtop1rem" />

             {ListOfBlogData.slice(7,11).map(createTopPosts)}            

          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestArticle;
