function  testHoisting() {
    if (true) {
        console.log(a); // Output: undefined
        var a = "Vikas";
        console.log(a); // Output: Vikas
    }
}