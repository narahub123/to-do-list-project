import Sidebar from "./components/Sidebar";
import NewWeeklyPlan from "./components/NewWeeklyPlan";
import NoPlanSet from "./components/NoPlanSet";
import { useState } from "react";

function App() {
  const [planState, setPlanState] = useState({
    selectedPlanId: undefined,
    plans: [],
  });

  function handleStartAddPlan() {
    setPlanState((prevState) => {
      return {
        ...prevState,
        selectedPlanId: null,
      };
    });
  } // handleStartAddPlan() ends

  let content;

  if (planState.selectedPlanId === null) {
    content = <NewWeeklyPlan />;
  } else if (planState.selectedPlanId === undefined) {
    content = <NoPlanSet onStartAddProject={handleStartAddPlan} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onStartAddProject={handleStartAddPlan} />
        {content}
      </main>
    </>
  );
}

export default App;
