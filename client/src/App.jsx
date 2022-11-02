import LandingPage from "./LandingPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

function App() {
  return (
    <Router>
    <div className=" min-h-screen">
      <Nav />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/MainPage" element={<MainPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
