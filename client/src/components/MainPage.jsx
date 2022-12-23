import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";


const MainPage = () => {
  const [dataa, setData] = useState([]);
  const [menu, setMenu] = useState(false);

  const datafetch = async () => {
    const { data } = await axios.get("http://localhost:8000/api/get");

    setData(data);
  };

  useEffect(() => {
    datafetch();
  }, []);

  const HandleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the contact ?")) {
      axios.delete("http://localhost:8000/api/remove/" + id);
      toast.success("Contact deleted succesfully");
      setTimeout(() => datafetch(), 500);
    }
  };

  console.log(dataa);
  
  return (
    <div className="flex w-full min-h-screen bg-[url('/src/assets/vec4.svg')] bg-no-repeat bg-contain bg-right">
      <Sidebar />

    
     
      <div className='row'>
      <Nav />
   
        <div className=" group-bubbles container mx-auto mt-12">
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 mx-4">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium text-gray-500 truncate">
                Clients
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">3</div>
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
      
     
    
     
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Name
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Email
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Contact
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Password
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" md:table-row-group table1">
            {dataa.map((item, index) => (
              <tr
                className="bg-gray-300 border border-grey-500 md:border-none  md:table-row p-5 flex flex-col"
                key={index}
              >
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block mr-3 md:hidden font-bold">
                    Name
                  </span>
                  {item.name}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block md:hidden font-bold mr-3">
                    Email
                  </span>
                  {item.email}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block mr-3 md:hidden font-bold">
                    Contact
                  </span>
                  {item.contact}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block mr-3 md:hidden font-bold">
                    Password
                  </span>
                  {item.contact}
                </td>

                <td className="p-2 md:border md:border-grey-500 flex gap-1  md:table-cell">
                  <span className="inline-block mr-3 md:hidden font-bold ">
                    Actions
                  </span>
                  <Link to={`/update/${item.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                    onClick={() => HandleDelete(item.id)}
                  >
                    Delete
                  </button>

                  <Link to={"/view/" + item.id}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    </div>
  );
};

export default MainPage;
