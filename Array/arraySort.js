/*
    Array.sort()
     -> By default, the sort() function sorts values as strings in alphabetical order.
     -> However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1"

*/

const fruits=['Banana','Apple','Mango'];
fruits.sort();

const numbers=[12,100,45,75,123];
numbers.sort();
console.log(numbers); // [ 100, 12, 123, 45, 75 ] 
numbers.sort((a,b)=>{
    return a-b; //for ascending order
    //return b-a; for descending order
})
console.log(numbers); // [ 12, 45, 75, 100, 123 ]


/*
    Array.reverse()
    -> The reverse() method reverses the elements in an array
*/
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.reverse();

/*
 Finding max and min element of an array
*/
const max=Math.max(...numbers);
const min=Math.min(...numbers)

/* 
    Sorting object of array
*/
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
cars.sort(function(a, b){return a.year - b.year});
console.log(cars);

