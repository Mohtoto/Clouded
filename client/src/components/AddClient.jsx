import React, { useState } from "react";
import Nav from "../components/Nav";
import icons from "../assets/icons.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";



const initialState = { 

  name : '',
  email : '',
  contact:'',


}
const AddClient = () => {

  const [state, setstate] = useState(initialState);


  console.log(state);
  return (
    <>
      <Nav />
      {/* absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 */}
      <div className="row">
        <form className="absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
          {/* ======================================================*/}

          <label
            for="name"
            className="max-w-lg	 block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700"> Name </span>

            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={name}
              onChange={handleInputChange}
            />
          </label>

          {/* ======================================================*/}

          <label
            for="email"
            className="max-w-lg	 block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700"> Email </span>

            <input
              type="email"
              id="email"
              placeholder="anthony@rhcp.com"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={email}
              onChange={handleInputChange}
            />
          </label>

          {/* ======================================================*/}
          <label
            for="contact"
            className="max-w-lg	 block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700"> Contact </span>

            <input
              type="text"
              id="contact"
              placeholder="04270388779"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={contact}
              onChange={handleInputChange}
            />
          </label>
          {/* ======================================================*/}
        </form>
      </div>
    </>
  );
};

export default AddClient;
