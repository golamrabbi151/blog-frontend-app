import { NavLink, Outlet } from "react-router-dom";
function Posts() {
  return (
    <div style={{ display: "flex" }}>
      <nav>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "green" : "black",
            };
          }}
          to={"/posts/10"}
          key={"10"}
        >
          {"Hello world 10"}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "green" : "black",
            };
          }}
          to={"/posts/11"}
          key={"11"}
        >
          {"Hello world 11"}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "green" : "black",
            };
          }}
          to={"/posts/12"}
          key={"12"}
        >
          {"Hello world 12"}
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Posts;
