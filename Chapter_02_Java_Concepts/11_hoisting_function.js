//Step 1: Function Declaration
function getUserStatus() {

    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

//Step 2: Calling of the function
getUserStatus()

//behind the scenes, JavaScript engine does the following:
// function getUserStatus() { // Memory Creation Phase
//     var status_code; // Memory Creation Phase 
//     console.log(status_code); // Code Execution Phase - Output: undefined
//     status_code = "Active"; // Code Execution Phase
//     console.log(status_code); // Code Execution Phase - Output: Active
// }