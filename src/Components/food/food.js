import "./food.css";
import { Link } from "react-router-dom";

import ListOfBlogData from "../ListOfArrayOfObjects";
function createFoodPosts(data) {
  return (
    <div className="dataOfArticles">
      <img src={data.ImgUrl} alt="Latest Article" />
      <div className="article-heading-home-flex">
        <div>
          <Link to={`/Food/${data.id}`}>
            <div className="latest-post-title-1">{data.title}</div>
          </Link>
          <p>
            {data.desc.substring(0, 140)}
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

function Food() {
  return (
    <>
      <div className="main-container margtop2rem">
        <div className="blog-heading">Food</div>

        {/* <hr/> */}
        <div className="box-containes-leftAndRight">
          <div className="blogs-box-flex">
            {ListOfBlogData.filter(
              (filtering) => filtering.category === "food"
            ).map(createFoodPosts)}

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
export default Food;
