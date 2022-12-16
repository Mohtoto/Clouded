import LandingPage from "./components/LandingPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import Register from "./components/Register";
import AddClient from "./components/AddClient";
import View from "./components/View";
import Update from "./components/Update";




function App() {



  return (
    <Router>

    <div className=" min-h-screen">
    

      <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route  path="/MainPage" element={<MainPage />} />
        <Route  path="/addClient" element={<AddClient />} />
        <Route  path="/Register" element={<Register />} />
        <Route  path="/View/:id" element={<View />} />
        <Route  path="/Update/:id" element={<AddClient />} />
     
      </Routes>
    </div>
    </Router>
  );
}

export default App;


