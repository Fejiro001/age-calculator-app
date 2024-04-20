"use strict";

/* 
- Display day, month and year from the form
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

calculateAgeButton.addEventListener("click", function () {
  for (let i = 0; i < formInputs.length; i++) {
    if (!formInputs[i].value) {
      // console.log("empty");
      for (let j = 0; j < inputErrors.length; j++) {
        inputErrors[i].innerHTML = "This field is required";
      }
    }
  }
});
