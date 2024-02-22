import { useRef, useState } from "react";
import { deleteWeeklyToDo, updateWeeklyToDo } from "../util/HandleAPI";
import ValidationModal from "../util/ValidationModal";

export default function SelectedWeeklyPlan({
  plan,
  onSelectPlan,
  isUpdating,
  setPlanState,
}) {
  const [from, setFrom] = useState(plan.from);
  const [to, setTo] = useState(plan.to);
  const [subject, setSubject] = useState(plan.subject);
  const [description, setDescription] = useState(plan.description);

  const [isBigger, setIsBigger] = useState(false);
  const validationModal = useRef();

  const handleInputChange = (field, value) => {
    // 상태를 업데이트합니다.
    if (field === "subject") {
      setSubject(value);
    } else if (field === "description") {
      setDescription(value);
    } else if (field === "from") {
      setFrom(value);
    } else if (field === "to") {
      setTo(value);
    }

    // onSelectPlan을 호출하여 변경된 값과 필드를 전달합니다.
    onSelectPlan(plan._id, value, field);
  };

  const handleUpdateSave = () => {
    // vaildation for empty value
    if (
      from.trim() === "" ||
      to.trim() === "" ||
      subject === "" ||
      description === ""
    ) {
      // show the validation modal
      validationModal.current.open();
      return;
    }

    // validation for dates
    if (from > to) {
      setIsBigger(true);
      validationModal.current.open();
      return;
    }

    updateWeeklyToDo(plan._id, from, to, subject, description, setPlanState);
  };

  const handleDelete = () => {
    deleteWeeklyToDo(plan._id, setPlanState);
  };

  return (
    <>
      <ValidationModal ref={validationModal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        {isBigger ? (
          <>
            <p className="text-stone-600 mb-4">
              Oop ... looks like you set due date earlier than starting date.
            </p>
            <p className="text-stone-600 mb-4">
              Please make sure you set due date later than staring date.
            </p>
          </>
        ) : (
          <>
            <p className="text-stone-600 mb-4">
              Oops ... looks like you forget to enter a value
            </p>
            <p className="text-stone-600 mb-4">
              Please make sure you provide a valid value for every input field
            </p>
          </>
        )}
      </ValidationModal>
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex item-centr justify-between">
            {isUpdating ? (
              <input
                value={subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className="border border-stone-300 rounded-md py-2 px-4 focus:outline-none focus:border-stone-500"
              />
            ) : (
              <h1 className="text-3xl font-bold text-stone-600 mb-2">
                {plan.subject}
              </h1>
            )}

            <menu>
              {isUpdating ? (
                <button
                  onClick={handleUpdateSave}
                  className="text-stone-600 hover:text-stone-900 pr-2"
                >
                  SAVE
                </button>
              ) : (
                <button
                  onClick={() => onSelectPlan(plan._id)}
                  className="text-stone-600 hover:text-stone-900 pr-2"
                >
                  UPDATE
                </button>
              )}
              {isUpdating ? (
                <button className="text-stone-600 hover:text-stone-900">
                  Cancel
                </button>
              ) : (
                <button
                  onClick={handleDelete}
                  className="text-stone-600 hover:text-stone-900"
                >
                  DELETE
                </button>
              )}
            </menu>
          </div>
          {isUpdating ? (
            <p className="my-2">
              <input
                type="date"
                value={from}
                onChange={(e) => handleInputChange("from", e.target.value)}
                className="border border-stone-300 rounded-md py-2 px-4 focus:outline-none focus:border-stone-500"
              />
              -&nbsp;
              <input
                type="date"
                value={to}
                onChange={(e) => handleInputChange("to", e.target.value)}
                className="border border-stone-300 rounded-md py-2 px-4 focus:outline-none focus:border-stone-500"
              />
            </p>
          ) : (
            <p className="mb-4 text-stone-400">
              {plan.from} - {plan.to}
            </p>
          )}
          {isUpdating ? (
            <input
              value={description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="border border-stone-300 rounded-md py-2 px-4 focus:outline-none focus:border-stone-500"
            />
          ) : (
            <p className="text-stone-600 whitespace-pre-wrap">
              {plan.description}
            </p>
          )}
        </header>
      </div>
    </>
  );
}
