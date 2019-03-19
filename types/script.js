"use strict";
// tuples
var myTuple = ["Smart AF", 13];
// enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["grey"] = 100] = "grey";
    Color[Color["brown"] = 101] = "brown";
})(Color || (Color = {}));
var greenEnum = Color.green;
console.log(greenEnum); // 1
var greyEnum = Color.grey;
console.log(greenEnum); // 100
var brownEnum = Color.brown;
console.log(greenEnum); // 101
// function
function multiplier(value1, value2) {
    return value1 * value2;
}
// function type
var myFunction;
myFunction = multiplier;
console.log(myFunction(10, 5));
// objects
var userData = {
    name: "Evan",
    age: 36
};
// complex objects
var complexObj = {
    data: [1, 7, 13],
    output: function (all) {
        return this.data;
    }
};
// complex objects with predifined type
var complexObj__1 = {
    data: [1, 7, 13],
    output: function (all) {
        return this.data;
    }
};
// complex objectswith verbose type
var complexObj__2 = {
    data: [1, 7, 13],
    output: function (all) {
        return this.data;
    }
};
// union type
var myAge; // age can be either 36 or "36"
myAge = 36;
// check type example
var ageValue = "thirty six";
if (typeof ageValue == "string") {
    console.log("ageValue is a string");
}
// never
function neverReturns() {
    throw new Error("An error!!");
}
// strickNullChecks = true in the compiler tsconfig.json
var variableNull = null;
variableNull = 2; // throws an erro because it can only be null
var variableNumber = 2;
// variableNumber = null; throws an error because a variable initialized as a
// number cannot be reassigned to a null value
