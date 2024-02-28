import React from "react";

const SidebarItem = ({ icon, name }) => {
  return (
    <li className="item relative flex items-center justify-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer ">
      {icon}
      <span className="name w-44 ml-3">{name}</span>
    </li>
  );
};

export default SidebarItem;