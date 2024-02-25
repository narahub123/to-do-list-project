import React, { useState } from "react";
import { getWeekNumber } from "../../util/dateCalculation";
import Card from "./Card";
import DropIndicator from "./DropIndicator";
import TrashBin from "./TrashBin";
import AddCard from "./AddCard";

const Column = ({
  title,
  headingColor,
  column,
  cards,
  setCards,
  min,
  max,
  setPlanState,
}) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card._id); // drag하는 대상에 cardId라는 데이터를 설정함
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();
    // console.log(indicators);
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setActive(false);
    clearHighlights();
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    setActive(false);
    clearHighlights();

    const cardId = e.dataTransfer.getData("cardId"); // 1. 드롭한 객체의 cardId 얻기

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);
    console.log(element);

    const before = element.dataset.before || "-1"; // 2. create data property of before

    // 3. if before doesn't match cardId
    if (before !== cardId) {
      let copy = [...cards]; // 3.1 shallow copy of cards
      console.log("first copy", copy);

      let cardToTransfer = copy.find((c) => c._id === cardId); // 3.2 find a card which id matches cardId

      if (!cardToTransfer) return;

      // console.log(cardToTransfer); // 3.2.1 of cause there is not column
      console.log(column);
      cardToTransfer = { ...cardToTransfer, column }; // 3.3 modify column property to new column

      copy = copy.filter((c) => c._id !== cardId); // 3.4 create a copy of cards array which doesn't contain selected card

      const moveToBack = before === "-1";

      // if before is equal to -1
      if (moveToBack) {
        copy.push(cardToTransfer); // add selected card at the end of card array
        // if before is not equal to -1
      } else {
        const insertAtIndex = copy.findIndex((el) => el._id === before); // find the index of before
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer); // insert card at the index of the before
        console.log("second copy", copy);
      }
      setCards(copy);
    }
  };

  const filteredCards = cards.filter((c) => {
    // console.log(getWeekNumber(c.from) === column);
    return getWeekNumber(c.from) === column;
  });

  // console.log("filteredCards", filteredCards);
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          // console.log(c);
          return (
            <Card
              key={c._id}
              card={c}
              {...c}
              handleDragStart={handleDragStart}
              setPlanState={setPlanState}
            />
          );
        })}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard
          column={column}
          setCards={setCards}
          min={min}
          max={max}
          setPlanState={setPlanState}
        />
        {filteredCards.length > 0 && (
          <TrashBin setCards={setCards} setPlanState={setPlanState} />
        )}
      </div>
    </div>
  );
};

export default Column;
