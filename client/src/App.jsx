import LandingPage from "./LandingPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import Register from "./Register";

function App() {
  return (
    <Router>
    <div className=" min-h-screen">
     
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route  path="/MainPage" element={<MainPage />} />
        <Route  path="/Register" element={<Register />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
