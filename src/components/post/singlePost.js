import "./style.css"
function SinglePost(params) {
  const post = params.value;
  console.log("single post data: ", post);
  return (
    <div>
      {/* <div style={{ padding: "1rem" }}> */}
      <div className="singlePost" >
        <h1> {post.title} </h1>
        <small>Date: {post.date}</small>
        {" | "}
        <small>Like: {post.like}</small>
        <p>{post.descriptions}</p>
      </div>
    </div>
  );
}

export default SinglePost;
