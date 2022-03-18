import React from "react";
import "./style.css";

function PostList(params) {
  const post = params.value;
  return (
    <div className="row pt-5">
      <div className="col-md-5 ">
        <img
          className="rounded float-start"
          src={`/image/${post.image}`}
          alt="..."
          style={{ maxWidth: "100%" }}
        />
      </div>
      <div className="col-md-7">
        <div className="p-2">
          <h1>{post.title}</h1>
          <p className="post-short-description">{post.descriptions}</p>
        </div>
      </div>
    </div>
  );
}

export default PostList;
