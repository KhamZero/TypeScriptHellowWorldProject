"use strict";
// let greet: Function;
// example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var logDetails;
var logDetailsImproved;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
logDetailsImproved = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
