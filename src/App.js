import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/index";
import NavBar from "./components/header/navBar";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
