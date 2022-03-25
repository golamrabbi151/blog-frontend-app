import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getPosts } from "../../static/data/data";
function PopularPost() {
  const [popularPost, setPopularPost] = useState([]);
  useEffect(() => {
    const postData = getPosts();
    console.log("popular post: ", postData);
    setPopularPost(postData);
  }, []);
  const popular = popularPost.map((data) => (
    <div className="d-flex pt-1" key={data.id}>
      <div className="flex-shrink-0 popularPostImage">
        <img src={`/image/${data.image}`} alt="..." />
      </div>
      <NavLink to={`/post/${data.id}`} className="popularPostHeading">
        <div className="flex-grow-1 ms-3">
          <h1>{data.title}</h1>
        </div>
      </NavLink>
    </div>
  ));
  return (
    <div className="container-fluid pt-5">
      <h1 className="fs-5">Popular Post</h1>
      {popular}
    </div>
  );
}

export default PopularPost;
