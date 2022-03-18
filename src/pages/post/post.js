import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../static/data/data";
import PopularPost from "../../components/post/popularPost";
function Post() {
  const [post, setPost] = useState({});
  const params = useParams();
  useEffect(() => {
    const postData = getPost(parseInt(params.postId, 10));
    setPost(postData);
  }, [params]);
  return (
    <div className="container">
      <div className="row">
        {/* post list */}
        <div className="col-md-9">
          <div style={{ padding: "1rem" }}>
            <h1> {post.title} </h1>
            <small>Date: {post.date}</small>
            {" | "}
            <small>Like: {post.like}</small>
            <p>{post.descriptions}</p>
          </div>
        </div>
        {/* popular post */}
        <div className="col-md-3">
          <PopularPost />
        </div>
      </div>
    </div>
  );
}

export default Post;
