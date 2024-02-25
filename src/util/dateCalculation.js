const today = new Date();
var year = today.getFullYear();
var month = today.getMonth();

const mondays = getMondaysInMonth(year, month);

const formatedMondays = mondays.map((monday) => {
  monday = new Intl.DateTimeFormat("ko-KR").format(monday);
  return monday;
});

console.log(formatedMondays);

const sundays = mondays.map((monday) => {
  let sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  sunday = new Intl.DateTimeFormat("ko-KR").format(sunday);
  return sunday;
});

console.log(sundays);

const weeksInMonth = mondays.map((monday) => {
  const date = new Date(monday);
  const week = getWeekNumber(date);
  return week;
});

export const boardHeaders = formatedMondays.map((monday, index) => {
  const sunday = sundays[index];
  const weekNumber = weeksInMonth[index];

  return {
    monday: monday,
    sunday: sunday,
    weekNumber: weekNumber,
  };
});

// Get Mondays in month : I've change function expression to function declaration due to hoisting
function getMondaysInMonth(year, month) {
  const mondays = [];

  const date = new Date(year, month, 1);
  console.log("date", date);

  while (date.getMonth() === month) {
    if (date.getDay() === 1) {
      console.log(date);
      mondays.push(new Date(date));
    }

    date.setDate(date.getDate() + 1);
  }

  return mondays;
} // getMondaysInMonth() ends

// Calculate the number of week in year
export function getWeekNumber(date) {
  const dataObject = new Date(date);
  const startOfYear = new Date(dataObject.getFullYear(), 0, 1);
  console.log(startOfYear);
  const diff = dataObject - startOfYear;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const week = Math.floor(diff / oneWeek) + 1;

  return week;
} // getWeekNumber() ends

export const formatDate = (date) => {
  const parts = date.split(".");
  const monthPart = parts[1].trim();
  const dayPart = parts[2].trim();

  const month = monthPart.length === 1 ? "0" + monthPart : monthPart;
  const day = dayPart.split(".")[0].length === 1 ? "0" + dayPart : dayPart;

  return parts[0] + "-" + month + "-" + day;
};

export const formateDateToDashDate = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
};

export const formatDateAndTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const formatedDate = new Date(year, month, day, 0, 0, 0);

  return formatedDate;
};
