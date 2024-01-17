// ----------------------------- Assignment -------------------------------------------------------

// ------------------------- Chapter 01 - Alerts --------------------------------------------------
//  1. Alert these following (individually):
// I. First Name
// II. Last Name
// III. Email
// IV. Phone Number
// V. Password
window.alert("Owais");
window.alert("Ali");
window.alert("Owaisali101786@gmail.com");
window.alert("0321314213");
window.alert("abchyx2313");

// 2. Correct this statement: alert"You're learning JavaScript!";
alert("You're learning Javascript!");

// 3. Code an alert statement displaying any message you like.
alert("Hello! My name is Owais and I am learning JavaScript");

// --------------------- Chapter 02 - Variables for Strings ----------------------------------------

//   Chapter 2 (Variables for string)

// 1. Declare any variable in the camelCase format.
var firstName = "Owais ";

// 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
var lName;
lName = "Ali";

// 3. Declare the variable teamName and Alert your Team name.
var teamName = "Pakistan";
window.alert(teamName);

// 4. This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.
var bestMan = "Charlie";
bestMan = "Owais"
console.log(bestMan);

// -------------------------  Chapter 3 (Variables for numbers)   ----------------------------------------------
// 1. Declare a variable “caseQty”
var caseQty;

// 2. Assign to the variable caseQty, which has already been declared, the value 144.
caseQty = 144;

// 3. Rewrite this statement so the variable can be used in a math operation. var num = "9";
var num = "9";

// 4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers.
var sumOfTwoNumbers;
sumOfTwoNumbers = 3 + 4;

// 5. What is the value of orderTotal?
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
// Answer = 110

// 6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.
var myName = 3;
myName = myName + 6;

// -----------------------------  Chapter 4 (Variable names Legal and Illegal)  ------------------------------
//    1. Correct this statement.
// var product cost = 3.45;
var productCost = 3.45;

// 2. Rewrite this using camelCase.
//    var Nameofband;
var nameOfBand;  

// 3. In a single statement declare a legally-named variable and assign a number to it.
var myName1 = "Owais Ali";

// 4. Declare a variable that is a combination of your first and last names. Use camelCase.
var myFullName = "Owais Ali";

// 5. List the legal and Illegal Variables

// Legal Variables:
// myName
// myName1
// $name = "Owais"

// Illegal naming:
// 1name = "Owias "
// My Name = "Owais"

// -------------------  Chapter 5 (Math Expression I)  ---------------------------------------------

// 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
// Modulus Operator

// 2. What is the value of num?
// var num = 20 % 6;
// Answer = 2

// 3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.
var largeNum = 1000 * 2000 ; 

// 4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable
var num1 = 1000;
var num2 = 600; 
var result = num1 - num2;

// -----------------------------------  Chapter 6 (Math Expression II)  ----------------------------------

// 1. Code a short form of x = x + 1; Use either of the two legal expressions.
// x+=1
// ++x

// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
// expression --x

// 3. 
var x = 50;
var y = x++;
// What is the value of y? -> The value of y is 50

// 4. 
var y = 50;
var z = --y;
// What is the value of z?  -> 49

// 5. In a single statement, decrement num and assign its original value to newNum.
// newNum = --num

// 6. In a single statement add 1 to a variable and assign its original value to another variable.
// newNum1 = ++num

// 7. Assign a number value to a variable.
var num111 = 5;
// Increment the variable.
num111 = ++num111;
// Display the new value in an alert
alert(num111);

// 5. Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.
var aNum = 12 % 7;

// 6. Code an alert that displays the result of a multiplication on 2 numbers.
alert(3 * 6);

// ---------------------------  Chapter 8 (Concatenating Text Strings) ------------------------------------------

//  1. var num = "2" + "2";
//  What is the value of num? Include quotation marks.  -> 22
//  2.
// message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// Alert the statement      -> Hello,Dolly
// 3. 
alert("33" + 3);  // -> 333
// What message displays in the alert box?
// 4. Write an alert that displays the concatenation of the two parts of
// "Pakistan Zindabad".
alert("Pakistan " + "Zindabad");
// 5. Write a statement that assigns to a variable the concatenation of
// a string with a number
alert("Owais"+2)
// 6. Assign strings to two variables. Then concatenate them and assign
// the result to a third variable.
var fName = "Owais";
var lName = "Ali";
fullName = fName + lName;

// ---------- Chapter 9 Prompts ----------

// 1. Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
var firstName = prompt("Enter first name: ");

// 2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
var country = prompt("Country: ", "China");

// 3. Correct this statement
// var yourName = prompt(Enter Your Name");
// corrected -> var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a default input.
var yourName = prompt("Enter Your Name", "Jane Doe");

// 5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable.
var fVar = "Enter your name: ";
var sVar = "Owais Ali";
var yourName = prompt(fVar,sVar);

// 6. Display a prompt, including both a message and a default response. Display the user's response in an alert.

var userResponse = prompt("What is your favorite color?", "Blue");
alert(userResponse);

// ----------  Chapter 10 (if statments)  ----------------------------

// 1.var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself
var city = "Karachi";
if (city === "Karachi") {
console.log("The City Of Lights");
}

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.
if (x === y) {
var z = prompt("Value of z?");
}

// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")
if (ZipCode === "10010") {
alert("Karachi");
} else {
alert("Please write correct city");
}

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;
if (x === 10) {
x = 1;
}

// ------------ Chapter 11 (Comparison Operators) -----------------

// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)
if (x !== y) {
}

// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.
if (x >= y) {
}

// 3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.
if (x !== 10) {
x = 10;
}

// 4. Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.
if (12 !== 10) {
alert("Congratulations!");
}

// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No
// match"

