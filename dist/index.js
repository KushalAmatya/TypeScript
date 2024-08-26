"use strict";
console.log('Hello, World!'); //Hello, World!
//use let to define the type of variable
let age = 20;
console.log(age); //20
//array in typescript
const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits); //[ 'Apple', 'Banana', 'Orange' ]
let pinNums = [1, 2, 3, 4, 5];
console.log(pinNums); //[ 1, 2, 3, 4, 5 ]
//array of object in typescript
const people = [
    {
        name: 'John',
        age: 20,
    },
    {
        name: 'Jane',
        age: 25,
    },
];
console.log(people); //[ { name: 'John', age: 20 }, { name: 'Jane', age: 25 } ]
const person = {
    name: 'John',
    age: 20,
};
console.log(person.name); //John
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet('John')); //Hello, John!
//unknown type
let userInput = 10;
userInput = 'Hello, World!';
userInput = true;
console.log(userInput); //true
//use any type
function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); //30
console.log(add('Hello, ', 'World!')); //Hello, World!
//function that returns void
function sayHello() {
    console.log('Hello, World! this is void function');
}
sayHello(); //Hello, World! this is void function
// //function that returns promise
// async function fetchData(): Promise<string> {
//     return 'Hello, World! from  Async function';
// }
// fetchData().then((data) => {
//     console.log(data); //Hello, World!
// }); //Hello, World! from  Async function
//union type
let result;
result = 'Hello, World! from union type';
console.log(result); //Hello, World!    
result = 10;
console.log(result); //10
function concatOrAdd(a, b, c) {
    if (typeof a === 'string' || typeof b === 'string' || typeof c === 'string') {
        return `${a} ${b} ${c}`;
    }
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return a + b + c;
    }
}
console.log(concatOrAdd(10, 20, 30));
console.log(concatOrAdd('Hello', 33, 'random Stranger'));
const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
const todo2 = {
    description: "throw out trash",
};
todo1.title = "Yooo";
console.log(todo1);
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log(cats.boris);
console.log(cats);
const dat = {
    name: "Kushal",
    age: 12,
    email: "kushal@gmail.com",
    location: "Nepal"
};
