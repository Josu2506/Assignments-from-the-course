console.log(a + b); // variables a && b are not declared
console.log("This line is never reached") // this line is never reached and this statement looks to be or free.

throw new ReferenceError(); // force and error to be thrown

try {
    console.log(a + b)
} catch (err) {
    console.log(err)
    console.log('There was an error')
    console.log('The error was saved in the error log')
}
console.log("My program does not stop")

try {
    throw new ReferenceError();
} catch (err) {
    console.log(err)
    console.log('There was a Reference Error')
}
console.log("My program does not stop")