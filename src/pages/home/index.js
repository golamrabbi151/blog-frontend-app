import React from "react";
import { getPosts } from "../../static/data/data";
import PostList from "../../components/post/postList";

function Home() {
  const posts = getPosts();
  console.log({ posts });
  const postData = posts.map((data) => <PostList value={data} />);
  return (
    <div className="container">
      <div className="row">
        {/* post list */}
        <div className="col-10">{postData}</div>
        {/* popular post */}
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Home;
