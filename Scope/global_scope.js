//Global Scope 
var h=5;
let i=6;
const j=7;

function globalScope(){
    console.log(h,i,j);  //global variables can be used anywhere in the function
}
console.log(h,i,j); //global variables can be used anywhere in the function



//Automatically global variable
automaticGlobal();
console.log(carName);
function automaticGlobal(){
    carName="Volvo";
}
console.log(carName);

/* 
  assign value in a variable that has not been declared acts as an global variable 
*/
