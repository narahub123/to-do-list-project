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
  const startOfYear = new Date(dataObject.getFullYear(), 0, 0);
  const diff = dataObject - startOfYear;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const week = Math.floor(diff / oneWeek) + 1;

  return week;
} // getWeekNumber() ends
