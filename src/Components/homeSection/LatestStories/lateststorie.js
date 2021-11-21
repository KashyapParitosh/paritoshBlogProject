import './lateststories.css'
import ListOfBlogData from '../../ListOfArrayOfObjects';
import {Link} from 'react-router-dom'

function createLatestStories(data){
    return <div className="latest-stories-boxs">
    <Link to={`/${data.category}/${data.id}`}>
        <div className="latest-stories-title">{data.title}</div>
    </Link>
    <div className="latest-stories-description">
       <p>
           {data.desc}
       </p>
    </div>
    <div className="latest-stories-time">
        <span className="latest-stories-category">{data.category}</span>
        <span className="latest-stories-time">{data.time}</span>
    </div>
</div>
}
function LatestStories(){
    return(
      <div className="LatestStories-cont">
          <div className="latest-stories-heading">
              Latest Stories
          </div>
          <div className="Latest-flex">
           {ListOfBlogData.slice(3,6).map(createLatestStories)}
                          
          </div>
      </div>
    );
}
export default LatestStories;