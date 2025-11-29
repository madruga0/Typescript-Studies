// Day 07 - Exercise 4
var multiply;
var capitalize;
capitalize = function (value) {
    return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
};
multiply = function (x, y) {
    return x * y;
};
console.log(capitalize("nifty ".concat(multiply(5, 10))));
// interessante, tem que estar ligado nos types das functions
