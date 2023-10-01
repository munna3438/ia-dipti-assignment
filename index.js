const leapYear = document.getElementById("leapYear");
const submit = document.getElementById("submit");

const isLeapYear = (year) => {
  if (isNaN(year)) {
    return "Invalid number"; // Check if the input is not a number
  } else if (year == "") {
    return "Please enter a number";
  } else if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0)
        return "Congratulations, your birthday is a leap year";
      else return "Sorry, your birthday is not a leap year";
    } else return "Congratulations, your birthday is a leap year";
  } else return "Sorry, your birthday is not a leap year";
};

submit.addEventListener("click", function () {
  const year = leapYear.value;
  const result = isLeapYear(year);
  alert(result);
});
