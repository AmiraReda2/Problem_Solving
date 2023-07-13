//  1- Write a program that allow to user enter number then printit
//     Example
//     Input: 5
//     Output: 5


var userN = Number( window.prompt("Enter the number"));
console.log(userN);


//   2- Write a program that take number from user then print yes if that number can divide by 3 
// and 4 otherwise print no
// Example1
// Input: 12 Output Yes 
// Example 2
// Input: 9 Output No

var x = Number(window.prompt("Enter the number "));
 
if(x % 3 == 0 && x % 4 == 0 )
{
    console.log("Yes");
}
else{
    console.log("No");
}



// 3- Write a program that allows the user to insert 2 integers then print the max
// Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10


var x = Number(window.prompt("Enter num1"));
var y = Number(window.prompt("Enter num2"));
 
if(x>y)
{
    console.log(" The number max is :-" + x );
}

else{
    console.log("The number max is :-" + y);
}

// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative 
// Example2
// Input: 10 
// Output positive

var num = Number(window.prompt("Enter The number"));
if( num<0)
{
    console.log("negative");
}
else{
    console.log("positive");
}

// 5- Write a program that take 3 integers from user then print the max element 
// and the min element.
// Example 1
// Input:7,8,5
// Output:
// max element = 8 
// min element = 5

var num1 = Number(window.prompt("Enter num1"));
var num2 = Number(window.prompt("Enter num2"));
var num3 = Number(window.prompt("Enter num3"));

//  نفترض ان اول رقم المستخدم دخله هو اكبر رقم 
// ثم بعد ذلك نقارن الرقمين بالرقم الاول م 
// max لو واحد فيهم اكبر احطه في 

// Max Element
let max = num1;
if(num2>max)
{
   max = num2;
}
 if(num3>max){
    max = num3; 
}
// Min Element
let min = num1;
if(num2<min)
{
   min = num2;
}
 if(num3<min){
    min = num3; 
}
console.log("Max Element = " + max);
console.log("Min Element = " + min);

// 6- Write a program that allows the user to insert integer number then 
// check If a number is even or odd
// 7- Example 1
// Input: 8 
// Output: even
// Example 2
// Input: 7
// Output: odd

var num = Number(window.prompt("Enter num to check if a number is odd or even"));
if(num % 2 == 0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}

// Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
// then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel 
// Example 2
// Input: b
// Output:
// Consonant

var xChar = window.prompt("Enter Any Character");
if(xChar== 'a '|| xChar== 'e' || xChar=='i' ||xChar=='u' || xChar=='O' || xChar=='A' || xChar=='E' || xChar=='I' || xChar=='O '|| xChar=='U')
{
    console.log("vowel");
}
else{
   console.log("Consonant")
}


//9- Write a program that allow user to insert integer then print all numbers between 1 to 
// that’s number
// Example Input 5
// Output 1, 2, 3, 4, 5

var num = Number(window.prompt("Enter The number "));

for( var i = 1 ; i<=num ; i++){
    console.log(i)
}

// ++++++++++++++++++++++++++++++++++++++++++++++فيه مشكله +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
// Example 
// Input: 5 
// Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60

var num = Number(window.prompt("Enter The number "));

// 5+1 + 5*1=10
// 5 + 5*0 = 5
// 5 + 5*1 = 10
// 5+ 5*2 = 15
for( var i = 1; i <= 12 ; i++)
{
    console.log((num * i) + " " + num);
}

// 11- Write aprogram that allows to user to insert number then print all even numbers 
// between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14

var num = Number(window.prompt("Enter The number "));
for(var i =2 ; i<=num ;i+2){
    console.log(i);
}


// 12- Write aprogram that take two integers then print the power
// Example:
// Input: 4 3
// Output: 64
// Hint how to calculate 4^3 = 4 * 4 * 4 =64

var num1= Number(window.prompt("Enter The number1 "));
var num2 = Number(window.prompt("Enter The number2 "));
console.log("Print The power is " + num1**num2);

// 12- Write a program to enter marks of five subjects and calculate total, average and 
// percentage.
//  Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 58
// 90
// 89
// Output:-.Total marks = 435
// Average Marks =87
// Percentage =87

var marks1 = parseInt(prompt("Enter marks of subject 1:"));
var marks2 = parseInt(prompt("Enter marks of subject 2:"));
var marks3 = parseInt(prompt("Enter marks of subject 3:"));
var marks4 = parseInt(prompt("Enter marks of subject 4:"));
var marks5 = parseInt(prompt("Enter marks of subject 5:"));

var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;

var averageMarks = totalMarks / 5;

