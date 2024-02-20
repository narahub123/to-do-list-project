import Button from "./Button";
import Accordion, { AccordionItem } from "./Accordion";

export default function Sidebar({ onStartAddProject, plans }) {
  // calculate week number of the date
  function handleWeekNumber(date) {
    const dataObject = new Date(date);
    const startOfYear = new Date(dataObject.getFullYear(), 0, 0);
    const diff = dataObject - startOfYear;
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const weekNumber = Math.floor(diff / oneWeek) + 1;
    // console.log(weekNumber);
    return weekNumber;
  }

  return (
    <aside className="w-1/3 px-8 py-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <section>
        <h3 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Weekly Plans
        </h3>
        <ul>
          <Accordion>
            {plans.map((plan) => {
              let weekNumber = handleWeekNumber(plan.from);
              return (
                <AccordionItem value="1" trigger={plan.from.split("-")[0]}>
                  <AccordionItem value="2" trigger={plan.from.split("-")[1]}>
                    <p className="w-full text-left px-4 rounded-sm  text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                      week{weekNumber}
                    </p>
                  </AccordionItem>
                  <p className="w-full text-left px-2 rounded-sm  text-stone-400 hover:text-stone-200 hover:bg-stone-800"></p>
                </AccordionItem>
              );
            })}
          </Accordion>
        </ul>
        {/* <ul className="mb-8">
          {plans.map((plan) => {
            let weekNumber = handleWeekNumber(plan.from);
            return (
              <li key={plan.planId}>
                <button className="">
                  {plan.from.split("-")[0]}
                </button>
                <button className="w-full text-left px-2 py-1 rounded-sm  text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                  {plan.from.split("-")[1]}
                </button>
                <button className="w-full text-left px-4 py-1 rounded-sm  text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                  week{weekNumber}
                </button>
              </li>
            );
          })}
        </ul> */}
        <Button onClick={onStartAddProject}>+ Add Plan</Button>
      </section>
      <section>
        <h3 className="mt-8 mb-2 font-bold uppercase md:text-xl text-stone-200">
          Other User's Plan
        </h3>
        <ol>
          <li className="list-disc list-inside text-stone-400">
            <span>User1</span>
          </li>
          <li className="list-disc list-inside text-stone-400">
            <span>User2</span>
          </li>
          <li className="list-disc list-inside text-stone-400">
            <span>User3</span>
          </li>
          <li className="list-disc list-inside text-stone-400">
            <span>User4</span>
          </li>
        </ol>
      </section>
    </aside>
  );
}
