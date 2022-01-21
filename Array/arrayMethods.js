const fruits=['Banana','Apple','Mango'];

/*
    Array.join()
    -> Join the array elements with a separator
*/
const joinFruits=fruits.join('-'); 
console.log(joinFruits);

/*
    Array.concat()
    -> Concatenate two arrays
*/
const fruits2=['Orange','Pineapple'];
const fruits3=['Guava','Cherry']
const concatFruits=fruits.concat(fruits2,fruits3); 

/*
    Array.splice()
    -> Inserts the elements at the specified position in the array. first parameter is the position and second parameter is the number of elements to be removed.The rest of the parameters are the elements to be inserted.
 */
fruits.splice(2,0,'Lemon','Kiwi'); 

/* 
    Array.slice()
    -> It returns a new array with the elements starting at the specified position and up to, but not   including, the element at the end of the array.
    -> The slice() method creates a new array.
    -> The slice() method does not remove any elements from the source array.
*/
const sliceFruits=fruits.slice(1,3); 

/*
    Array.toString()
    -> It returns the string representation of the array. 
*/
const toStringFruits=fruits.toString(); 


