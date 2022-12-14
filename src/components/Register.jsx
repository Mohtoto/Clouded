import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Nav from "./Nav";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const PostData = () => {
    

    if(!name || !email || !password || !contact ){

      toast.error('please enter in the fields provided')
    }


    else { 

      axios
        .post("/api/post", {
          name : name,
          email: email,
          contact : contact,
          password: password,
        })
        .catch((err)=> toast.error(err.response.data))
          toast.success('Contact added Successfully')

    }
    
  };

  console.log(email);
  console.log(password);

  return (
    <div className="w-full min-h-screen">

      <div className="row">
        <Nav />
        <div className="absolute top-8 flex flex-col items-center">
          <h1 className="font-bold text-3xl text-[#3C7699] text-center mt-5">
             Register your account here
          </h1>

          <div className="flex flex-col items-center mt-11 w-full gap-2 p-6">
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <label htmlFor="email" className="font-bold text-3xl">
                Full Name
              </label>
              <input
                name="Full Name"
                type="text"
                className="w-full max-w-2xl h-14 rounded-sm outline-none p-5"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <label htmlFor="email" className="font-bold text-3xl">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="w-full max-w-2xl h-14 rounded-sm outline-none p-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-5">
              <label htmlFor="password" className="font-bold text-3xl">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="w-full max-w-2xl h-14 rounded-sm outline-none p-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <label htmlFor="email" className="font-bold text-3xl">
                Contact
              </label>
              <input
                name="Contact"
                type="Contact"
                className="w-full max-w-2xl h-14 rounded-sm outline-none p-5"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-[#40453e] text-white mt-6 max-w-2xl h-12 font-bold text-2xl"
              onClick={PostData}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
