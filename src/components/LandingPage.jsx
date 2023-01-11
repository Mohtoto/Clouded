import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LockClosedIcon } from '@heroicons/react/20/solid'
import tailwind from '../assets/tailwind.png'
import axios from "axios";
import logo from "../assets/avatar.svg";



const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [client, setClient] = useState([]);

  const [database, setDatabase] = useState([]);
  const [menu, setMenu] = useState('');

  // const dataGet = async ()=>{


  //  const {data} = await axios.get("/api/get")
 
  //  setDatabase(data)
  //  dataGet()
  // }
  

  useEffect(() => {

    const dataGet= async ()=>{
      const {data} = await axios.get("/api/get")
 
      setDatabase(data)
      
    }

    dataGet()
  }, []);

  // console.log(database);



  console.log(database);
  console.log(database.email);
  



 

  const fetchdata = ()=>{

    // axios.post('/post', { email : email, password: password})

    // .then((resp)=>{

    //   setClient(resp.data[0])
    // })

    const user = database.find((user)=>  user.email === email)
    if(!user){

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


        return
    }

    

  
    // const passdata = database.find((user)=> user.password === password )


    if (user.password === password) {
      toast.success("You have succesfully logged in", {
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
    } else if (email === 'admin@clouded.com' && password === 'admin') {
      toast.success("Success login, you are logged in as admin", {
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
      else if (email === 'staff@clouded.com' && password === 'staff') {
        toast.success("Success login, you are logged in as staff", {
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
 
  }





  return (
    <section  className={"h-screen bg-[url('/src/assets/Vec.svg')] bg-no-repeat bg-contain bg-left"} >
      <div className=" w-full max-w-6xl m-auto overflow-hidden">


       
      <div className="flex items-center justify-between p-5">
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
       

     
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-36 main-page-phone" >
        <div className="w-full max-w-md space-y-8  mt-16">
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
              <a href="/Register" className="font-medium text-[#3C7699] hover:text-[#0d7bbe] ">
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
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) =>  setEmail(e.target.value)}
                  value={email}
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
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) =>  setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>

            <div>
              <button
                onClick={fetchdata}
              
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#02090e] py-2 px-4 text-sm font-medium text-white hover:bg-[#242729] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white " aria-hidden="true" />
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
