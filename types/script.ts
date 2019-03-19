// tuples
let myTuple: [string, number] = ["Smart AF", 13]

// enum
enum Color {
    red,
    green,
    grey = 100,
    brown
}

let greenEnum: Color = Color.green;
console.log(greenEnum) // 1
let greyEnum: Color = Color.grey;
console.log(greenEnum) // 100
let brownEnum: Color = Color.brown;
console.log(greenEnum) // 101


// function
function multiplier(value1: number, value2: number): number {
    return value1 * value2;
}

// function type
let myFunction: (val1: number, val2: number) => number;
myFunction = multiplier;
console.log(myFunction(10, 5));


// objects
let userData: { name: string, age: number } = {
    name: "Evan",
    age: 36
}

// complex objects
let complexObj: { data: number[], output: (all: boolean) => number[] } = {
    data: [1, 7, 13],
    output: function(all: boolean) {
        return this.data;
    }
}

// defined a type
type complexObj = { data: number[], output: (all: boolean) => number[] };

// complex objects with predifined type
let complexObj__1: complexObj = {
    data: [1, 7, 13],
    output: function(all: boolean) {
        return this.data;
    }
}

// complex objectswith verbose type
let complexObj__2: { data: number[], output: (all: boolean) => number[] } = {
    data: [1, 7, 13],
    output: function(all: boolean) {
        return this.data;
    }
}


// union type
let myAge: string | number // age can be either 36 or "36"
myAge = 36;

// check type example
let ageValue = "thirty six"
if(typeof ageValue == "string") {
    console.log("ageValue is a string")
}

// never
function neverReturns(): never {
    throw new Error("An error!!")
}

// strickNullChecks = true in the compiler tsconfig.json
let variableNull = null;
variableNull = 2; // throws an erro because it can only be null

let variableNumber = 2;
// variableNumber = null; throws an error because a variable initialized as a
// number cannot be reassigned to a null value