import "./multiUse.css";
import ListOfBlogData from "../ListOfArrayOfObjects";
import LatestArticleImg from "../../images/latestArticle Img.PNG";
function MultiUse() {
    
  return (
    <div className="main-container">
      <div className="blog-heading">Heading of blog</div>

      {/* <hr/> */}
      <div className="box-containes-leftAndRight">
        <div className="blogs-box-flex">
          <div className="articles-thumbnail">
            <img src={LatestArticleImg} alt="Latest Article Image" />
            <div className="article-heading-home-flex">
              <div>
                <div className="latest-post-title-1">
                  Joshua Tree Overnight Adventure{" "}
                </div>
                <p>
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces
                </p>
              </div>
              <div>
                {" "}
                <span className="latest-home-type">Travel</span>
                <span className="latest-home-date">/ August 21 2017</span>
              </div>
            </div>
          </div>

          <div className="articles-thumbnail">
            <img src={LatestArticleImg} alt="Latest Article Image" />
            <div className="article-heading-home-flex">
              <div>
                <div className="latest-post-title-1">
                  Joshua Tree Overnight Adventure{" "}
                </div>
                <p>
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces
                </p>
              </div>
              <div>
                {" "}
                <span className="latest-home-type">Travel</span>
                <span className="latest-home-date">/ August 21 2017</span>
              </div>
            </div>
          </div>

          <div className="articles-thumbnail">
            <img src={LatestArticleImg} alt="Latest Article Image" />
            <div className="article-heading-home-flex">
              <div>
                <div className="latest-post-title-1">
                  Joshua Tree Overnight Adventure{" "}
                </div>
                <p>
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces
                </p>
              </div>
              <div>
                {" "}
                <span className="latest-home-type">Travel</span>
                <span className="latest-home-date">/ August 21 2017</span>
              </div>
            </div>
          </div>

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
  );
}
export default MultiUse;
