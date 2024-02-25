import React, { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  formatDate,
  formatDateAndTime,
  formateDateToDashDate,
} from "../../util/dateCalculation";
import ValidationModal from "../../util/ValidationModal";
import { saveWeeklyToDo } from "../../util/HandleAPI";
import { motion } from "framer-motion";

const AddCard = ({ min, max, column, setCards, setPlanState }) => {
  // const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const [isBigger, setIsBigger] = useState(false);
  const [isEarlier, setIsEarlier] = useState(false);
  const [isLater, setIsLater] = useState(false);
  const validationModal = useRef();

  const from = useRef(new Date(min));
  const to = useRef(new Date(max));
  const subject = useRef();
  const description = useRef();

  const fromCurrent = new Date(min);
  const toCurrent = new Date(max);
  // console.log("기본값", fromCurrent);
  // console.log("기본값", toCurrent);

  // set range of dates for weekly plan
  min = formatDate(min);
  max = formatDate(max);
  // console.log(min, max);

  const handleSave = () => {
    const enteredTo = formatDateAndTime(new Date(to.current.value));
    const enteredFrom = formatDateAndTime(new Date(from.current.value));
    const enteredSubject = subject.current.value;
    const enteredDescription = description.current.value;

    console.log("지금값", enteredFrom);
    console.log("지금값", enteredTo);

    // empty value validation
    if (
      enteredSubject.trim() === "" ||
      enteredFrom.toString() === "Invalid Date" ||
      enteredTo.toString() === "Invalid Date" ||
      enteredDescription.trim() === ""
    ) {
      validationModal.current.open();
      return;
    } // if ends

    // date validation
    // validation for dates
    if (enteredFrom > enteredTo) {
      setIsBigger(true);
      validationModal.current.open();
      return;
    }

    if (fromCurrent > enteredFrom) {
      setIsEarlier(true);
      validationModal.current.open();
      return;
    }

    // console.log(isLater);
    console.log(toCurrent);
    console.log(enteredTo);
    if (toCurrent < enteredTo) {
      setIsLater(true);
      // console.log(isLater);
      validationModal.current.open();
      return;
    }

    // pass the data back to app component
    saveWeeklyToDo({
      from: formateDateToDashDate(enteredFrom),
      to: formateDateToDashDate(enteredTo),
      subject: enteredSubject,
      description: enteredDescription,
      setPlanState,
    });

    setAdding(false);
  };

  const handleValid = () => {
    setIsBigger(false);
    setIsEarlier(false);
    setIsLater(false);
  };

  return (
    <>
      <ValidationModal
        ref={validationModal}
        buttonCaption="Okay"
        onClose={() => handleValid()}
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        {isBigger ? (
          <>
            <p className="text-stone-600 mb-4">
              Oop ... looks like you set due date earlier than starting date.
            </p>
            <p className="text-stone-600 mb-4">
              Please ensure due date is later than staring date.
            </p>
          </>
        ) : isEarlier ? (
          <>
            <p className="text-stone-600 mb-4">
              Oop ... looks like you set starting date earlier than start of the
              week.
            </p>
            <p className="text-stone-600 mb-4">
              Please ensure starting date is later than Monday.
            </p>
          </>
        ) : isLater ? (
          <>
            <p className="text-stone-600 mb-4">
              Oop ... looks like you set due date later than end of the week.
            </p>
            <p className="text-stone-600 mb-4">
              Please ensure due date is earlier than Sunday.
            </p>
          </>
        ) : (
          <>
            <p className="text-stone-600 mb-4">
              Oops ... it seems you forget to enter a value
            </p>
            <p className="text-stone-600 mb-4">
              Please rovide a valid value for every input field
            </p>
          </>
        )}
      </ValidationModal>
      {adding ? (
        <>
          <div className="w-full rounded border border-violet-400 bg-violet-400/20 ">
            <p className="w-full p-3">
              <input
                type="text"
                className="w-full pb-0.5 bg-transparent text-sm placeholder-neutral-300  focus:outline-0   focus:placeholder-transparent"
                placeholder="Add new weekly plan..."
                ref={subject}
              />
            </p>
            <p className="mx-3">
              <input
                type="date"
                placeholder="start"
                className="border-0 bg-transparent text-xs text-neutral-400 focus:outline-0"
                defaultValue={min}
                ref={from}
              />
              <input
                type="date"
                placeholder="end"
                className="ml-1 border-0 bg-transparent text-xs text-neutral-400 focus:outline-0"
                defaultValue={max}
                ref={to}
              />
            </p>
            <p className="w-full p-3">
              <input
                type="text"
                className="w-full pb-0.5 bg-transparent text-sm placeholder-neutral-300  focus:outline-0   focus:placeholder-transparent"
                placeholder="Add description"
                ref={description}
              />
            </p>
          </div>
          <div className="my-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => {
                setAdding(false);
              }}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs
                        text-neutral-950 transition-colors hover:bg-neutral-300 "
              onClick={handleSave}
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 p-3 mb-1.5 text-xs text-neutral-400
                     rounded border border-neutral-700 bg-neutral-800  transition-colors hover:text-neutral-50 hover:border-neutral-500"
        >
          <span>Add Plan</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

export default AddCard;
