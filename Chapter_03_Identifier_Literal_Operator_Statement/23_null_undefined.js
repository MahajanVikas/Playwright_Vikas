console.log(null==undefined); // Output: true because null and undefined are considered equal in JavaScript when using the loose equality operator (==).
console.log(null===undefined); // Output: false because null and undefined are not considered equal in JavaScript when using the strict equality operator (===). The strict equality operator checks for both value and type, and since null is of type 'object' and undefined is of type 'undefined', they are not strictly equal.


console.log(null==0);
console.log(null==""); 
console.log(undefined==0);
console.log(undefined==""); 


