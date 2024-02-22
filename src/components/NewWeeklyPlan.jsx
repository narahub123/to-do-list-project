import { useRef } from "react";
import Input from "./Input";
import { saveWeeklyToDo } from "../util/HandleAPI";
import ValidationModal from "../util/ValidationModal";

export default function NewWeeklyPlan({ setPlanState }) {
  const validationModal = useRef();

  const from = useRef();
  const to = useRef();
  const subject = useRef();
  const description = useRef();

  function handleSave() {
    const enteredFrom = from.current.value;
    const enteredTo = to.current.value;
    const enteredSubject = subject.current.value;
    const enteredDescription = description.current.value;

    // vaildation
    if (
      enteredFrom.trim() === "" ||
      enteredTo.trim() === "" ||
      enteredSubject === "" ||
      enteredDescription === ""
    ) {
      // show the validation modal
      validationModal.current.open();
      return;
    }

    // pass the data back to app component
    saveWeeklyToDo({
      from: enteredFrom,
      to: enteredTo,
      subject: enteredSubject,
      description: enteredDescription,
      setPlanState,
    });
  } // handleSave()

  return (
    <>
      <ValidationModal ref={validationModal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forget to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </ValidationModal>
      <div className="w-[35rem] mt-16">
        <div>
          <p className="text-center font-bold uppercase md:text-xl text-stone-900">
            Weekly Plan
          </p>
          <Input label="From" type="date" ref={from} />
          <Input label="To" type="date" ref={to} />
          <Input label="Subject" type="text" ref={subject} />
          <Input label="Description" type="text" ref={description} />
        </div>
        <menu className="flex item-center justify-end gap-4 my-4">
          <li>
            <button className="px-6 py-2 text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}
