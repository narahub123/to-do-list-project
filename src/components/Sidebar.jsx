export default function Sidebar() {
  return (
    <aside className="w-1/3 px-8 py-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <section>
        <h3 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Weekly Plans
        </h3>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          + Add Plan
        </button>
        <ul></ul>
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
