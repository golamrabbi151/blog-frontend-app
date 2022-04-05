import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/index";
import NavBar from "./components/header/navBar";
import Post from "./pages/post/post";
import Footer from "./components/footer/footer";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:postId">
            <Post />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
