function getTotal(a, b) {
    return a + b;
};

var num1 = 1;
var num2 = 2;

var total = getTotal(num1, num2);
console.log(total); // 3

function getDistance(mph, h) {
    return mph * h
}

var mph = 60;
var h = 3;
var distance = getDistance(mph, h);
console.log(distance); // 180

//first-class functions

function addTwoNumbers(c, d) {
    console.log(c + d)
}
function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNumber() { 
    return 42
 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNumber
}

addTwoNumbers(getNumber(), getNumber())

/*This works because functions in JavaScript are truly first-class citizens, which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc. */

// Higher-order functions

function addTwoNumbers(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNumbers(specificNumber, specificNumber);
addTwoNumbers(specificNumber, randomNum);

//Pure functions and side-effects

