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
