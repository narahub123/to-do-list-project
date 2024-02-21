import axios from "axios";

const baseUrl = "http://localhost:3000";

const getAllWeeklyToDos = (setPlanState) => {
  axios.get(baseUrl).then((data) => {
    console.log("data ===>", data.data);
    setPlanState({
      selectedPlanId: data.data._id,
      plans: data.data,
    });
  });
};

const saveWeeklyToDo = (from, to, subject, description) => {
  console.log(from, to, subject, description);
  axios.post(`${baseUrl}/save`, from, to, subject, description).then((data) => {
    console.log(data);
  });
};

export { getAllWeeklyToDos, saveWeeklyToDo };
