import Button from "./Button";
import Accordion from "./Accordion";

export default function Sidebar({ onStartAddPlan, plans, wwws, onSelectPlan }) {
  return (
    <aside className="w-1/3 px-8 py-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <section>
        <h3 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Weekly Plans
        </h3>
        <ul className="mb-3">
          {Object.keys(wwws).map((year) => {
            return (
              <li key={year}>
                <Accordion title={year} key={year}>
                  {Object.keys(wwws[year]).map((month) => (
                    <Accordion title={month} key={month}>
                      {Object.keys(wwws[year][month]).map((week) => (
                        <p onClick={() => onSelectPlan(week)} key={week}>
                          week {week}
                        </p>
                      ))}
                    </Accordion>
                  ))}
                </Accordion>
              </li>
            );
          })}
        </ul>
        <Button onClick={onStartAddPlan}>+ Add Plan</Button>
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
