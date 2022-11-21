import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import data from "../../database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
import { LockClosedIcon } from '@heroicons/react/20/solid'
import tailwind from '../assets/tailwind.png'
import BurgerMenu from "./BurgerMenu";


const LandingPage = () => {
  const navigate = useNavigate();
  const [Cursor, SetCursor] = useState("default");
  const [User, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { admin } = data.find((user) => user);

  const { staff } = data.find((user) => user);

  // const [ text , count ]= useTypewriter({

  //   words:[ 'Details']
  // })

  {
    /* <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/> */
  }

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
    } else if (User === staff.email && pass === staff.password) {
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
    } else {
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

        {/* <BurgerMenu /> */}

     
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ marginTop:'150px'}}>
        <div className="w-full max-w-md space-y-8">
          <div>
            <div className="flex items-center justify-center">
            <div className="mt-2 text-sm text-gray-600">
          
              <h2 className="font-medium text-[#3C7699] hover:text-[#0d7bbe]">
                Made with tailwind
              </h2>
            </div>

              <img
                className=" h-14 w-auto"
                src={tailwind}
                alt="Your Company"
              />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="/" className="font-medium text-[#3C7699] hover:text-[#0d7bbe]">
                Register here for an account
              </a>
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) =>  setUser(e.target.value)}
                  value={User}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) =>  setPass(e.target.value)}
                  value={pass}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#3C7699] focus:ring-indigo-500"
                 
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#3C7699] hover:text-[#194663]">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={userVlidation}
              
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#3C7699] py-2 px-4 text-sm font-medium text-white hover:bg-[#0678be] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white group-hover:text-[#030303] " aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default LandingPage;
