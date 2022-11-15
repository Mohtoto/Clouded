import React, { useState } from "react";
import Nav from "../components/Nav";
import icons from "../assets/icons.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddClient = () => {
  const [state, setstate] = useState(initialState);
  const navigate = useNavigate()

  const { name, email, contact } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setstate({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !email || !contact){

      toast.error('please Provide value into each input field')

    }
    else {

      axios.post('http://localhost:8000/api/post' , {
        name , email , contact
      }).then(()=> {

        setstate({ name : '' , email: '' , contact : ''})
      }).catch((err)=> toast.error(err.response.data))

      setTimeout(() => navigate('/MainPage'), 500);

    }

  };

  return (
    <>
      <Nav />
    

      <form
        className="absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 "
        onSubmit={handleSubmit}
      >
        {/* ======================================================*/}

        <label htmlFor="name">Name</label>
          

          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={name}
            onChange={handleInputChange}
          />
      

        {/* ======================================================*/}

        <label htmlFor="email">email</label>
        

          <input
            type="email"
            name="email"
            placeholder="anthony@rhcp.com"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={email}
            onChange={handleInputChange}
          />

        {/* ======================================================*/}
     
        <label htmlFor="contact">Contact</label>

          <input
            type="text"
           
           name="contact"
            placeholder="04270388779"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={contact}
            onChange={handleInputChange}
          />
    
        {/* ======================================================*/}

        <input
          type="submit"
      
          value="Save"
          className=" w-full bg-[#40453e] text-white py-4 px-5  mx-2 border-none rounded-md cursor-none"
        />

        <Link to={'/MainPage'}>
          <input
            type="button"
            value={"Go back"}
            className=" w-full bg-[#40453e] text-white py-4 px-5  mx-2 border-none rounded-md cursor-none"
          />
        </Link>
      </form>
    </>
  );
};

export default AddClient;
