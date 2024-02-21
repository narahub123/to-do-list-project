import Sidebar from "./components/Sidebar";
import NewWeeklyPlan from "./components/NewWeeklyPlan";
import NoPlanSet from "./components/NoPlanSet";
import { useEffect, useState } from "react";
import { getAllWeeklyToDos } from "./components/HandleAPI";

function App() {
  const [planState, setPlanState] = useState({
    selectedPlanId: undefined,
    plans: [],
  });

  // show the list of data from db
  useEffect(() => {
    getAllWeeklyToDos(setPlanState);
  }, []);

  function handleStartAddPlan() {
    setPlanState((prevState) => {
      return {
        ...prevState,
        selectedPlanId: null,
      };
    });
  } // handleStartAddPlan() ends

  function handleAddPlan(planData) {
    setPlanState((prevState) => {
      const planId = Math.random();
      const newPlan = {
        ...planData,
        id: planId,
      };

      return {
        ...prevState,
        selectedPlanId: undefined,
        plans: [...prevState.plans, newPlan],
      };
    });
  } // handleAddPlan() ends

  console.log(planState);

  let content;

  if (planState.selectedPlanId === null) {
    content = <NewWeeklyPlan />;
  } else if (planState.selectedPlanId === undefined) {
    content = <NoPlanSet onStartAddProject={handleStartAddPlan} />;
  } // if ends

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onStartAddProject={handleStartAddPlan}
          plans={planState.plans}
        />
        {content}
      </main>
    </>
  );
}

export default App;
