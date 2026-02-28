// element state checker
function checkElementState({ isPresent, isDisplayed, isEnabled }) {
  // determine state
  let state;
  if (isPresent === false) state = "NOT FOUND";
  else if (isPresent === true && isDisplayed === false) state = "HIDDEN";
  else if (isPresent === true && isDisplayed === true && isEnabled === false) state = "DISABLED";
  else state = "READY";

  // severity using ternary + logical operators
  const severity = (isPresent === false)
    ? "CRITICAL"
    : ((isDisplayed === false || isEnabled === false) ? "WARNING" : "OK");

  // recommended QA action
  let action;
  if (state === "NOT FOUND") action = "Investigate locator or page load; fail the test if required.";
  else if (state === "HIDDEN") action = "Try wait/scroll/ensure visibility or mark as flaky.";
  else if (state === "DISABLED") action = "Check preconditions or skip/handle disabled control.";
  else action = "Proceed to interact (click/type)";

  console.log("State:", state);
  console.log("Severity:", severity);
  console.log("Action:", action);
  return { state, severity, action };
}

// Example usages:
checkElementState({ isPresent: true,  isDisplayed: true,  isEnabled: true  }); // READY
checkElementState({ isPresent: true,  isDisplayed: true,  isEnabled: false }); // DISABLED
checkElementState({ isPresent: true,  isDisplayed: false, isEnabled: false }); // HIDDEN (severity WARNING)
checkElementState({ isPresent: false, isDisplayed: false, isEnabled: false }); // NOT FOUND (severity CRITICAL)