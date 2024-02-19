import { createContext, useContext, useEffect, useRef, useState } from "react";

// create a context to manage state for the Accorian component
const AccordianContext = createContext();

export default function Accordian({ value, children, onChange, ...props }) {
  // managing state by selection
  const [selected, setSelected] = useState(value);

  // if onChange exists, call it
  // if onChange is not defined it will return undefined
  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    //
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
} // Accordian() ends

// AccordianItem
export function AccordianItem({ children, value, trigger, ...props }) {
  // get the selected state and setSelected function from the AccordianContext
  const { selected, setSelected } = useContext(AccordianContext);

  // determine if the current item is open based on selected value
  const open = selected === value;

  // create a ref to access the height of the content
  const ref = useRef(null);

  return (
    <li {...props}>
      <header role="button" onClick={() => setSelected(open ? null : value)}>
        {trigger}
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div ref={ref}>{children}</div>
      </div>
    </li>
  );
} // AccordianItem() ends
