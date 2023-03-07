// Custom multiplication table from 0 to 9
for (var firstNum = 0; firstNum < 10; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++){
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

// Custom division table
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j)
    }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

/*Exercise 1

In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below. 

Inside the loop, write an if-else statement, which will check the following conditions:

First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

For all the remaining values of i, your code will console log just the value of i.
*/

for(var i = 1; i <= 10; i++){
    if(i == 1) {
        console.log("Gold medal")
    } else if(i == 2) {
        console.log("Silver medal")
    } else if(i == 3) {
        console.log("Bronze medal")
    } else {
        console.log(i);
    }
}

/*
Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question.

Note: You'll need three separate cases for the three medals, and a default case for all other values of the i variable.*/

for(var i = 1; i <= 10; i++){
    switch(i) {
        case 1:
            console.log("Gold medal");
        break;
       case 2:
            console.log("Silver medal")
        break;
           case 3: 
        console.log("Bronze medal")
        break;
            default:
        console.log(i);
    }
}
