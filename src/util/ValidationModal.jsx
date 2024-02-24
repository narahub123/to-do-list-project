import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ValidationModal = forwardRef(
  ({ children, buttonCaption, onClose }, ref) => {
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

        onClose();
      }
    };

    const handleModalClick = (e) => {
      e.stopPropagation();
    };

    return createPortal(
      <div onClick={handleCloseBackdrop}>
        <dialog
          ref={dialog}
          className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
          <div onClick={handleModalClick}>
            {children}
            <form method="dialog" className="mt-4 text-right">
              <button
                onClick={() => {
                  dialog.current.close();
                  onClose();
                }}
              >
                {buttonCaption}
              </button>
            </form>
          </div>
        </dialog>
      </div>,
      document.getElementById("modal-root")
    );
  }
);

export default ValidationModal;
