import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getPosts } from "../../static/data/data";
import PostList from "../../components/post/postList";
import PopularPost from "../../components/post/popularPost";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const data = getPosts();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        <div className="col-md-9">
          {loading ? (
            <div style={{ marginLeft: "50%", marginTop: "50%" }}>
              <Spinner animation="border" />
            </div>
          ) : (
            <div>{postData}</div>
          )}
        </div>
        {/* popular post */}
        <div className="col-md-3">
          <PopularPost />
        </div>
      </div>
    </div>
  );
}

export default Home;
