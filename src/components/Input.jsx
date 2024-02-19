import { forwardRef } from "react";

// create reusable component
const Input = forwardRef(function Input({ label, type }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      <input ref={ref} className={classes} type={type} />
    </p>
  );
});

export default Input;
