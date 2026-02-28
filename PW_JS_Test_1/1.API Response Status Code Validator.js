const statusCode = 200;

switch (statusCode) {
  case 200:
    console.log("OK");
    break;
  case 201:
    console.log("Pass");
    break;
  case 301:
    console.log("Warning");
    break;
  case 400:
    console.log("Fail");
    break;
  case 401:
    console.log("Unauthorized");
    break;
  case 403:
    console.log("Forbidden");
    break;
  case 404:
    console.log("Not Found");
    break;
    case 500:
    console.log("Internal Server Error");
    break;
    default:
    console.log("Default Status Code");
}