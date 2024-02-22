import axios from "axios";

const baseUrl = "http://localhost:3000";

const getAllWeeklyToDos = (setPlanState) => {
  axios.get(baseUrl).then((data) => {
    console.log("data ===>", data.data);
    let plans = {};

    for (const plan of data.data) {
      const from = plan.from;
      const year = from.split("-")[0];
      const month = from.split("-")[1];
      const dataObject = new Date(from);
      const startOfYear = new Date(dataObject.getFullYear(), 0, 0);
      const diff = dataObject - startOfYear;
      const oneWeek = 1000 * 60 * 60 * 24 * 7;
      const week = Math.floor(diff / oneWeek) + 1;

      if (!plans[year]) {
        plans[year] = {};
      }
      if (!plans[year][month]) {
        plans[year][month] = {};
      }

      if (!plans[year][month][week]) {
        plans[year][month][week] = { from: [], _id: [] };
      }

      plans[year][month][week].from.push(plan.from);
      plans[year][month][week]._id.push(plan._id);
    }

    console.log(plans);

    setPlanState({
      selectedPlanId: data.data._id,
      // plans: data.data,
      plans: data.data,
      wwws: plans,
    });
  });
};

const saveWeeklyToDo = ({ from, to, subject, description, setPlanState }) => {
  console.log(from, to, subject, description, setPlanState);
  axios
    .post(`${baseUrl}/save`, { from, to, subject, description })
    .then((data) => {
      console.log(data);
      getAllWeeklyToDos(setPlanState);
    })
    .catch((err) => console.log(err));
};

const updateWeeklyToDo = (
  _id,
  from,
  to,
  subject,
  description,
  setPlanState
) => {
  console.log(_id, from, to, subject, description, setPlanState);

  axios
    .patch(`${baseUrl}/update`, { _id, from, to, subject, description })
    .then((data) => {
      console.log("data", data);
      getAllWeeklyToDos(setPlanState);
    })
    .catch((err) => console.log(err));
};

const deleteWeeklyToDo = (_id, setPlanState) => {
  axios
    .delete(`${baseUrl}/delete`, { data: { _id } })
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