var percentage = (totalMarks / 500) * 100;

console.log("Total marks = " + totalMarks);
console.log("Average marks = " + averageMarks);
console.log("Percentage = " + percentage);

// 13-Write a program to input month number and print number of days in that 
// month.
// Example:
// Input: - Month Number: 1
//  Output:-. Days in Month: 3


var monthNumber = + prompt("Enter month number:");
var daysInMonth;
switch (monthNumber) {
  case 1:
    daysInMonth = 31;
    break;
  case 2:
    daysInMonth = 28;
    break;
  case 3:
    daysInMonth = 31;
    break;
  case 4:
    daysInMonth = 30;
    break;
  case 5:
    daysInMonth = 31;
    break;
  case 6:
    daysInMonth = 30;
    break;
  case 7:
    daysInMonth = 31;
    break;
  case 8:
    daysInMonth = 31;
    break;
  case 9:
    daysInMonth = 30;
    break;
  case 10:
    daysInMonth = 31;
    break;
  case 11:
    daysInMonth = 30;
    break;
  case 12:
    daysInMonth = 31;
    break;
  default:
    console.log("Invalid month number");
}

if (daysInMonth) {
  console.log("Days in month: " + daysInMonth);
}

// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade 
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F

var physics = + prompt("Enter marks of Physics:");
var chemistry = + prompt("Enter marks of Chemistry:");
var biology = + prompt("Enter marks of Biology:");
var mathematics = + prompt("Enter marks of Mathematics:");
var computer = + prompt("Enter marks of Computer:");

var totalMarks = physics + chemistry + biology + mathematics + computer;
var percentage = (totalMarks / 500) * 100;

var grade;

if (percentage >= 90) {
  grade = "Grade A";
} else if (percentage >= 80) {
  grade = "Grade B";
} else if (percentage >= 70) {
  grade = "Grade C";
} else if (percentage >= 60) {
  grade = "Grade D";
} else if (percentage >= 40) {
  grade = "Grade E";
} else {
  grade = "Grade F";
}
console.log("Percentage: " + percentage);
console.log("Grade: " + grade);

// ******************************** Using switch case*******************************

// 15- Write a program to print total number of days in month Using switch case

var monthNumber = + window.prompt("Enter month number:");
var daysInMonth;

switch (monthNumber) {
  case 1:
    daysInMonth = 31;
    break;
   case 2:
        daysInMonth = 28;
        break;
  case 3:
    daysInMonth = 31;
    break;
    case 4:
        daysInMonth = 30;
        break; 
  case 5:
    daysInMonth = 31;
    break;
    case 6:
    daysInMonth = 30;
    break;
  case 7:
    daysInMonth = 31;
    break;
  case 8:
    daysInMonth = 31;
    break;
    case 9:
        daysInMonth = 30;
        break;
  case 10:
    daysInMonth = 31;
    break;
    case 11:
    daysInMonth = 30;
    break;
  case 12:
    daysInMonth = 31;
    break;
  default:
    console.log("Invalid month number");
}

if (daysInMonth) {
  console.log("Total number of days in month: " + daysInMonth);
}

// 16- Write a program to check whether an alphabet is vowel or consonant 

var alphabet = window.prompt("Enter an alphabet:");
var vowel;
switch (alphabet) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    vowel = true;
    break;
  default:
    vowel = false;
}
if (vowel) {
  console.log(alphabet + " is a vowel");
} else {
  console.log(alphabet + " is a consonant");
}

// 17- Write a program to find maximum between two numbers 

var num1 = + window.prompt("Enter first number:");
var num2 = + window.prompt("Enter second number:");
var maxx;
switch (true) {
  case (num1 > num2):
    maxx = num1;
    break;
  case (num2 > num1):
    maxx = num2;
    break;
  default:
    maxx = "Numbers are equal";
}
console.log("Maximum number: " + maxx);


// 18- Write a program to check whether a number is even or odd
var num = + Window.prompt("Enter a number:");
var even;
switch (num % 2) {
  case 0:
    even = true;
    break;
  default:
    even = false;
}
if (even) 
{
  console.log(num + " is even");
}
else
{
  console.log(num + " is odd");
}


 // 19- Write a program to check whether a number is positive or negative or zero
 var num = + window.prompt("Enter a number:");
switch (true) {
  case (num<0):
    console.log("negative")
    break;
  case (num>0):
    console.log("positive")
    break;
  default:
    console.log("zero")
}


// 20- Write a program to create Simple Calculator

var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var operation = prompt("Enter operator (+, -, *, /):");
var result;
switch (operation) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operator");
}
if (result) {
  console.log("Result: " + result);
}