import React from "react";
import Nav from "../components/Nav";

const AddClient = () => {
  return (
    <>
      <Nav />
      <div className="w-full max-w-7xl m-auto flex items-center justify-center min-h-screen">
        <div
          className="bg-white w-full max-w-screen-sm rounded-2xl shadow-lg "
          style={{ height: "40rem" }}
        >
          <div className="w-full h-full flex flex-col items-center mt-24 gap-14">
            <div className="w-full max-w-xs">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-lg sm:text-sm"
              />
            </div>
            <div className="w-full max-w-xs">
              <label
                htmlFor="email"
                className=""
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
              
                className="mt-1 block w-full rounded-md border-black shadow-lg sm:text-sm"
              />
            </div>
            <div className="w-full max-w-xs">
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Contact
              </label>
              <input
                type="text"
                name="number"
                id="number"
              
                className="mt-1 block w-full shadow-lg sm:text-sm outline-gray-600 border-gray-600"
              />
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default AddClient;
