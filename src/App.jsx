import Sidebar from "./components/Sidebar";
import NewWeeklyPlan from "./components/NewWeeklyPlan";
import NoPlanSet from "./components/NoPlanSet";
import { useEffect, useState } from "react";
import { getAllWeeklyToDos } from "./util/HandleAPI";
import SelectedWeeklyPlan from "./components/SelectedWeeklyPlan";
import Kanban from "./components/kanban/Kanban";

function App() {
  const [planState, setPlanState] = useState({
    selectedPlanId: undefined,
    plans: [],
    ymwf: {},
    isUpdating: false,
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
        isUpdating: false,
      };
    });
  } // handleStartAddPlan() ends

  // console.log(planState);

  function handleSelectPlan(id) {
    setPlanState((prevState) => {
      console.log("id", id);
      return {
        ...prevState,
        selectedPlanId: id,
        isUpdating: false,
      };
    });
  } // handleSelectPlan() ends

  function handleUpdateButton(id) {
    setPlanState((prevState) => {
      console.log("id", id);
      return {
        ...prevState,
        selectedPlanId: id,
        isUpdating: true,
      };
    });
  } // handleSelectPlan() ends

  const selectedPlan = planState.plans.find((plan) => {
    // console.log("_id", plan._id);
    // console.log(plan._id === planState.selectedPlanId);

    // plan that is plan._id === planState.selectedPlanId
    // console.log(plan);
    return plan._id === planState.selectedPlanId;
  });

  let content = (
    <SelectedWeeklyPlan
      plan={selectedPlan}
      onSelectPlan={handleUpdateButton}
      isUpdating={planState.isUpdating}
      setPlanState={setPlanState}
    />
  );

  if (planState.selectedPlanId === null) {
    content = <NewWeeklyPlan setPlanState={setPlanState} />;
  } else if (planState.selectedPlanId === undefined) {
    content = <NoPlanSet onStartAddProject={handleStartAddPlan} />;
  } // if ends

  return (
    <>
      <main className="h-screen my-8 flex gap-6">
        <Sidebar
          onStartAddPlan={handleStartAddPlan}
          plans={planState.plans}
          ymwf={planState.ymwf}
          onSelectPlan={handleSelectPlan}
        />
        <Kanban ymwf={planState.ymwf} />
        {/* {content} */}
      </main>
    </>
  );
}

export default App;
