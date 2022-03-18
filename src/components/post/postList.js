import React from "react";

function PostList(params) {
  const post = params.value;
  return (
    <div className="d-flex pt-5">
      <div className="flex-shrink-0">
        <img
          src={`/image/${post.image}`}
          alt="..."
          style={{ width: "400px" }}
        />
      </div>
      <div className="flex-grow-1 ms-3">
        <p
          style={{
            // whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // maxWidth: "200px",
            height: "196px",
          }}
        >
          {post.descriptions}{" "}
          <button type="button" className="btn btn-primary btn-sm">
            more..
          </button>
        </p>
      </div>
    </div>
  );
}

export default PostList;
