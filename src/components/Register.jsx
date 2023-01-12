import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import logo from "../assets/avatar.svg";



const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const PostData = () => {
    if (!name || !email || !password || !contact) {
      toast.error("please enter in the fields provided");
    } else {
      axios
        .post("/api/post", {
          name: name,
          email: email,
          contact: contact,
          password: password,
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("Contact added Successfully");
    }
  };

  console.log(email);
  console.log(password);

  return (
    <div className="h-screen min-h-screen w-full bg-[url('/src/assets/Vec.svg')] bg-contain bg-left bg-no-repeat md:p-4">
      <div className="row">
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
        <div className="absolute top-8 flex flex-col items-center px-2 md:absolute md:top-1/4 md:left-2/4 md:-translate-x-1/2">
          <h1 className="mt-5 text-center text-3xl font-bold text-[#000000] md:text-7xl md:text-[#3C7699]">
            Register your account here
          </h1>

          <div className="mt-11 flex w-full flex-col items-center gap-2">
            <div className="flex w-full flex-col items-center justify-center gap-5">
              <label htmlFor="email" className="text-3xl font-bold">
                Full Name
              </label>
              <input
                name="Full Name"
                type="text"
                className="h-14 w-full max-w-2xl rounded-sm p-5 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5">
              <label htmlFor="email" className="text-3xl font-bold">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="h-14 w-full max-w-2xl rounded-sm p-5 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-5">
              <label htmlFor="password" className="text-3xl font-bold">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="h-14 w-full max-w-2xl rounded-sm p-5 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5">
              <label htmlFor="email" className="text-3xl font-bold">
                Contact
              </label>
              <input
                name="Contact"
                type="Contact"
                className="h-14 w-full max-w-2xl rounded-sm p-5 outline-none"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            
              <button
                className="mt-6 h-12 w-full max-w-2xl bg-[#40453e] text-2xl font-bold text-white"
                onClick={PostData}
              >
                Submit
              </button>

                <button className="mt-6 h-12 w-full max-w-2xl bg-[#40453e] text-2xl font-bold text-white">
              <Link to={"/"}>
                  Home
              </Link>
                </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
