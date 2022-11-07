import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [dataa, setData] = useState([]);

  const datafetch = async () => {
    const { data } = await axios.get("http://localhost:8000/api/users");

    setData(data);
  };

  useEffect(() => {
    datafetch();
  }, []);

  console.log(dataa);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="row">
   
   
      <div className="container mx-auto mt-12">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 mx-4">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Clients
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            12,00
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow ">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            $ 450k
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            20k
                        </div>
                    </div>
                </div>
            </div>
     
       
    
        <div className="container flex justify-center mx-auto  mt-80">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="border-b border-gray-200 shadow">
                <table className="divide-y divide-gray-300 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-2 text-xs text-gray-500">No</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Email</th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Contact
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500 "></th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Action
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    {dataa.map((item, index) => (
                      <tr className="whitespace-nowrap" key={index}>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {item.name}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {item.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {item.contact}
                        </td>
                        <td className="px-2 py-4">
                          <Link
                            to={`/update/${item.id}`}
                            className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
                          >
                            Edit
                          </Link>
                        </td>
                        <td className="px-2 py-4">
                          <a
                            href="#"
                            className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full"
                          >
                            Delete
                          </a>
                        </td>
                        <td className="px-2 py-4">
                          <a
                            href="#"
                            className="px-4 py-1 text-sm  text-black bg-red-200 rounded-full"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
  );
};

export default MainPage;
