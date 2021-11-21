import './hollywood.css'
import {Link} from 'react-router-dom'

import ListOfBlogData from '../ListOfArrayOfObjects';
function createHollywoodPosts(data){
    return <div className="dataOfArticles">
    <img src={data.ImgUrl} alt="Latest Article" />
    <div className="article-heading-home-flex">
      <div>
        <Link to={`/Hollywood/${data.id}`}><div className="latest-post-title-1">
          {data.title}
        </div>
        </Link>
        <p>
          {data.desc.substring(0, 150)}
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

function Hollywood(){
    return(
      <>
        <div className="main-container margtop2rem">
        <div className="blog-heading">Hollywood</div>

        {/* <hr/> */}
        <div className="box-containes-leftAndRight">
          <div className="blogs-box-flex">
            
            {ListOfBlogData.filter((filtering)=>
              filtering.category === "Hollywood"
            ).map(createHollywoodPosts)}

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
export default Hollywood;