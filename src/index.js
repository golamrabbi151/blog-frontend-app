import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Category from "./pages/category/index";
import Posts from "./pages/post/posts";
import Post from "./pages/post/post";
import reportWebVitals from "./reportWebVitals";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="category" element={<Category />} />
        <Route path="posts" element={<Posts />}>
          <Route
            index
            element={
              <div style={{ padding: "1rem" }}>
                <p>Select an Post</p>
              </div>
            }
          />
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route
          path="*"
          element={
            <div style={{ padding: "1rem" }}>
              <h1>Oops! there is nothing here</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
