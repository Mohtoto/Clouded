import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "./Nav";
import avatar from '../assets/avat.png'

const View = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/get/" + id)
      .then((resp) => setUser({ ...resp.data[0] }));
  }, [id]);

  console.log(user);
  return (
    <>
    <Nav />
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white uppercase ">
            client {user.id}
          </h5>
        
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 invert  "
                    src={avatar}
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white transform uppercase ">
                    {user.name}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400 ">
                    {user.email}
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {user.contact}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default View;
