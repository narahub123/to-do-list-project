import React from "react";
import { getWeekNumber } from "../../util/dateCalculation";
import DropIndicator from "./DropIndicator";

const Card = ({ subject, _id, from }) => {
  const column = getWeekNumber(from);
  return (
    <>
      <DropIndicator beforeId={_id} column={column} />
      <div
        draggable="true"
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{subject}</p>
      </div>
    </>
  );
};

export default Card;
