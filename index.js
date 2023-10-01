const leapYear = document.getElementById("leapYear");
const submit = document.getElementById("submit");

const isLeapYear = (year) => {
  if (!Number.isNaN(year)) {
    return "please enter a valid year";
  } else if (year % 4 !== 0) {
    return "sorry, your birthday not a leap year";
  } else if (year % 100 !== 0) {
    return "congratulations, your birthday is a leap year";
  } else if (year % 400 !== 0) {
    return "sorry, your birthday not a leap year";
  } else {
    return "congratulations, your birthday is a leap year";
  }
};

submit.addEventListener("click", function () {
  const year = leapYear.value;
  const result = isLeapYear(year);
  alert(result);
});
