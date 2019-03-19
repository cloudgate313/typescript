// functions
function printInfo__tuple(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
function printInfo__restOperator(...info: [string, number]) {
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}

// Destructuring
const anArray = ["Jet", "Setting"];
const [firstEl, secondEl] = anArray;
console.log(firstEl, secondEl);

const userDataObj = { names: "Evan", age: 36 };
const { names, age } = userDataObj;
console.log(names, age);


const userDataObj__1 = { team: "Evan", score: 360 };
const { team: a, score: b } = userDataObj__1;
console.log(a, b);
