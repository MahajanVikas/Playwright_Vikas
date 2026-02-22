console.log(greeting); // Output: undefined
var greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

//behind the scenes, JavaScript engine does this:
// var greeting; // Memory Creation Phase
// console.log(greeting); // Output: undefined
// greeting = "Hello, World!"; // Code Execution Phase
// console.log(greeting); // Output: Hello, World!


//simple example of hoisting with variables
console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10       