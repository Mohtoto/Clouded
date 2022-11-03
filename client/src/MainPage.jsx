import React from "react";
import Sidebar from "./Sidebar";

const MainPage = () => {
  return (
    <>
      <div className="absolute top-1/3 left-1/2  -translate-y-2/4  -translate-x-2/4">
        <div className="container flex justify-center mx-auto">
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
                      <th className="px-6 py-2 text-xs text-gray-500 ">
                        
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">Action</th>
                      <th className="px-6 py-2 text-xs text-gray-500"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    <tr className="whitespace-nowrap">
                      <td className="px-6 py-4 text-sm text-gray-500">1</td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">Jon doe</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">
                          moh@totoncy@gmail.com
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        2021-1-12
                      </td>
                      <td className="px-2 py-4">
                        <a
                          href="#"
                          className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
                        >
                          Edit
                        </a>
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
                
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sidebar />
    </>
  );
};

export default MainPage;
