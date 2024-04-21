"use strict";

/* 
- Calculate age to day, month and year from the form
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
const index = 3;
const presentDate = new Date();8

// Input empty error display
// const displayInputEmptyError = function () {

// };

const removeErrorStyle = function () {
  for (let i = 0; i < index; i++) {
    inputErrors[i].innerHTML = "";
    formInputs[i].style.borderColor = "hsl(0, 0%, 86%)";
    formLabels[i].style.color = "hsl(0, 1%, 44%)";
  }
};

calculateAgeButton.addEventListener("click", function () {
  for (let i = 0; i < index; i++) {
    if (formInputs[i].value === "") {
      inputErrors[i].innerHTML = "This field is required";
      formInputs[i].style.borderColor = "hsl(0, 100%, 67%)";
      formLabels[i].style.color = "hsl(0, 100%, 67%)";
    }
    if (formInputs[i].value !== "") {
      if (formInputs[0].value >= 1 && formInputs[0].value <= 31) {
        yourAge[2].innerHTML = formInputs[0].value;
        removeErrorStyle();
      } else {
        inputErrors[0].innerHTML = "Must be a valid day";
      }
      
      if (formInputs[1].value >= 1 && formInputs[1].value <= 12) {
        yourAge[1].innerHTML = formInputs[1].value;
        removeErrorStyle();
      } else {
        inputErrors[1].innerHTML = "Must be a valid month";
      }

      if (formInputs[2].value <= presentDate.getFullYear()) {
        yourAge[0].innerHTML = formInputs[2].value;
        removeErrorStyle();
      } else {
        inputErrors[2].innerHTML = "Must be in the past";
      }


    }
  }
});
