//===, ==, =

let a=5;
//console.log(5=5); // This will cause a SyntaxError because the left-hand side of an assignment must be a variable, property, or array element, and 5 is a literal value that cannot be assigned to.
console.log(5==5); // Output: true because the double equals operator (==) checks for value equality and 5 is equal to 5.
console.log(5===5); // Output: true because the triple equals operator (===) checks for both value and type equality, and 5 is equal to 5 and both are of the same type (number).
console.log(5==="5"); // Output: false because the triple equals operator (===) checks for both value and type equality, and while 5 is equal to "5" in terms of value, they are of different types (number vs string), so they are not strictly equal.
console.log(5=="5");// Output: true because the double equals operator (==) checks for value equality and performs type coercion if necessary, so it converts the string "5" to the number 5 before comparing, resulting in true.


console.log(5==5.0); // Output: true because the double equals operator (==) checks for value equality and performs type coercion if necessary, so it converts 5.0 to 5 before comparing, resulting in true.
console.log(5===5.0); // Output: true because the triple equals operator (===) checks for both value and type equality, and 5 is equal to 5.0 in terms of value, and both are of the same type (number), so they are strictly equal.
