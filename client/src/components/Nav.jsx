import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/avatar.svg";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from '@mui/icons-material/Close';
const Nav = () => {
 
const [menu, setMenu] = useState(false);

  const openMenu =() => {

    document.body.classList +=' menu--open'
}


const closeMenu =() =>{

    document.body.classList.remove('menu--open')
}



  return (
    <nav
      className=" group w-full max-w-7xl m-auto h-20 p-8 flex items-center justify-between relative " >
      <div className="logocont flex items-center">
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
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className="lists flex gap-4 font-bold text-[#3C7699] text-lg"
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/MainPage">View</Link>
        </li>
        <li>
          <Link to="/Aboutus">About us</Link>
        </li>

        <button className='btn__menu' onClick={openMenu} >

          <ReorderIcon />

        </button>
      </motion.ul>

      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
         <CloseIcon />
        
         </button>

        <ul className="menu__links">
          <li className="menu__list">
            <Link to="/" className="menu__link">
              Home
            </Link>
          </li>

          <li className="menu__list">
            <Link to="/MainPage" className="menu__link">
              View
            </Link>
          </li>

          <li className="menu__list">
            <Link to="/Aboutus" className="menu__link">
              About us
            </Link>
          </li>
        </ul>
      </div>
     
    </nav>
  );
};

export default Nav;
