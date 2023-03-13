let dayNumber = 3;
let days;
if (dayNumber === 0) {
  days = "Sunday";
} else if (dayNumber === 1) {
  days = "Monday";
} else if (dayNumber === 2) {
  days = "Tuesday";
} else if (dayNumber === 3) {
  days = "Wednesday";
} else if (dayNumber === 4) {
  days = "Thuesday";
} else if (dayNumber === 5) {
  days = "Friday";
} else if (dayNumber === 6) {
  days = "Saturday";
} else {
  days = "Invalid day number";
}
console.log(days);

switch (dayNumber) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day = "Invalid day number";
}
console.log(day);

//   console.log(new Date().getDay());
//   console.log(new Date().getMonth());
//   console.log(new Date().getDate());
//   console.log(new Date().getFullYear());
