import "./intro.css";
import ListOfBlogData from "../../ListOfArrayOfObjects";
import { Link } from "react-router-dom";

function createIntroImage(data) {
  return (
    <div
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
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="low-brigtness"
                src={ListOfBlogData[0].ImgUrl}
                className="d-block w-100"
                alt="alt"
              />
              <div className="carousel-caption d-md-block">
                <Link to={`/${ListOfBlogData[0].category}/${ListOfBlogData[0].id}`}> 
                   <h5>{ListOfBlogData[0].title}</h5>
                </Link>
                <p>
                  {ListOfBlogData[0].category} {ListOfBlogData[0].time}
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                className="low-brigtness"
                src={ListOfBlogData[12].ImgUrl}
                className="d-block w-100"
                alt="alt"
              />
              <div className="carousel-caption d-md-block">
                <Link to={`/${ListOfBlogData[12].category}/${ListOfBlogData[12].id}`}>
                  <h5>{ListOfBlogData[12].title}</h5>
                </Link>
                <p>
                  {ListOfBlogData[12].category} {ListOfBlogData[12].time}
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                className="low-brigtness"
                src={ListOfBlogData[8].ImgUrl}
                className="d-block w-100"
                alt="alt"
              />
              <div className="carousel-caption d-md-block">
                <Link to={`/${ListOfBlogData[8].category}/${ListOfBlogData[8].id}`}>
                  <h5>{ListOfBlogData[8].title}</h5>
                </Link>
                <p>
                  {ListOfBlogData[8].category} {ListOfBlogData[8].time}
                </p>
              </div>
            </div>
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
          {ListOfBlogData.slice(1, 3).map(createIntroImage)}
        </div>
      </div>
    </div>
  );
}
export default Intro;
