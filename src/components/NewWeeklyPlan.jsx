export default function NewWeeklyPlan() {
  return (
    <div>
      <div>
        <p>Weekly Plan</p>
        <p>
          <label>From </label>
          <input type="date" />
        </p>
        <p>
          <label>To </label>
          <input type="date" />
        </p>
        <p>
          <label>Subject </label>
          <input type="text" />
        </p>
        <p>
          <label>Description </label>
          <input type="text" />
        </p>
      </div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
    </div>
  );
}
