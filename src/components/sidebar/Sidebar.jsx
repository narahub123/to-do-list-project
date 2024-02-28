import React from "react";
import {
  BsCalendarMonth,
  BsCalendarWeek,
  BsCalendarDate,
  BsListCheck,
} from "react-icons/bs";
import { LuChevronFirst } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "monthly",
      icon: <BsCalendarMonth />,
    },
    {
      path: "/weekly",
      name: "weekly",
      icon: <BsCalendarWeek />,
    },
    {
      path: "/daily",
      name: "daily",
      icon: <BsCalendarDate />,
    },
    {
      path: "/settings",
      name: "settings",
      icon: <LuSettings />,
    },
  ];
  return (
    <div className="container flex">
      <aside className="sidebar h-screen">
        <menu className="menu h-full flex flex-col  bg-white border-r shadow-sm ">
          <section className="top-section p-4 pb-2 flex justify-between items-center">
            <div className="head flex align-center items-center ">
              <BsListCheck className="logo mr-2" />
              <h1 className="title text-sm h-5 w-44 ml-1">To Do list</h1>
            </div>
            <button className="toggle p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
              <LuChevronFirst className="toggle-button" size={20} />
            </button>
          </section>

          <nav className="menus h-full">
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="item-link">
                <SidebarItem icon={item.icon} name={item.name} />
              </NavLink>
            ))}
          </nav>

          <section className="bottom-section border-t flex p-3">
            <FaRegUser className="user-icon w-10 h-10" />
            <div className="user-container flex justify-between items-center w-48 ml-3">
              <div className="user-info leading-4">
                <h4 className="username font-semibold">John Doe</h4>
                <span className="useremail text-xs text-gray-600">
                  johndoe@gmail.com
                </span>
              </div>
              <FiMoreVertical size={20} />
            </div>
          </section>
        </menu>
      </aside>
      <main className="dashboard">{children}</main>
    </div>
  );
};

export default Sidebar;
