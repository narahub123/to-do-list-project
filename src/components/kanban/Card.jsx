import React, { useRef, useState } from "react";
import { getWeekNumber } from "../../util/dateCalculation";
import DropIndicator from "./DropIndicator";
import { FiTrash, FiEdit } from "react-icons/fi";
import ConfirmModal from "../../util/ConfirmModal";

const Card = ({
  subject,
  _id,
  from,
  to,
  description,
  handleDragStart,
  setPlanState,
}) => {
  const confirmModal = useRef();
  const [isDeleting, setIsDelete] = useState(false);

  const column = getWeekNumber(from);

  // modal
  const handleModal = () => {
    confirmModal.current.open();
  };
  return (
    <>
      <ConfirmModal
        ref={confirmModal}
        confirm="Confirm"
        cancel="Cancel"
        setPlanState={setPlanState}
        id={_id}
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Confirmation</h2>
        <p className="text-stone-600 mb-4">Do you want to delete this plan?</p>
        <p className="text-stone-600 mb-4">
          Please ensure you can not recovery it after deletion
        </p>
      </ConfirmModal>
      <DropIndicator beforeId={_id} column={column} />
      <div
        draggable="true"
        onDragStart={(e) =>
          handleDragStart(e, { subject, _id, from, to, description })
        }
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing hover:border-neutral-500"
      >
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-100">{subject}</p>
          <p className="flex gap-1 text-neutral-400">
            <FiEdit className="hover:text-neutral-200" />
            <FiTrash
              className="hover:text-neutral-200"
              onClick={() => handleModal()}
            />
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