var firstName = prompt("Enter your first name");
if (firstName !== "Owais") {
alert("No match");
}

// -------------- Chapter 12 (if...else and else if statements) ---------

// 1. Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.
if (x >= y) {
alert("x is greater than or equal to y");
} else {
alert("x is less than y");
}

// 2. Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)

var marks = prompt("Enter your marks: ");
if (marks >= 90) {
alert("Grade A");
} else if (marks >= 80) { 
alert("Grade B");
} else if (marks >= 70) {
alert("Grade C");
} else {
alert("Grade D");
}

// 3. This is the if statement that begins the code.
// if (a === 10) {
// alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is
// ____
// Note: Try this by yourself
if (a === 10) {
alert("a is 10");
} else {
alert("The correct value of a is 10");
}

// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.

var city = prompt("Enter a city: ");
if (city === "Karachi") {
alert("Yes it is Karachi");
} else if (city === "Lahore") {
alert("Yes it is Lahore");
} else {
alert("No it is not Karachi or Lahore");
}


// ----------------  Chapter 13 (Testing sets of conditions) -------------------

// 1. Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.

if (a === b && c === d) {
// Code block if condition is true
}

// 2. Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.
if (a === b || c === d) {
// Code block if condition is true
}


// 3. Code the first line of an if statement that tests whether  I. name is either "Hamza" or "Arsalan". II. age is Less than 60.

if (name === "Hamza" || name === "Arsalan" && age < 60) {
// if condition true
}

// 4. Declare two variables and assign them number values. If the first variable is less than the second variable or greater than the second variable, display an alert.
var num1 = 10;
var num2 = 20;
if (num1 < num2 || num1 > num2) {
alert("Condition met");
}

// 5. Declare 2 variables. Assign one of them your first name and the  other one your last name.  Code 2 prompts, asking for your first and your last name.  If your answers match the two variables, display an alert.

var firstName = "John";
var lastName = "Doe";
var userFirstName = prompt("Enter your first name: ");
var userLastName = prompt("Enter your last name: ");
if (userFirstName === firstName && userLastName === lastName) {
alert("Name matched!");
}

// ---------------  Chapter 14 (If statements nested)  ----------------------------

// 1. Code an if statement enclosing a nested if. If password is not  empty, then check if password is not greater than 5 , then display  an alert that says "Password must be greater than 5" if greater  than 5 then Alert "OK".

if (password !== "") {
if (password.length <= 5) {
alert("Password must be greater than 5");
} else {
alert("OK");
}
}

// 2. Try this statement by yourself  
// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }

// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) {
// if (c === "Max") {

// alert("OK");
// }
// }

// 4. Declare two variables and assign them the same number value. Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.
var num1 = 10;
var num2 = 10;
if (num1 === num2) {
if (num1 <= num2) {
alert("Test passed");
}
}

// -------------------------  Chapter 15 (Array I)  -----------------------------------

// 1. Declare an empty array.
var myArray = [];

// 2. Code an array with 1 string element
myArray = ["Owais"];
// 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index
alert(alphabet[2]);

// 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.
alphabet.length;

// 5. Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.
var myArray = ["Owais"];
myArray[1] = "Arsalan";
alert(myArray[1]);

// ----------------------   Chapter 17 - 20 (for Loops) ---------------------------------

// 1. Write a statement in which loop is to run 10 times.
for (var a =0 ; a<10 ; a++){
console.log(a);
}

// 2. Code the first line of a for loop with the usual counter name, usual  starting value, and usual increment. Run it 12 times using <= to  specify how many loops.
for (var a = 1; a <= 12; a++) {
console.log(a);
}

// 3. What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them. for var i = 0 i <= 4 i++ Note: Complete this statement by yourself
for (var i=0; i<=4; i++){
console.log(i);
}

// 4. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.
for (var a = 1; a < 101; a++) {
// code inside the loop
}

// 5. Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.
for (a=3; a>0 ; a--){
//code
}

// 6. The statement assigns the number of elements in the array to the variable.
var myArray = [1, 2, 3, 4, 5];

// 7. Set a variable named “flag” with an initial Boolean value of your choice.
var flag = true;

// 8. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.
for (let i = 0; i < pets.length; i++) {
    // code inside the loop
  }

// 9. Coding Exercise: Set a for loop to run 10 iterations. On the second iteration, display the counter in an alert. (It should be 1.) Break out of the loop.
for (let i = 0; i < 10; i++) {
    if (i === 1) {
      alert(i);
      break;
    }
  }

// 10. Create an array which contains user names  Code a prompt with the message "Enter first name". The user's response is assigned to firstName. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names. Code an if statement that tests the presense of (user name) in an array. If user name match Alert that "Enter". if not then alert ("Please write correct user name").
var userNames = ["John", "Jane", "Doe"];
var firstName = prompt("Enter first name");
for (var i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) {
    alert("Enter");
    break;
  } else {
    alert("Please write correct user name");
    break;
  }
}

// 11. Complete this code to display an alert if a match isn't found.
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
// if (userInput === list[i]) {
// alert("Match found");
// matchFound = true;
// break;
// }
// };

var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
    matchFound = true;
    break;
    }
    else{
        alert("Match not found");
    }
};

// 12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
// var secondArr = [1, 2, 3, 4, 5, 6];
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array firstArr.
// In the scope of main loop Code the nested loop. Limit the number
// of nested loops by the number of elements in the array
// secondArr.
// After that concatenate the both loops.
// Expected Output:
// a1
// a2
// a3
// a4
// ...
// f6
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var a=0; a<firstArr.length; a++){
    for (var i=0; i<secondArr.length; i++){
        console.log(firstArr[a] + secondArr[i]);

    };
};

// ---------------------------------------------  The End --------------------------------------------