import React from "react";

const SidebarItem = ({ icon, name }) => {
  return (
    <li className="item">
      {icon}
      <span className="name">{name}</span>
    </li>
  );
};

export default SidebarItem;
