//Create a function that takes a year as input and 
//determines whether it is a leap year or not. 
//Leap years are divisible by 4, but not by 100 
//unless they are also divisible by 400.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2003));
console.log(isLeapYear(2011));
console.log(isLeapYear(2000));