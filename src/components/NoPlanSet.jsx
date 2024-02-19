import noPlanImg from "../assets/calendar-x.svg";
import Button from "./Button";

export default function NoPlanSet() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noPlanImg}
        alt="no plan set"
        className="w-32 h-32 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">No Plan Set</h2>
      <p className="text-stone-400 mb-4">Get started with a new plan</p>
      <p className="mt-8">
        <Button>Create a new plan</Button>
      </p>
    </div>
  );
}
