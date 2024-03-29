import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { deleteWeeklyToDo, updateWeeklyToDo } from "./HandleAPI";
import ButtonForm from "../components/kanban/ButtonForm";

const ConfirmModal = forwardRef(
  (
    {
      children,
      cancel,
      confirm,
      setPlanState,
      card,
      isDeleting,
      setIsDeleting,
      isEditing,
      setIsEditing,
      updatedCard,
    },
    ref
  ) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    }); // useImperativeHandle() ends

    const handleCloseBackdrop = (e) => {
      if (e.target === dialog.current && e.target !== dialog) {
        // 모달 백드롭을 클릭했을 때만 모달을 닫습니다.
        dialog.current.close();

        handleCancel();
      }
    }; // handleCloseBackdrop() ends

    // console.log("deleting", isDeleting);
    // console.log("editing", isEditing);
    // modal
    const handleModal = () => {
      if (isDeleting) {
        handleDelete(card._id);
        setIsDeleting(false);
      }
      if (isEditing) {
        handleEdit(updatedCard(), setPlanState);
        setIsEditing(false);
      }
    }; // handleModal() ends

    // update
    const handleEdit = (c, setPlanState) => {
      // console.log(c);
      updateWeeklyToDo(
        c._id,
        c.from,
        c.to,
        c.subject,
        c.description,
        setPlanState
      );
    }; // handleEdit() ends

    // delete
    const handleDelete = () => {
      deleteWeeklyToDo(card._id, setPlanState);
    }; // handleDelete() ends

    // cancel
    const handleCancel = () => {};

    return createPortal(
      <div onClick={handleCloseBackdrop}>
        <dialog
          ref={dialog}
          className="backdrop:bg-stone-900/90 p-4 rounded-md shadeow-md"
        >
          <div>
            {children}
            <div className="flex justify-between">
              <ButtonForm onClick={handleCancel}>{cancel}</ButtonForm>
              <ButtonForm onClick={handleModal}>{confirm}</ButtonForm>
            </div>
          </div>
        </dialog>
      </div>,
      document.getElementById("modal-root")
    );
  }
);

export default ConfirmModal;
