import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/avatar.svg";
import { motion } from "framer-motion";
import SidebarLists from "./SidebarLists";




const MainPage = () => {
  const [dataa, setData] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

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

      <div className="row">
        <nav className="p-4">
          {/*    MOBILE-MENU    */}

          <section className=" flex lg:hidden ">
            <div
              className="absolute top-0 right-0 px-3 py-8 text-white"
              onClick={() => setIsNavOpen(true)}
            >
              <ReorderIcon />
            </div>

            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
            >
              {" "}
              <div
                className="absolute top-0 right-0 px-3 py-7"
                onClick={() => setIsNavOpen(false)}
              >
                <CloseIcon />
              </div>
              <ul
                className={
                  "MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]"
                }
              >
                {/* <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/MainPage">View Clients</Link>
                </li>
               
                <li>
                  <Link to="/addClient">Add new Client</Link>
                </li> */}

                <SidebarLists />
              </ul>
            </motion.div>
          </section>

          {/*     DESKTOP NAVBAR   */}

          <div className="flex items-center justify-between">
            <div className="logocont flex items-center">
              <motion.img
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14"
                src={logo}
                alt=""
              />
              <motion.h2
                initial={{
                  x: -50,

                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                className="font-bold text-[#3C7699]"
              >
                Clouded
              </motion.h2>
            </div>

            <motion.ul
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.5 }}
              className="lists flex gap-4 font-bold text-[#3C7699] text-lg"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/MainPage">View</Link>
              </li>
              <li>
                <Link to="/Aboutus">About us</Link>
              </li>
            </motion.ul>
          </div>
        </nav>
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
            {dataa.slice(0, 3).map((item, index) => (
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
