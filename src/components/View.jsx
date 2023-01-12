import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "./Nav";
import avatar from "../assets/avat.png";

const View = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get("/api/get/" + id).then((resp) => setUser({ ...resp.data[0] }));
  }, [id]);

  console.log(user);
  return (
    <div className="flex min-h-screen w-full bg-[url('/src/assets/vec.svg')] bg-contain bg-left bg-no-repeat">
      <div className="row">
        <Nav />
        <div className="flex min-h-screen flex-col items-center justify-center p-3 ">
          <div className="w-full max-w-md rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8 ">
            <div className="mb-4 flex items-center justify-between">
              <h5 className="text-xl font-bold uppercase leading-none text-gray-900 dark:text-white "></h5>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 invert  "
                        src={avatar}
                        alt="Neil image"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="transform truncate text-sm font-medium uppercase text-gray-900 dark:text-white ">
                        {user.name}
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400 ">
                        {user.email}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {user.contact}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
