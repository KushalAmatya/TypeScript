"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//function that returns promise
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return 'Hello, World! from  Async function';
    });
}
fetchData().then((data) => {
    console.log(data); //Hello, World!
}); //Hello, World! from  Async function
//union type
let result;
result = 'Hello, World!';
console.log(result); //Hello, World!    
result = 10;
console.log(result); //10
