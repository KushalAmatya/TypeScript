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


//function that returns void
function sayHello(): void {
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
let result: string | number;
result = 'Hello, World! from union type';
console.log(result); //Hello, World!    

result = 10;
console.log(result); //10




function concatOrAdd<T extends string | number, U extends string|number, V extends string|number>(a: T, b: U, c: V) {
    if (typeof a === 'string' || typeof b === 'string' || typeof c === 'string') {
        return `${a} ${b} ${c}`;
    }
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return a + b + c;
    }
    
}

console.log(concatOrAdd(10, 20, 30)); 
console.log(concatOrAdd('Hello', 33, 'random Stranger'));




type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};



type tupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P;
};

interface Todo {
    title: string;
    description: string;
  }
  
  
  const todo1:Required<Todo> = {
    title: "organize desk",
    description: "clear clutter",
  };
  
  const todo2:Partial<Readonly<Todo>> =  {
    description: "throw out trash",
  };
  
  todo1.title = "Yooo"
  
  console.log(todo1);
  
  type CatName = "miffy" | "boris" | "mordred";
   
  interface CatInfo {
    age: number;
    breed: string;
  }
   
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };
   
  console.log(cats.boris);
  console.log(cats);
  

  //concat
  type Concat<T extends any[], U extends any[]> = [...T,...U] 

  //push
  type Push<T, U> = T extends [...infer Items]?[...Items,U]:never;


  type a=[1,2,3];
  type b = [4]

  type c = Push<a,b>
  
  //includes
  type Includes<T extends readonly any[], U> = {
    [x in T[number]]: true
  }[U]extends true ? true : false
  
  
//return type 
type MyReturnType<T> = T extends (...args:any[]) => infer x?x:never


//omit
type MyOmit<T, K> = {
    [P in keyof T as P extends K ? never : P]:T[P]
  }




  interface Data {
    name: string;
    age: number;
    email: string;
    location: string
  }
  
  type PartialWithRequiredEmail = Partial<Omit<Data, 'email'>> & { email: Data['email'] };
  
  const dat: PartialWithRequiredEmail = {
    name: "Kushal",
    age: 12,
    email: "kushal@gmail.com" ,
    location: "Nepal"
  };
  

  //type readonly2
  type MyReadOnly2 <T,K> = {
    readonly [P in keyof T as P extends K ? P : never]:T[P]
  } & {
    [P in keyof T as P extends K ? never : P]:T[P]
  }