import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getPost } from "../../static/data/data";
import PopularPost from "../../components/post/popularPost";
import SinglePost from "../../components/post/singlePost";
function Post() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const postData = getPost(parseInt(params.postId, 10));
    if (postData) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setPost(postData);
    }
  }, [params]);
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
            <SinglePost key={new Date()} value={post} />
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

export default Post;
