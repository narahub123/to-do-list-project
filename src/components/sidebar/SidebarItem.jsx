import React, { useContext } from "react";
import { SidebarContext } from "./Sidebar";

const SidebarItem = ({ icon, name, active, alert }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`item relative flex items-center justify-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-200 text-indigo-600"
            : "hover:bg-indigo-50 text-gray-600"
        }
        `}
    >
      {icon}
      <span
        className={`name overflow-hidden transition-all ${
          expanded ? "w-40 ml-3" : "w-0"
        }`}
      >
        {name}
      </span>
      {alert && (
        <div
          className={`absolute right-7 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-1 right-3.5"
          }`}
        />
      )}
    </li>
  );
};

export default SidebarItem;
