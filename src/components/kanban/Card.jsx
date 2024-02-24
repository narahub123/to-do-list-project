import React, { useRef, useState } from "react";
import {
  formatDate,
  formatDateAndTime,
  formateDateToDashDate,
  getWeekNumber,
} from "../../util/dateCalculation";
import DropIndicator from "./DropIndicator";
import { FiTrash, FiEdit, FiSave, FiXCircle } from "react-icons/fi";
import ConfirmModal from "../../util/ConfirmModal";
import ValidationModal from "../../util/ValidationModal";

const Card = ({ card, handleDragStart, setPlanState }) => {
  const confirmModal = useRef();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const validationModal = useRef();
  const [isBigger, setIsBigger] = useState(false);
  const [isEarlier, setIsEarlier] = useState(false);
  const [isLater, setIsLater] = useState(false);

  // const [editedSubject, setEditedSubject] = useState(subject);
  const editedSubject = useRef(card.subject);
  // console.log(editedSubject.current.value);
  const editedFrom = useRef(card.from);
  // console.log(editedFrom.current.value);
  const editedTo = useRef(card.to);
  // console.log(editedTo.current.value);
  const editedDescription = useRef(card.description);
  // console.log(editedDescription.current.value);

  // week number as colum key
  const column = getWeekNumber(card.from);

  // modal
  const handleDeleteModal = () => {
    confirmModal.current.open();
    setIsDeleting(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditModal = () => {
    let updated = updatedCard();
    console.log(updated);
    if (updated !== undefined) {
      confirmModal.current.open();
      setIsEditing(true);
    }
  };

  const updatedCard = () => {
    const enteredSubject = editedSubject.current.value;
    // console.log(enteredSubject);
    const enteredDescription = editedDescription.current.value;
    // console.log(enteredDescription);
    const enteredFrom = formatDateAndTime(new Date(editedFrom.current.value));
    // console.log(enteredFrom);
    const enteredTo = formatDateAndTime(new Date(editedTo.current.value));
    // console.log(enteredTo);
    // console.log(card);

    // validation

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

    if (formatDateAndTime(new Date(card.from)) > enteredFrom) {
      setIsEarlier(true);
      validationModal.current.open();
      return;
    }

    if (formatDateAndTime(new Date(card.to)) < enteredTo) {
      setIsLater(true);
      validationModal.current.open();
      return;
    }

    const updatedCard = {
      ...card,
      from: formateDateToDashDate(enteredFrom),
      to: formateDateToDashDate(enteredTo),
      subject: enteredSubject,
      description: enteredDescription,
    };

    // console.log(updatedCard);

    return updatedCard;
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleValid = () => {
    console.log(isEditing);
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
      <ConfirmModal
        ref={confirmModal}
        confirm="Confirm"
        cancel="Cancel"
        setPlanState={setPlanState}
        card={card}
        isDeleting={isDeleting}
        setIsDeleting={setIsDeleting}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        updatedCard={updatedCard}
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Confirmation</h2>
        {isDeleting && (
          <>
            <p className="text-stone-600 mb-4">
              Do you want to delete this plan?
            </p>
            <p className="text-stone-600 mb-4">
              Please ensure you can not recovery it after deletion
            </p>
          </>
        )}
        {isEditing && (
          <>
            <p className="text-stone-600 mb-4">
              Do you want to edit this plan?
            </p>
            <p className="text-stone-600 mb-4">
              Please ensure you can not recovery it after editing
            </p>
          </>
        )}
      </ConfirmModal>
      <DropIndicator beforeId={card._id} column={column} />
      {isEditing ? (
        <div className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing hover:border-neutral-500">
          <div className="flex items-center justify-between">
            <p>
              <input
                type="text"
                className="w-full pb-0.5 pl-1 bg-neutral-700 text-sm placeholder-neutral-300  focus:outline-0   focus:placeholder-transparent"
                defaultValue={card.subject}
                autoFocus
                ref={editedSubject}
              />
            </p>
            <p className="flex gap-1 text-neutral-400">
              <FiSave
                className="hover:text-neutral-200"
                onClick={() => handleEditModal()}
              />
              <FiXCircle
                className="hover:text-neutral-200"
                onClick={() => handleCancel()}
              />
            </p>
          </div>
          <p className="border-b-2 pb-1 border-neutral-700 ">
            <input
              type="date"
              placeholder="start"
              className="border-0 bg-neutral-700 text-xs text-neutral-400 focus:outline-0"
              defaultValue={card.from}
              ref={editedFrom}
            />
            <input
              type="date"
              placeholder="end"
              className="ml-1 border-0 bg-neutral-700 text-xs text-neutral-400 focus:outline-0"
              defaultValue={card.to}
              ref={editedTo}
            />
          </p>
          <p className="w-full py-3">
            <input
              type="text"
              className="w-full pb-0.5 pl-1 bg-neutral-700 text-sm placeholder-neutral-300  focus:outline-0   focus:placeholder-transparent"
              defaultValue={card.description}
              ref={editedDescription}
            />
          </p>
        </div>
      ) : (
        <div
          draggable="true"
          onDragStart={(e) => handleDragStart(e, card)}
          className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing hover:border-neutral-500"
        >
          <div className="flex items-center justify-between">
            <p className="text-base text-neutral-100">{card.subject}</p>
            <p className="flex gap-1 text-neutral-400">
              <FiEdit
                className="hover:text-neutral-200"
                onClick={() => handleEdit()}
              />
              <FiTrash
                className="hover:text-neutral-200"
                onClick={() => handleDeleteModal()}
              />
            </p>
          </div>

          <p className="border-b-2 border-neutral-700 pl-0.5">
            <span className="text-xs text-neutral-400">{card.from}</span>
            <span className="text-xs text-neutral-400">&nbsp;~&nbsp;</span>
            <span className="text-xs text-neutral-400">{card.to}</span>
          </p>
          <p className="text-sm text-neutral-200 mt-2 ">+ {card.description}</p>
        </div>
      )}
    </>
  );
};

export default Card;
