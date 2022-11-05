import React, { useEffect, useState } from "react";
// import logo from "./assets/avatar.svg";
// import avat from "./assets/avat.png";
// import key from "./assets/key.png";
import { motion } from "framer-motion";
// import mag from "./assets/mag.png";
import { Link, useNavigate } from "react-router-dom";
import data from "../../database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Alert from "../Alert";
import Nav from "./Nav";
import axios from "axios";

const LandingPage = () => {
  const navigate = useNavigate();
  const [Cursor, SetCursor] = useState("default");
  const [User, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { admin } = data.find((user) => user);

  const { staff } = data.find((user) => user);




  // console.log(admin);



  //   const datafetch = async ()=>{

  //   const {data} = await axios.get('http://localhost:8000/api/users')

  //     setLoading(data)
  // }

  // useEffect(() => {
  //   datafetch()
  // }, []);

  // console.log(Loading);

  

  const userVlidation = () => {
    if (User === admin.email && pass === admin.password) {
      toast.success("Success login, you are logged in as an Admin", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => navigate("/MainPage"), 2000);
    } else if(User === staff.email && pass === staff.password) {
      toast.success("Success login, you are logged in as Staff", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => navigate("/MainPage"), 2000);
    }

    else {

      toast.error("Wrong information, please use the provided details", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };



  return (
    <section>
      <div className=" w-full max-w-6xl m-auto">
        <Nav />

        <div className="main__content">
          <motion.h1
            initial={{
              opacity: 0,
              y: -500,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-black font-bold text-8xl max-w-2xl text-left"
          >
            <span className="text-[#3C7699] font-bold ">Welcome to</span>
            <span className="text-7xl"> Clouded.</span>
          </motion.h1>

          <motion.form
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="input__holder"
            // onSubmit={handleSubmit}
          >
            {/* <img src={avat} className="h-12 w-12 object-contain" alt="" /> */}
            <input
              value={User}
              onChange={(e) => setUser(e.target.value)}
              placeholder="E-mail"
              className="input"
              required
              type="email"
            />

            {/* <img src={key} className="h-14 w-12 object-contain" alt="" /> */}
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
              required
              className="input"
              type="password"
            />
          </motion.form>
          <motion.div
            initial={{
              opacity: 0,
              y: 500,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-left justify-center "
          >
            <h2>
              <a
                href="#"
                className="font-bold underline text-left text-2xl mb-5"
              >
                Forgot your password?
              </a>
            </h2>
            <button
              onClick={userVlidation}
              className=" bg-[#3C7699] cursor-pointer text-white font-bold w-80 h-12 mt-5 mb-5"
            >
              Login
            </button>

            <h2>
              <a href="/Register" className="font-bold text-left text-2xl mb-5">
                Don't have an account?{" "}
                <span className="underline text-[#3C7699] cursor-pointer">
                  Register
                </span>
              </a>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* <div className="w-20 h-20 bg-black"></div> */}
    </section>
  );
};

export default LandingPage;
