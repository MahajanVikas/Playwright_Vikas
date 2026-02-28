const maxattempts = 5;
let attempts = 0;
let success = false;

do {
    attempts++;
    const rand = Math.random();
    success = rand > 0.6; // Simulate a 30% chance of success
    console.log(`Attempt ${attempts}: ${success ? "Success" : "Failure"}`);
} while (!success && attempts < maxattempts);

if (success) {
    console.log("API call succeeded!");
} else {
    console.log("API call failed after maximum attempts.");
}