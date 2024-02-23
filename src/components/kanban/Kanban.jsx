import React from "react";
import Board from "./Board";

const Kanban = (ymwf) => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board ymwf={ymwf} />
    </div>
  );
};

export default Kanban;
