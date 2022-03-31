import "./style.css";
function SinglePost(params) {
  const post = params.value;
  return (
    <div>
      <div className="singlePost">
        <div className="single-post-image pt-5 pb-5">
          <img
            src={post ? `/image/${post.image}` : ""}
            alt="..."
            width={"100%"}
          />
        </div>
        <h1 className="fs-3"> {post?.title || ""} </h1>
        <i>Date: {post?.date || ""}</i>
        {" | "}
        <i>Like: {post?.like || ""}</i>
        <p className="pt-2">{post?.descriptions || ""}</p>
      </div>
    </div>
  );
}

export default SinglePost;
