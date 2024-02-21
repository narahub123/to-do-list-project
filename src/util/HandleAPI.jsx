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
  axios
    .post(`${baseUrl}/save`, from, to, subject, description)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

const updateWeeklyToDo = (_id, from, to, subject, description) => {
  console.log(_id, from, to, subject, description);

  axios
    .post(`${baseUrl}/update`, { _id, from, to, subject, description })
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => console.log(err));
};

const deleteWeeklyToDo = (_id, setPlanState) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getAllWeeklyToDos(setPlanState);
    })
    .catch((err) => console.log(err));
};

export {
  getAllWeeklyToDos,
  saveWeeklyToDo,
  updateWeeklyToDo,
  deleteWeeklyToDo,
};
