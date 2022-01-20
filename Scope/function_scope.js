// Function scope example
function functionScope(){
    var e=11;
    let f=12;
    const g=13;
    console.log(`e: ${e}, f: ${f}, g: ${g}`);
}
functionScope(); //e: 11, f: 12, g: 13
 
/* 
    console.log(e);
    console.log(f);
    console.log(g); 
*/

/* 
     Outside of the function we can't use any variable declare in the function .
     let var const behave almost same outside of the function.
     Function (local) variables are deleted when the function is completed.
     Function arguments (parameters) work as local variables inside functions.
*/