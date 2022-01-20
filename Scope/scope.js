/* 
   Scope determines the accessibility (visibility) of variables.
   JavaScript has 3 types of scope:
    1. Global Scope
    2. Function Scope
    3. Block Scope
*/


var c=3; // global scope;

{
    var a=1; //block scope
}

function fscope(){
    var b=2; // function scope;
}