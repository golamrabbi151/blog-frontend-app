import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getPosts } from "../../data";
function Posts() {
  const posts = getPosts();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {posts
          .filter((post) => {
            let filter = searchParams.get("filter");
            if (!filter) {
              return true;
            } else {
              let title = post.title.toLowerCase();
              return title.match(filter.toLowerCase());
            }
          })
          .map((post) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "green" : "black",
                };
              }}
              to={`/posts/${post.id}`}
              key={post.id}
            >
              {post.title}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Posts;
