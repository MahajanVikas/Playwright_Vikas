const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let passed = 0;
let failed = 0;
let skipped = 0;

for(let i=0;i<testResults.length;i++){
    if(testResults[i]=="pass"){
        passed++;
    }else if(testResults[i]=="fail"){
        failed++;
    }else if(testResults[i]=="skip"){
        skipped++;
    }
}

console.log("Total tests: " + testResults.length);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
console.log("Skipped: " + skipped); 

let verdict;
if (passed === testResults.length && testResults.length > 0) verdict = "READY FOR RELEASE";
else if (failed <= 2) verdict = "Minor failures. Review before release.";
else verdict = "BLOCK RELEASE";

console.log("Test Report");
console.log("-----------");
console.log("Total tests:", testResults.length);
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("Skipped:", skipped);
console.log("Pass rate:", (passed / testResults.length * 100) + "%");
console.log("Verdict:", verdict);