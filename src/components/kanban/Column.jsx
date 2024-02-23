import React, { useState } from "react";
import { getWeekNumber } from "../../util/dateCalculation";
import Card from "./Card";
import DropIndicator from "./DropIndicator";
import TrashBin from "./TrashBin";
import AddCard from "./AddCard";

const Column = ({ title, headingColor, column, cards, setCards, min, max }) => {
  const [active, setActive] = useState(false);

  const filteredCards = cards.filter((c) => {
    // console.log(getWeekNumber(c.from) === column);
    return getWeekNumber(c.from) === column;
  });

  console.log(filteredCards);
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          console.log(c);
          return <Card key={c._id} {...c} />;
        })}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards} min={min} max={max} />
        {filteredCards.length > 0 && <TrashBin setCards={setCards} />}
      </div>
    </div>
  );
};

export default Column;
