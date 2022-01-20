// Block scope example
if(true){
    var a=34;
    let b=45;
    const c=65;
}

console.log(a); //var is a function scoped
/* 
    console.log(b); cant be use because let is block scoped
    console.log(c); cant be use because const is block scoped  
*/

/*
   var is a function scoped variable. It can be accessed outside of the block scope.
    let and const are block scoped variable. They can be accessed only in the block scope.
*/