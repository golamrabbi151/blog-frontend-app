import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/index";
import NavBar from "./components/header/navBar";
import Post from "./pages/post/post";
function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:postId" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
