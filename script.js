//Get the button element and define Onclick and Offclick events on it
const btn = document.querySelector(".button button");

//getting the object of the text fields
const dayText = document.querySelector("#input-1");
const monthText = document.querySelector("#input-2");
const yearText = document.querySelector("#input-3");

//Values of input
let day = dayText.value;
let month = monthText.value;
let year = yearText.value;
// new Date(year,month,day);

//objects of results
const resP1 = document.querySelector("#result-1");
const resP2 = document.querySelector("#result-2");
const resP3 = document.querySelector("#result-3");

//results i.e. the age of person in y m d
let resYear;
let resMonth;
let resDay;

//error Divs
const error1a = document.querySelector(".error-1a");
const error1b = document.querySelector(".error-1b");
const error2a = document.querySelector(".error-2a");
const error2b = document.querySelector(".error-2b");
const error3a = document.querySelector(".error-3a");
const error3b = document.querySelector(".error-3b");

//for color of title in the top div on error
const titleColor1 = document.querySelector("#title-1");
const titleColor2 = document.querySelector("#title-2");
const titleColor3 = document.querySelector("#title-3");

//for color of box-border on error
//referencing the same input object but defined again for conviniance
const borderColor1 = dayText;
const borderColor2 = monthText;
const borderColor3 = yearText;

//making flags to check if both check after passing through both the function calls the input is correct
let flag1 = 0;
let flag2 = 0;

//Date of today
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

console.log(currentDay, currentMonth);
console.log(date);

btn.addEventListener("click", function (ev) {
  day = dayText.value;
  month = monthText.value;
  year = yearText.value;
  reset();
  check();
});

//Checking if valid or not
function check() {
  isEmpty();
  isValid();
  if (flag1 && flag2) {
    result();
  }
}

function isEmpty() {
  if (day == "") {
    borderColor1.style.borderColor = "rgb(237, 84, 84)";
    titleColor1.style.color = "rgb(237, 84, 84)";
    error1a.style.display = "block";
  }
  if (month == "") {
    borderColor2.style.borderColor = "rgb(237, 84, 84)";
    titleColor2.style.color = "rgb(237, 84, 84)";
    error2a.style.display = "block";
  }
  if (year == "") {
    borderColor3.style.borderColor = "rgb(237, 84, 84)";
    titleColor3.style.color = "rgb(237, 84, 84)";
    error3a.style.display = "block";
  }
  if (day != "" && month != "" && year != "") {
    flag1 = true;
  }
}

function isValid() {
  if (isNaN(day) || day <= 0) {
    error1a.style.display = "none";
    borderColor1.style.borderColor = "rgb(237, 84, 84)";
    titleColor1.style.color = "rgb(237, 84, 84)";
    error1b.style.display = "block";
  }
  if (isNaN(month) || month > 12 || month <= 0) {
    error2a.style.display = "none";
    borderColor2.style.borderColor = "rgb(237, 84, 84)";
    titleColor2.style.color = "rgb(237, 84, 84)";
    error2b.style.display = "block";
  }
  if (isNaN(year) || year > currentYear) {
    error3a.style.display = "none";
    borderColor3.style.borderColor = "rgb(237, 84, 84)";
    titleColor3.style.color = "rgb(237, 84, 84)";
    error3b.style.display = "block";
  }
  if (
    !(isNaN(day) || day <= 0) &&
    !(isNaN(month) || month > 12 || month <= 0) &&
    !(isNaN(year) || year > currentYear)
  ) {
    flag2 = 1;
  }
}

//Calculating the result
function result() {
  if (currentDay < day) {
    if (month == 2) {
      month -= 1;
      day += 28;
    } else if (
      (currentMonth <= 7 && currentMonth % 2 == 1) ||
      (currentMonth >= 8 && currentMonth % 2 == 0)
    ) {
      month -= 1;
      day += 31;
    } else if (
      (currentMonth <= 6 && currentMonth % 2 == 0) ||
      (currentMonth >= 9 && currentMonth % 2 == 1)
    ) {
      month -= 1;
      day += 30;
    }
  } else {
    resDay = currentDay - day;
  }

  if (currentMonth < month) {
    year -= 1;
    month += 12;
  } else {
    resMonth = currentMonth - month;
  }
  resYear = currentYear - year;

  resP1.textContent = `${resYear}`;
  resP2.textContent = `${resMonth}`;
  resP3.textContent = `${resDay}`;
}

//Reseting everything

function reset() {
  //reset the result
  resP1.textContent = "- -";
  resP2.textContent = "- -";
  resP3.textContent = "- -";

  //reset the error values
  error1a.style.display = "none";
  error1b.style.display = "none";
  error2a.style.display = "none";
  error2b.style.display = "none";
  error3a.style.display = "none";
  error3b.style.display = "none";

  //turn back color to gray for each title
  titleColor1.style.color = "black";
  titleColor2.style.color = "black";
  titleColor3.style.color = "black";

  //turn back color of border of text box for each box
  borderColor1.style.borderColor = "black";
  borderColor2.style.borderColor = "black";
  borderColor3.style.borderColor = "black";

  //setting flags flase for another input in the same session
  flag1 = false;
  flag2 = false;
}
