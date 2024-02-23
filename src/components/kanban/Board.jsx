import React, { useState } from "react";
import Column from "./Column";
import { boardHeaders, getWeekNumber } from "../../util/dateCalculation";

const Board = (ymwf) => {
  const [cards, setCards] = useState([]); // hold actual data for each of individual cards

  const today = new Date();
  const weekNumber = getWeekNumber(today);
  // console.log(weekNumber);

  // console.log(boardHeaders);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      {boardHeaders.map((boardHeader, index) => {
        return (
          <Column
            key={boardHeader.monday}
            title={`W${boardHeader.weekNumber} ( ${
              boardHeader.monday
            } - ${boardHeader.sunday.slice(5, 11)} )`}
            column={`week ${index}`}
            headingColor={
              boardHeader.weekNumber === weekNumber
                ? "text-yellow-500"
                : "text-white-500"
            } // highlight current week
            cards={cards}
            setCards={setCards}
          />
        );
      })}
    </div>
  );
};

export default Board;