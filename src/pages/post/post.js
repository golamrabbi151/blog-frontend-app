import { useParams } from "react-router-dom";
import { getPost } from "../../data";
function Post() {
  const params = useParams();
  const post = getPost(parseInt(params.postId, 10));
  return (
    <div style={{ padding: "1rem" }}>
      <h1> {post.title} </h1>
      <small>Date: {post.date}</small>
      {" | "}
      <small>Like: {post.like}</small>
      <p>{post.descriptions}</p>
    </div>
  );
}

export default Post;
