import WeeklyPlans from "./WeeklyPlans";
export default function Sidebar() {
  return (
    <aside>
      <section>
        <h3>Your Weekly Plans</h3>
        <button>+ Add Plan</button>
        <WeeklyPlans />
      </section>
      <section>
        <h3>Other User's Plan</h3>
        <ol>
          <li>User1</li>
          <li>User2</li>
          <li>User3</li>
          <li>User4</li>
        </ol>
      </section>
    </aside>
  );
}
