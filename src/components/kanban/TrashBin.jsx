import React, { useState } from "react";
import { FaFire } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { deleteWeeklyToDo } from "../../util/HandleAPI";

const TrashBin = ({ setCards, setPlanState }) => {
  const [active, setActive] = useState(false);

  const handleDelete = (cardId) => {
    deleteWeeklyToDo(cardId, setPlanState);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    console.log(cardId);

    setCards((pv) =>
      pv.filter((c) => {
        console.log(cardId);
        handleDelete(cardId);
        return c._id !== cardId;
      })
    );

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-0.5 grid p-3 w-56 shrink-0 place-content-center 
      rounded border text=3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

export default TrashBin;
