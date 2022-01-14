import "./LatestArticle.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListOfBlogData from "../../ListOfArrayOfObjects";
import axios from "axios";

function CreateLatestArticles(data) {
  return (
    <div key={data.id}>
      <div className="dataOfArticles">
        <img src={data.ImgUrl} alt="Latest Article" />
        <div className="article-heading-home-flex">
          <div>
            <Link to={`/${data.category}/${data.id}`}>
              <div className="latest-post-title-1">{data.title}</div>
            </Link>
            <p>{data.desc.substring(0, 140)}</p>
          </div>
          <div>
            {" "}
            <span className="latest-home-type">{data.category}</span>
            <span className="latest-home-date">{data.time}</span>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

function createTopPosts(data) {
  return (
    <div key={data.id}>
      <div className="top-post-section-side">
        <img src={data.ImgUrl} alt="alt" />
        <div className="top-post-section-home-flex">
          <div>
            <Link to={`/${data.category}/${data.id}`}>
              <div className="latest-top-post-section-title-1">
                {data.title}
              </div>
            </Link>
          </div>
          <div>
            <span className="latest-home-type">{data.category}</span>
            <span className="latest-home-date">{data.time}</span>
          </div>
        </div>
      </div>
      <hr className="margtop1rem" />
    </div>
  );
}

function LatestArticle() {
  const [topPostsByBackEnd, setTopPostsByBackEnd] = useState([]);
  const [latestArticleData, setLatestArticleData] = useState([]);
  useEffect(()=> {
    //  window.addEventListener('storage', (e)=> console.log(e), false )
    setTimeout(() => {
      const token = localStorage.getItem("token");
      console.log("inside useefect", token)
      const url = "https://blog-back-end-01.herokuapp.com/api/v1/blogs/filterByIsLiked";
    // const url1 = "http://localhost:8000/api/v1/blogs/filterByIsLiked";
    const url2 ="https://blog-back-end-01.herokuapp.com/api/v1/blogs/filterByDate";
    const config = { headers: { authorization: `Bearer ${token}` } };
    axios
      .get(url, config)
      .then((res) => {
        console.log(res);
        setTopPostsByBackEnd(res.data.filterDataByIsLiked);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(url2, config)
      .then((res) => {
        console.log(res);
        setLatestArticleData(res.data.filterDataByDate);
      })
      .catch((err) => {
        console.log(err);
      });
    }, 1000);
  },[])

  return (
    <div className="LatestArticles-Container">
      <div className="heading-home-latest">Latest Articles</div>
      <div className="LatestArticles">
        <div className="articles-left-home">
          <hr />

          {latestArticleData.slice(0, 4).map(CreateLatestArticles)}

          <div
            onClick={() => {
              ListOfBlogData.slice(2, 4).map(CreateLatestArticles);
            }}
            className="load-more"
          >
            <i className="fas fa-arrow-down"></i> Load More
          </div>

          <div
            className="ArticleImg"
            style={{ backgroundImage: `url(${ListOfBlogData[12].ImgUrl})` }}
          ></div>
        </div>

        <div className="articles-right-home">
          <div className="advertisement-box">Advertisement</div>
          <br />
          <div className="heading-home-latest">Top Posts</div>

          {topPostsByBackEnd.slice(0, 1).map((item) => {
            return (
              <div className="top-post-homePhoto margtb2rem">
                <img src={item.ImgUrl} alt="alt" />
                <Link
                  to={`/${item.category}/${item.id}`}
                >
                  <div className="latest-post-title-1 margtop1rem">
                    {item.title}
                  </div>
                </Link>
                <div className="date-on-top-post margtop1rem">
                  <span className="latest-home-type ">
                    {item.category}
                  </span>
                  <span className="latest-home-date">
                    {item.time}
                  </span>
                </div>
              </div>
            );
          })}
          <div className="top-post-home margtb2rem">
            <hr className="margtop1rem" />

            {topPostsByBackEnd.slice(1, 5).map(createTopPosts)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestArticle;
