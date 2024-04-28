"use strict";

/* 
- Calculate a persons age in days, months and year from the form
- Make sure the date is valid and display validation errors if:
  - Any field is empty when the form is submitted (This field is required)
  - The day number is not between 1-31 (Must be a valid date)
  - The month number is not between 1-12 (Must be a valid month)
  - The year number is in the future (Must be in the past)
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April) (Must be a valid date)
- Don't display date if there is any validation error, one or more
- Change input border and label color if there is any invalid input
*/

const formLabels = document.querySelectorAll("#label");
const formInputs = document.querySelectorAll(".input-field");
const inputErrors = document.querySelectorAll(".error");
const calculateAgeButton = document.getElementById("calculate-btn");
const yourAge = document.querySelectorAll("#age");
const errorColor = "hsl(0, 100%, 67%)";
const borderColor = "hsl(0, 0%, 86%)";
const labelColor = "hsl(0, 1%, 44%)";

// FIELD IS EMPTY
const checkInputEmpty = function () {
  for (let i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value === "") {
      formLabels[i].style.color = errorColor;
      formInputs[i].style.borderColor = errorColor;
      inputErrors[i].innerHTML = "This field is required";
    } else {
      formLabels[i].style.color = labelColor;
      formInputs[i].style.borderColor = borderColor;
      inputErrors[i].innerHTML = "";
    }
  }
};

const [day, month, year] = formInputs;
const [dayLabel, mothLabel, yearLabel] = formLabels;
const [dayError, monthError, yearError] = inputErrors;

// INVALID DAY
const validateDay = function () {
  for (let i = 0; i < formInputs.length; i++) {
    if (day.value !== "") {
      // Must be a number and between 1 and 31 inclusive
      if (day.value < 1 || day.value > 31 || isNaN(day.value)) {
        dayLabel.style.color = errorColor;
        day.style.borderColor = errorColor;
        dayError.innerHTML = "Must be a valid date";
      } else {
        console.log("Date is valid");
      }
    }
  }
};

// INVALID MONTH

calculateAgeButton.addEventListener("click", function () {
  checkInputEmpty();
  validateDay();
});
