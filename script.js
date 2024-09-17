// CHAPTER 12 TO 13.......


// QUESTION NO 1

let input = 'A'; 
let asciiCode = input.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
    console.log("The input is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
    console.log("The input is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log("The input is a lowercase letter.");
} else {
    console.log("The input is neither a number nor a letter.");
}



// QUESTION NO 2
let num1 = 5; 
let num2 = 10; 

if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else if (num2 > num1) {
    console.log("The larger number is: " + num2);
} else {
    console.log("Both numbers are equal.");
}


// QUESTION NO 3

let num = +prompt("Enter a number:"); 


if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else if (num === 0) {
    console.log("The number is zero.");
} else {
    console.log("Invalid input.");
}


// QUESTION NO 4
let char = prompt("Enter a character:"); 

char = char.toLowerCase();


if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(true); 
} else {
    console.log(false); 
}


// QUESTION NO 5

let correctPassword = "SOFTWARE_DEVELOPER";


let userPassword = prompt("Enter your password:");


if (userPassword === "") {
    console.log("Please enter your password.");

} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");

} else {
    console.log("Incorrect password.");

}


// QUESTION NO 6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);



// QUESTION NO 7
let time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");


if (time >= 0 && time < 1200) {
    console.log("Good morning! The time is " + time + " AM.");
} else if (time >= 1200 && time < 1300) {
    console.log("Good afternoon! The time is " + time + " PM.");
} else if (time >= 1300 && time <= 2359) {
    console.log("Good evening! The time is " + time + " PM.");
} else {
    console.log("Invalid time format! Please enter time between 0000 and 2359.");
}





