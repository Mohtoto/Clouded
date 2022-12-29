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
    const { data } = await axios.get("/api/get");

    setData(data);
  };

  useEffect(() => {
    datafetch();
  }, []);

  const HandleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the contact ?")) {
      axios.delete("/api/remove/" + id);
      toast.success("Contact deleted succesfully");
      setTimeout(() => datafetch(), 500);
    }
  };

  console.log(dataa);

  return (
    <div className="flex min-h-screen w-full bg-[url('/src/assets/vec4.svg')] bg-contain bg-right bg-no-repeat">
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
                  "MENU-LINK-MOBILE-OPEN flex min-h-[250px] flex-col items-center justify-between"
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
                className="h-14 w-14"
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
              className="lists flex gap-4 text-lg font-bold text-[#3C7699]"
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
          <div className="mx-4 mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="w-full rounded-lg bg-white px-4 py-5 shadow">
              <div className="truncate text-sm font-medium text-gray-500">
                Clients
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">3</div>
            </div>
            <div className="w-full rounded-lg bg-white px-4 py-5 shadow ">
              <div className="truncate text-sm font-medium text-gray-500">
                Total Profit
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                $ 450k
              </div>
            </div>
            <div className="w-full rounded-lg bg-white px-4 py-5 shadow">
              <div className="truncate text-sm font-medium text-gray-500">
                Total Orders
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                20k
              </div>
            </div>
          </div>
        </div>

        <table className="block min-w-full border-collapse md:table">
          <thead className="block md:table-header-group">
            <tr className="border-grey-500 absolute -top-full -left-full block border md:relative md:top-auto md:left-auto md:table-row  md:border-none ">
              <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
                Name
              </th>
              <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
                Email
              </th>
              <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
                Contact
              </th>
              <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
                Password
              </th>
              <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" table1 md:table-row-group">
            {dataa.slice(0, 3).map((item, index) => (
              <tr
                className="mb-8 ml-3 mt-3 flex  flex-col rounded border border-stone-800 bg-gray-300 p-5 shadow-2xl md:table-row md:border-none"
                key={index}
              >
                <td className="md:border-grey-500 block p-2 text-left md:table-cell md:border">
                  <span className="mr-3 inline-block font-bold md:hidden">
                    Name
                  </span>
                  {item.name}
                </td>
                <td className="md:border-grey-500 block p-2 text-left md:table-cell md:border">
                  <span className="mr-3 inline-block font-bold md:hidden">
                    Email
                  </span>
                  {item.email}
                </td>
                <td className="md:border-grey-500 block p-2 text-left md:table-cell md:border">
                  <span className="mr-3 inline-block font-bold md:hidden">
                    Contact
                  </span>
                  {item.contact}
                </td>
                <td className="md:border-grey-500 block p-2 text-left md:table-cell md:border">
                  <span className="mr-3 inline-block font-bold md:hidden">
                    Password
                  </span>
                  {item.password}
                </td>

                <td className="md:border-grey-500 flex gap-1 p-2 md:table-cell  md:border">
                  <span className="mr-3 inline-block font-bold md:hidden ">
                    Actions
                  </span>
                  <Link to={`/update/${item.id}`}>
                    <button className="rounded border border-blue-500 bg-blue-500 py-1 px-2 font-bold text-white hover:bg-blue-700">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="rounded border border-red-500 bg-red-500 py-1 px-2 font-bold text-white hover:bg-red-700"
                    onClick={() => HandleDelete(item.id)}
                  >
                    Delete
                  </button>

                  <Link to={"/view/" + item.id}>
                    <button className="rounded border border-blue-500 bg-blue-500 py-1 px-2 font-bold text-white hover:bg-blue-700">
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
