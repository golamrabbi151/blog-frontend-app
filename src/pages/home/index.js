import React, { useEffect, useState } from "react";
import { getPosts } from "../../static/data/data";
import PostList from "../../components/post/postList";
import PopularPost from "../../components/post/popularPost";

function Home() {
  const [posts, setPosts] = useState([]);
  console.log({ posts });
  useEffect(() => {
    const data = getPosts();
    setPosts(data);
  }, []);
  const postData = posts.map((data) => (
    <div key={data.id.toString()}>
      <PostList value={data} />
    </div>
  ));
  return (
    <div className="container">
      <div className="row">
        {/* post list */}
        <div className="col-md-9">{postData}</div>
        {/* popular post */}
        <div className="col-md-3">
          <PopularPost />
        </div>
      </div>
    </div>
  );
}

export default Home;
