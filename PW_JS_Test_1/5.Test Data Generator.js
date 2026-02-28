// Generate test users (uses var, let, const)
var globalCounter = 1; // global counter (var)
const roles = ["admin", "editor", "viewer", "tester", "manager"]; // fixed (const)

const generateUsers = (count) => {
  for (let i = 0; i < count; i++) { // loop variable (let)
    let padded = String(globalCounter).padStart(4, "0");
    const userId = `USR-${padded}`;
    const name = `TestUser_${globalCounter}`;
    const email = `testuser${globalCounter}@testingacademy.com`;
    const role = roles[(globalCounter - 1) % roles.length];
    const status = (globalCounter % 3 === 0) ? "INACTIVE" : "ACTIVE"; // every 3rd user INACTIVE
    console.log(`${userId} | ${name} | ${email} | ${role} | ${status}`);
    globalCounter++;
  }
};

// Generate 8 users
generateUsers(8);