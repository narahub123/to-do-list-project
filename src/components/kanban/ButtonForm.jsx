import React from "react";

const ButtonForm = ({ children, onClick, style, ...props }) => {
  return (
    <form
      method="dialog"
      className={`px-3 py-3 text-sm text-neutral-900 transition-colors rounded-lg hover:text-neutral-50 hover:bg-neutral-800 ${style} `}
    >
      <button onClick={onClick} className="outline-0 " {...props}>
        {children}
      </button>
    </form>
  );
};

export default ButtonForm;
