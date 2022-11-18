import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/avatar.svg";
const Nav = () => {
  return (
    <nav className="group w-full max-w-7xl m-auto h-20 p-8 flex items-center justify-between relative">



      <div className="flex items-center">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
       
          className="w-14 h-14"
          src={logo}
          alt=""
        />
        <motion.h2
          initial={{
            x: -50,
           
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
         
          }}
       
          
          className="font-bold text-[#3C7699]"
        >
          Clouded
        </motion.h2>
        
      </div>

      <motion.ul 
          initial={{
            y:-100,
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{duration:0.5}}
        className="flex gap-4 font-bold text-[#3C7699] text-lg">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/MainPage'>View</Link></li>
        <li><Link to='/Aboutus'>About us</Link></li>
        
      </motion.ul>


    </nav>
  );
};

export default Nav;
