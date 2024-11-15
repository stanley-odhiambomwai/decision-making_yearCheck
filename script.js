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

//Develop a program that asks the user for the current temperature and
//whether it is raining or not. Then, depending on the temperature and
//whether it is raining or not, the program should output
//the appropriate message whether it is raining or not.
// Based on this information, advise the user on what clothing to wear.

function weatherCheck(temperature, isRaining) {
    if (isRaining) {
        if (temperature < 15) {
            return "It's cold and raining, you should wear a jacket.";
        } else {
            return "It's warm and raining, you should wear shorts.";
        }
    } else {
        if (temperature < 15) {
            return "It's cold and not raining, you should wear a sweater.";
        } else {
            return "It's warm and not raining, you should wear a t-shirt.";
        }
    }
}

console.log(weatherCheck(25, true));
console.log(weatherCheck(12, false));