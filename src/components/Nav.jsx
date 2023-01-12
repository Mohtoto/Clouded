import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/avatar.svg";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
import { Divide as Hamburger } from "hamburger-react";
import SidebarLists from "./SidebarLists";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <nav className="p-4">
      {/*    MOBILE-MENU    */}

      <section className=" flex lg:hidden ">
        <div
          className="absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(true)}
        >
          <ReorderIcon />
        </div>

        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
        >
          {" "}
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <CloseIcon />
          </div>
          <ul
            className={
              "MENU-LINK-MOBILE-OPEN flex min-h-[250px] flex-col items-center justify-between"
            }
          >
            <SidebarLists />
          </ul>
        </motion.div>
      </section>

      {/*     DESKTOP NAVBAR   */}

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
            className="h-14 w-14"
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
          className="lists flex gap-4 text-lg font-bold text-[#3C7699]"
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
  );
};

export default Nav;
