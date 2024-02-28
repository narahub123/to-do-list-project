import React from "react";

const SidebarItem = ({ icon, name, active, alert }) => {
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
      <span className="name w-44 ml-3">{name}</span>
      {alert && (
        <div className={`absolute right-7 w-2 h-2 rounded bg-indigo-400`} />
      )}
    </li>
  );
};

export default SidebarItem;
