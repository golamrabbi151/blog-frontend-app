import { useParams } from "react-router-dom";
function Post() {
  const params = useParams();
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Post </h1>
      <h1>{params.postId}</h1>
    </div>
  );
}

export default Post;
