import Sidebar from "./components/Sidebar";
import NewWeeklyPlan from "./components/NewWeeklyPlan";
function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <NewWeeklyPlan />
      </main>
    </>
  );
}

export default App;
