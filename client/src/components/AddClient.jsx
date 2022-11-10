import React, { useState } from "react";
import Nav from "../components/Nav";
import icons from '../assets/icons.png'
import { Link } from "react-router-dom";
 
const initialState = { 

  Name: '',
  email: '',
  contact: '',
}



const AddClient = () => {

  const [state, setstate] = useState(initialState);

const { Name , email , contact } = state

const handleSubmit = (e)=> {

    e.preventDefault()

    if(!Name || !email || !contact){

      toast.error('please provide a value')
    }

}

const handleChange = ()=>{

   const { name ,value } = e.target

   setstate({...state , [name] : value})
}


  return (
    <>
      <Nav />
      <div className="w-full max-w-7xl m-auto flex flex-col items-center justify-center min-h-screen">
        <h1 className="font-bold text-6xl mb-8 text-[#111827]">ADD A <span className="text-[#3C7699]">CLIENT</span></h1>
        <div
          className="bg-[#111827] w-full max-w-screen-lg rounded-2xl shadow-lg "
          style={{ height: "40rem" }}
        >
          <form onSubmit={handleSubmit} className="w-full h-full flex flex-col mt-24  max-w-screen-sm gap-10 mx-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  
                </span>
                <input

                  type="text"
                  id="name"
                  className="rounded-none rounded-r-lg outline-none  bg-gray-50  text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john doe"

                  onChange={handleChange}
                  value={Name}
                />
              </div>
            </div>



            <div>
              
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <div className="flex">
                 <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  
                 </span>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50  text-gray-900 text-sm outline-none rounded-r-lg block w-full p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  onChange={handleChange}
                  value={email}
                />
              </div>
            </div>


            <div>
              <label
                htmlFor="contact"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Contact
              </label>
              <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  
                </span>
                <input
                  type="text"
                  id="contact"
                  className="bg-gray-50 outline-none text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="04270345558"
                  onChange={handleChange}
                  value={contact}
                />
              </div>
            </div>
            <Link to={'/MainPage'}>
              <button className="bg-white h-14 w-full max-w-xs rounded-md hover:bg-[#3C7699] font-bold  hover:text-white">Add Client</button>
            </Link>
          </form>

        </div>
      </div>
    </>
  );
};

export default AddClient;
