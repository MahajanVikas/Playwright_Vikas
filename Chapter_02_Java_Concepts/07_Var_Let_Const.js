//var, let, const

//var - function scope
var a=10;//global scope
console.log(a);

//defination of function
function printhello(){

    console.log("Hello, World!");
    var a=20;//local scope
    console.log(a);
    if(true){
        var a=30;
        console.log(a);//30   
 }

    console.log("F->",a);
}
//calling the function
printhello();    

//let - block scope
let b=20;//global scope
console.log(b);
function printhello2(){

    console.log("Hello, World2!");
    let b=30;//local scope
    console.log(b);
    if(true){
        let b=40;
        console.log(b);//40   
 }

    console.log("Let->",b);
}  
//calling the function 
printhello2();

//Let does not allow redeclaration in the same scope
//let b=50; //SyntaxError: Identifier 'b' has already been declared
//let b=100;//This is allowed as it is in a different scope

const pi=3.14;//constant variable
console.log(pi);
//pi=3.14159; //TypeError: Assignment to constant variable.
