import "./intro.css";
import ListOfBlogData from "../../ListOfArrayOfObjects";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
function createIntroImage(data) {
  return (
    <div
      key={data.id}
      className="introImg2"
      style={{ backgroundImage: `url(${data.ImgUrl})` }}
    >
      <div className="home-second-title">
        <Link to={`/${data.category}/${data.id}`}>
          <div>{data.title} </div>
        </Link>
        <div className="home-hero-title-date">
          {" "}
          {data.category} {data.time}{" "}
        </div>
      </div>
    </div>
  );
}
function Intro() {
  const [ListOfBlogData, setIntroData] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const token = localStorage.getItem("token");
  //     const url =
  //       "https://blog-back-end-01.herokuapp.com/api/v1/blogs/dataForIntro";
  //     const config = { headers: { authorization: `Bearer ${token}` } };
  //     axios
  //       .get(url, config)
  //       .then((res) => {
  //         console.log(res);
  //         // console.log(res.data.filteredDataForIntro[0].ImgUrl)
  //         setIntroData(res.data.filteredDataForIntro);
          
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, 1000);
  // }, []);
  useEffect(() => {
      const token = localStorage.getItem("token");
      console.log(token)
      const url =
        "https://blog-back-end-01.herokuapp.com/api/v1/blogs/dataForIntro";
      const config = { headers: { authorization: `Bearer ${token}` } };
      axios
        .get(url, config)
        .then((res) => {
          console.log(res);
          // console.log(res.data.filteredDataForIntro[0].ImgUrl)
          setIntroData(res.data.filteredDataForIntro);
          
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);
  console.log(ListOfBlogData);
  return (
    <div className="intro-container">
      <div className="introSec">
        {/* <div className="introImg1">
                <div className="home-hero-title">
                    <div >Title of vertical gallery  </div>
                    <div className="home-hero-title-date">  Travel / August 21 2017  </div>
                </div>
            </div> */}

        <div
          id="carouselExampleCaptions"
          className="carousel slide introImg1"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          {/* {ListOfBlogData.slice(0, 1).map((item) => {
            return(
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="low-brigtness"
                  src={item.ImgUrl}
                  className="d-block w-100"
                  alt="alt"
                />
                <div className="carousel-caption d-md-block">
                  <Link
                    to={`/${item.category}/${item.id}`}
                  >
                    <h5>{item.title}</h5>
                  </Link>
                  <p>
                    {item.category} {item.time}
                  </p>
                </div>
              </div>
            </div>
            )
          })} */}
          
          <div className="carousel-inner">
          {ListOfBlogData.slice(0, 1).map((item) => {
            return(
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="low-brigtness"
                  src={item.ImgUrl}
                  className="d-block w-100"
                  alt="alt"
                />
                <div className="carousel-caption d-md-block">
                  <Link
                    to={`/${item.category}/${item.id}`}
                  >
                    <h5>{item.title}</h5>
                  </Link>
                  <p>
                    {item.category} {item.time}
                  </p>
                </div>
              </div>
            </div>
            )
          })}
            {ListOfBlogData.slice(1,2).map((item) => {
            return(
            <div className="carousel-inner">
              <div className="carousel-item">
                <img
                  className="low-brigtness"
                  src={item.ImgUrl}
                  className="d-block w-100"
                  alt="alt"
                />
                <div className="carousel-caption d-md-block">
                  <Link
                    to={`/${item.category}/${item.id}`}
                  >
                    <h5>{item.title}</h5>
                  </Link>
                  <p>
                    {item.category} {item.time}
                  </p>
                </div>
              </div>
            </div>
            )
          })}
            {ListOfBlogData.slice(2, 3).map((item) => {
            return(
            <div className="carousel-inner">
              <div className="carousel-item">
                <img
                  className="low-brigtness"
                  src={item.ImgUrl}
                  className="d-block w-100"
                  alt="alt"
                />
                <div className="carousel-caption d-md-block">
                  <Link
                    to={`/${item.category}/${item.id}`}
                  >
                    <h5>{item.title}</h5>
                  </Link>
                  <p>
                    {item.category} {item.time}
                  </p>
                </div>
              </div>
            </div>
            )
          })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="introImgFlexBox">
          {/* <div className="introImg2">
                    <div className="home-second-title">
                        <div >Title of vertical gallery Title of vertical gallery </div>
                        <div className="home-hero-title-date">  Travel / August 21 2017  </div>
                    </div>
                </div>
                <div className="introImg3">
                    <div className="home-second-title">
                        <div>Title of vertical gallery  </div>
                        <div className="home-hero-title-date">  Travel / August 21 2017  </div>
                    </div>
                </div> */}
          {ListOfBlogData.slice(3, 5).map(createIntroImage)}
        </div>
      </div>
    </div>
  );
}
export default Intro;
