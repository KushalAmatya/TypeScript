console.log('Hello, World!'); //Hello, World!

//use let to define the type of variable
let age:number = 20;
console.log(age); //20

//array in typescript
const fruits:string[] = ['Apple', 'Banana', 'Orange'];
console.log(fruits); //[ 'Apple', 'Banana', 'Orange' ]

let pinNums: Array<number> = [1, 2, 3, 4, 5];
console.log(pinNums); //[ 1, 2, 3, 4, 5 ]


//array of object in typescript
const people:Array<object> = [
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



//use interface to define the type of object
interface Person {
    name: string;
    age: number;
}
const person:Person={
    name: 'John',
    age: 20,
}

console.log(person.name); //John

//use interface to define the type of function
interface Greet {
    (name: string): string;
}

const greet:Greet = (name: string): string => {
    return `Hello, ${name}!`;
}

console.log(greet('John')); //Hello, John!


//unknown type
let userInput: unknown = 10;
userInput = 'Hello, World!';
userInput  = true;
console.log(userInput); //true

//use any type
function add(a: any, b: any): any {
    return a + b;
}

console.log(add(10, 20));//30
console.log(add('Hello, ', 'World!'));//Hello, World!
