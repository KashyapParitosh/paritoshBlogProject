
import "./fitness.css";
import ListOfBlogData from "../ListOfArrayOfObjects";
import { Link } from "react-router-dom";

function createFitnessPosts(data) {
  return (
    <div className="dataOfArticles">
      <img src={data.ImgUrl} alt="Latest Article" />
      <div className="article-heading-home-flex">
        <div>
        <Link to={`/Fitness/${data.id}`}>
          <div className="latest-post-title-1">{data.title}</div>
        </Link>
          <p>
            {data.desc.substring(0, 100)}
            {/* acccvksankalaakakaddaldkkanlfnldssklmflksfkflknm */}
          </p>
        </div>
        <div>
          {" "}
          <span className="latest-home-type">{data.category}</span>
          <span className="latest-home-date">{data.time}</span>
        </div>
      </div>
    </div>
  );
}

function Fitness() {
  return (
    <>
      <div className="main-container margtop2rem">
        <div className="blog-heading">Fitness</div>

        {/* <hr/> */}
        <div className="box-containes-leftAndRight">
          <div className="blogs-box-flex">
            {ListOfBlogData.filter(
              (filtering) => filtering.category === "fitness"
            ).map(createFitnessPosts)}

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
export default Fitness;

// <MultiUse></MultiUse>
