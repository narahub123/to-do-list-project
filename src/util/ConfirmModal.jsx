import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { deleteWeeklyToDo } from "./HandleAPI";

const ConfirmModal = forwardRef(
  ({ children, cancel, confirm, setPlanState, id }, ref) => {
    const dialog = useRef();

    const handleDelete = (cardId) => {
      deleteWeeklyToDo(cardId, setPlanState);
    }; // handleDelete() ends

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

        onClose();
      }
    }; // handleCloseBackdrop() ends

    return createPortal(
      <div onClick={handleCloseBackdrop}>
        <dialog
          ref={dialog}
          className="backdrop:bg-stone-900/90 p-4 rounded-md shadeow-md"
        >
          <div>
            {children}
            <div className="flex justify-between">
              <form
                method="dialog"
                className="px-3 py-3 text-sm text-neutral-900 transition-colors rounded-lg hover:text-neutral-50 hover:bg-neutral-800"
              >
                <button>{cancel}</button>
              </form>
              <form
                method="dialog"
                className="px-3 py-3 text-sm text-neutral-900 transition-colors rounded-lg hover:text-neutral-50 hover:bg-neutral-800"
              >
                <button onClick={() => handleDelete(id)}>{confirm}</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>,
      document.getElementById("modal-root")
    );
  }
);

export default ConfirmModal;
