import Sidebar from "./components/Sidebar";
// import NewWeeklyPlan from "./components/NewWeeklyPlan";
import NoPlanSet from "./components/NoPlanSet";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        {/* <NewWeeklyPlan /> */}
        <NoPlanSet />
      </main>
    </>
  );
}

export default App;
