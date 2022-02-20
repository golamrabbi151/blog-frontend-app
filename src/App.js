import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px blue",
          paddingBottom: "1rem",
        }}
      >
        <Link to={"/category"}>Category</Link> {" | "}
        <Link to={"/posts"}>Posts</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
