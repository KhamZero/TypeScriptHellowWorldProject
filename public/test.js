"use strict";
var greet;
// greet = 'hello'
greet = function () {
    console.log('hello, again');
};
var add = function (a, b, c) {
    console.log(a + b);
    if (c !== undefined) {
        console.log(c);
    }
};
add(1, 3);
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
// result = 'something else' // we cannot change the type number
var minus_2 = function (a, b) {
    return a - b;
};
