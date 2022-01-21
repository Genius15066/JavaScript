/*
    * An array is a special variable which can hold more   than one value. Array is a high level and list like object.
    * JS array can hold different data types.
    * Types of array is object.
    * In JavaScript, arrays use numbered indexes.In JavaScript, objects use named indexes.
*/

// Creating an array
const fruits=['Banana','Apple','Mango']; //  It is a common practice to declare arrays with the const keyword
const flower=new Array(); // Another way to create an array. It is not recommended to use this method.

// Accessing of array elements:
let firstElement=fruits[0];
let lastElement=fruits[fruits.length - 1];

//Loop over an array 
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

fruits.forEach((item)=>{
    console.log(item);
})

fruits.push('Orange'); // Adding an element to the end of the array
fruits.pop() // Removing an element from the end of the array

fruits.unshift('Guava'); // Adding an element to the beginning of the array
fruits.shift() // Removing an element from the beginning of the array

console.log(fruits)

let removedItem=fruits.splice(1,2); // Removing an element from the array by position and number of elements to be removed
console.log(removedItem);

//Copy an array
const cars=['Volvo','BMW','Toyota'];
const newCars=[...cars]; // Spread operator copy
// this type of copy is called shallow copy. 

//undefined holes in array
const numbers=[1,2,3];
numbers[5]=5;
console.log(numbers[3],numbers[4]) // undefined undefined
console.log(numbers[5]); // 5

//important tips 
const a=new Array(5); // Array of five undefined elements
const b=new Array(1,2) //Array of two elements
const c=new Array(1,2,3); //Array of three elements

console.log(Array.isArray(b));//checking of array or not
