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
    <div className="container">
      <aside className="sidebar">
        <menu className="menu">
          <section className="top-section">
            <div className="head">
              <BsListCheck className="logo" />
              <h1 className="title">To Do list</h1>
            </div>
            <button className="toggle">
              <LuChevronFirst className="toggle-button" />
            </button>
          </section>

          <nav className="menus">
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="item-link">
                <div className="icon">{item.icon}</div>
                <div className="link-text">{item.name}</div>
              </NavLink>
            ))}
          </nav>

          <section className="bottom-section">
            <FaRegUser className="user-icon" />
            <div className="user-container">
              <div className="user-info">
                <h4 className="username">John Doe</h4>
                <span className="useremail">johndoe@gmail.com</span>
                <FiMoreVertical />
              </div>
            </div>
          </section>
        </menu>
      </aside>
      <main className="dashboard">{children}</main>
    </div>
  );
};

export default Sidebar;
