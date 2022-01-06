import "./singlePost.css";
import singlePostAuthorImage from "../../images/singlePost-author-img.png";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ListOfBlogData from "../ListOfArrayOfObjects";
import Claps from "../../images/clap.png";
import {Link} from 'react-router-dom';
import axios from 'axios'



function createMoreSirens(item) {
  return  <div key={item.id} className="relatedPosts">
        <img src={item.ImgUrl} alt="More siren" />
        <div className="tilteOfSiren">
          <Link to={`/${item.category}/${item.id}`}>{item.title}</Link>
        </div>
        <div className="moreSiren-author-img-name-date">
          <img src={singlePostAuthorImage} alt="Author" />
          <div className="author-nameAndDate">
            <span>Writen by</span>
            <span className="author-name-spanbox">{item.author}</span>
            <span className="author-date-spanbox">title of blog</span>
          </div>
        </div>
      </div>
  
}

function SinglePost() {

  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [once, setOnce] = useState(true);

  const [counter, setCounter] = useState(51);
  const token = localStorage.getItem("token");

  // const updatingClap = () => {
  //   setOnce(!once);
  //   console.log(once);
  //   if (once) {
  //     setCounter((prevState) => prevState + 1);
  //   } else {
  //     setCounter((prevState) => prevState - 1);
  //   }
  // };

  // useEffect(() => {
  //   let blog = ListOfBlogData.find((blog) => blog.id === parseInt(id));
  //   if (blog) {
  //     setBlog(blog);
  //     // console.log(blog);
  //   }
  // },[id]);

  useEffect(()=> {
    const config = { params : { blogId : id }, headers: {"authorization": `Bearer ${token}`}}
    const url = "http://localhost:8000/api/v1/blogs/singlePost"
    axios.get(url, config).then((res)=> {
      console.log(res.data.blogMatchById);
      return setBlog(res.data.blogMatchById)
    })
    .catch((err)=> {
      console.log(err);
    })
  },[id])

  

  function scrollToUp() {
    window.scrollTo(0, 0);
}
scrollToUp()

  const likesByBackend = () => {
    console.log("cliked likesByBackend")
    const url = "http://localhost:8000/api/v1/claps/updateClap";
    console.log(id);
    const config = { params : { blogId : id }, headers: {"authorization": `Bearer ${token}`}}
    console.log(config);
    axios.post(url,{}, config).then((res)=> {
        console.log(res.data.blogMatchById)
        setBlog(res.data.blogMatchById)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      {blog ? (
        <>
          <div key={blog.id} className="singlePost-cont">
            <div className="single-post-title">{blog.title}</div>

            <div className="auhtor-details">
              <div className="author-img-name-date">
                <img src={singlePostAuthorImage} alt="Author" />
                <div className="author-nameAndDate">
                  <span className="author-name-spanbox">{blog.author}</span>
                  <span className="author-date-spanbox">{blog.time}</span>
                </div>
              </div>
              <div className="share-btns">
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-twitter-square"></i>
              </div>
            </div>

            <div className="singlePost-Image">
              <img src={blog.ImgUrl} alt="Single Post" />
            </div>

            <div className="singlePost-desc">
              <p>{blog.desc}</p>
            </div>

            <div className="keyWords">
              <h4>Lets Talk About them</h4>
              <div className="keysOfPost">
                <span className="keyWord-ofPost">Food</span>
                <span className="keyWord-ofPost">Travel</span>
              </div>
            </div>

            <div onClick={likesByBackend} className="claps">
              <img src={Claps} alt="claps" />
              <span >{blog.claps} claps</span>
            </div>
            <hr className="mtp mtb" />
            <div className="author-img-name-date">
              <img src={singlePostAuthorImage} alt="Author" />
              <div className="author-nameAndDate">
                <span>Writen by</span>
                <span className="author-name-spanbox">{blog.author}</span>
                <span className="author-date-spanbox">{blog.time}</span>
              </div>
            </div>
          </div>

          <div className="moreFromTheSiren">
            <h4 id="heading-moreFromTheSiren">More From The Siren</h4>
            <div className="moreSirens-flex">
              {ListOfBlogData.slice(1,4).map(createMoreSirens)}               
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default SinglePost;
// onClick={updatingClap



