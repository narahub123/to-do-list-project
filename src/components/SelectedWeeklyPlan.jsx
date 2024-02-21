import { useState } from "react";
import { updateWeeklyToDo } from "../util/HandleAPI";

export default function SelectedWeeklyPlan({ plan, onSelectPlan, isUpdating }) {
  const [from, setFrom] = useState(plan.from);
  const [to, setTo] = useState(plan.to);
  const [subject, setSubject] = useState(plan.subject);
  const [description, setDescription] = useState(plan.description);

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

  const handleSave = () => {
    updateWeeklyToDo(plan._id, from, to, subject, description);
  };

  return (
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
                onClick={handleSave}
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
              <button className="text-stone-600 hover:text-stone-900">
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
  );
}
