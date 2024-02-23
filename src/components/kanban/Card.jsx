import React from "react";
import { getWeekNumber } from "../../util/dateCalculation";
import DropIndicator from "./DropIndicator";
import { FiTrash, FiEdit } from "react-icons/fi";

const Card = ({ subject, _id, from, to, description }) => {
  const column = getWeekNumber(from);
  return (
    <>
      <DropIndicator beforeId={_id} column={column} />
      <div
        draggable="true"
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing hover:border-neutral-500"
      >
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-100">{subject}</p>
          <p className="flex gap-1 text-neutral-400">
            <FiEdit className="hover:text-neutral-200" />
            <FiTrash className="hover:text-neutral-200" />
          </p>
        </div>

        <p className="border-b-2 border-neutral-700 pl-0.5">
          <span className="text-xs text-neutral-400">{from}</span>
          <span className="text-xs text-neutral-400">&nbsp;~&nbsp;</span>
          <span className="text-xs text-neutral-400">{to}</span>
        </p>
        <p className="text-sm text-neutral-200 mt-2 ">+ {description}</p>
      </div>
    </>
  );
};

export default Card;
