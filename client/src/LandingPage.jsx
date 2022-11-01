import React, { useEffect, useState } from "react";
import logo from "./assets/avatar.svg";
import avat from "./assets/avat.png";
import key from "./assets/key.png";
import  { motion } from "framer-motion";
import mag from './assets/mag.png'
import { Link } from 'react-router-dom' 


const LandingPage = () => {
  const [ Cursor , SetCursor] = useState('default')
  const [mouse, SetMouse] = useState({
    x: 0,
    y: 0,
  });


  
  
  useEffect(() => {
    
      const mouseMoveFunction = (e) => {
    
        
        SetMouse({
          x: e.clientX - 16,
          y: e.clientY -16,
        });
    
      }
  

    window.addEventListener("mousemove", mouseMoveFunction);

    // return () => {
    //   window.removeEventListener("mousemove", mouseMoveFunction);
    // };
  }, []);

  console.log(mouse)

  const variants = {
    default: {
      x: mouse.x,
      y: mouse.y,
    },

   
  };



  return (
    <section>
      <div className=" w-full max-w-6xl m-auto">


   
      <nav className="flex items-center p-5  w-screen max-w-7xl m-auto space-x-2  absolute top-0  left-1/4">
        <img className=" w-14 h-14 cursor-pointer" src={logo} alt="" />
        <h2 className="font-bold">Clouded</h2>
      </nav>

      <div className="main__content">
        <h1  className="text-black font-bold text-8xl max-w-2xl text-left">
          <span className="text-[#3C7699]">Welcome to</span> Clouded.
        </h1>

        <div className="input__holder">
         
            {/* <img src={avat} className="h-12 w-12 object-contain" alt="" /> */}
            <input placeholder="E-mail" className="input" type="email" />
         

        
            {/* <img src={key} className="h-14 w-12 object-contain" alt="" /> */}
            <input placeholder="Password" className="input" type="password" />
     
        </div>
          <div className="flex flex-col items-left justify-center ">
              <h2><a href="#" className="font-bold underline text-left text-2xl mb-5">Forgot your password?</a></h2>
              <button className=" bg-[#3C7699] cursor-pointer text-white font-bold w-80 h-12 mt-5 mb-5">Login</button>

              <h2><a href="#" className="font-bold text-left text-2xl mb-5">Dont't have an account? <span className="underline text-[#3C7699] cursor-pointer">Register</span></a></h2>

          </div>

      </div>


{/* 
      <motion.div
        variants={variants}
        animate={Cursor}
        className=" h-8 w-8 pointer-events-none"
      ><img  src={mag} alt="" /></motion.div> */}
         </div>
    </section>
  );
};

export default LandingPage;
