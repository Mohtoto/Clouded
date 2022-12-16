import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/avatar.svg";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
import { Divide as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <Hamburger />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            // toggle class based on isNavOpen state
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            ></div>
            
              <motion.ul
                className={'MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'}
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.5 }}
                // className="lists flex gap-4 font-bold text-[#3C7699] text-lg"
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
              </motion.ul>
         
          </div>
        </section>
        {/* 
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul> */}

        <div className="flex items-center justify-between">
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
          </motion.ul>
        </div>
      </nav>
    </div>

    //const [menu, setMenu] = useState(false);

    //   return (

    //     <nav className=" group w-full max-w-7xl m-auto h-20 p-8 flex items-center justify-between relative " >

    //       <div className="logocont flex items-center">
    //         <motion.img
    //           initial={{
    //             y: -100,
    //             opacity: 0,
    //           }}
    //           animate={{
    //             y: 0,
    //             opacity: 1,
    //           }}
    //           transition={{ duration: 0.5 }}
    //           className="w-14 h-14"
    //           src={logo}
    //           alt=""
    //         />
    //         <motion.h2
    //           initial={{
    //             x: -50,

    //             opacity: 0,
    //           }}
    //           animate={{
    //             x: 0,
    //             opacity: 1,
    //           }}
    //           className="font-bold text-[#3C7699]"
    //         >
    //           Clouded
    //         </motion.h2>
    //       </div>

    //       <motion.ul
    //         initial={{
    //           y: -100,
    //           opacity: 0,
    //         }}
    //         animate={{
    //           y: 0,
    //           opacity: 1,
    //         }}
    //         transition={{ duration: 0.5 }}
    //         className="lists flex gap-4 font-bold text-[#3C7699] text-lg"
    //       >

    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/MainPage">View</Link>
    //         </li>
    //         <li>
    //           <Link to="/Aboutus">About us</Link>
    //         </li>

    //       </motion.ul>

    //      {/* <button className='btn__menu'  >

    //           <ReorderIcon />

    //         </button> */}

    //     </nav>
  );
};

export default Nav;
