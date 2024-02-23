import React from "react";
import Board from "./Board";

const Kanban = ({ plans }) => {
  console.log(plans);
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board plans={plans} />
    </div>
  );
};

export default Kanban;
