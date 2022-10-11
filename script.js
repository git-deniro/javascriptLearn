/**********************************************************************************
 * Varriables and data types
 */

/*
var surName = 'Yvan Deniro';
console.log(surName);

var test = true;
console.log(test);

var varr;
console.log(varr);
*/

/**********************************************************************************
 * Varriables mutation and type coercion
 */

/*
var firstName = 'john';
var age = 22;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(`${firstName} is a ${age} years old ${job}. Is he married ? ${isMarried}`);

//Varriable mutation
age = 22;
job = 'driver';

alert(`${firstName} is a ${age} years old ${job}. Is he married ? ${isMarried}`);

var lastName = prompt('What is his last name ?');
console.log(firstName + ' ' + lastName);
*/

/**************************************************************************************
 * Basic operators
 */

/*
var year = 2022;
ageJohn = year - 22;
ageDeniro = year - 22;

//Math operators
console.log(ageDeniro);
console.log(year + 4);
console.log(year * 4);
console.log(year / 4);


//logical operators
var johnOlder = ageJohn > ageDeniro;
console.log(johnOlder);  //false

var johnOlder = ageJohn < ageDeniro;
console.log(johnOlder);  //false

var johnOlder = ageJohn == ageDeniro;
console.log(johnOlder);  //true

//typeof operator
console.log(typeof ageDeniro); //number
console.log(typeof 'hello');   //string
var x; console.log(typeof x);  //undefined

//Operator precedence
var now = 2022;
var yearJohn = 1989;
var fullAge = 22;

//multiple operators
var isFullAge = now - yearJohn <= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn; 
var ageMark = 30;
var average = ageJohn + ageMark / 2;
console.log(average);

//Multiple assignements
var x,y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

//More operators
x *= 2; // == x = x * 2;
console.log(x);
*/

/***********************************************************************************
 * Challenge
 */

/*
var heightMark = prompt('Mark enter your height ..');
var massMark = prompt('Mark enter your mass ..');
var massJohn = prompt('John enter your mass ..');
var heightJohn = prompt('John enter your height ..');
var bmiJ = massJohn / (heightJohn * heightJohn);
var bimM = massMark / (heightMark * heightMark);

bigger = bmiJ > bimM;
alert(bigger);
*/

/**
 * if / else statement
 */

// var firstName = 'John';
// var civilStatus = 'single';

// if(civilStatus === 'married'){
//     console.log(`${firstName} is married`);
// } else {
//     console.log(`${firstName} will hopely marry soon..`);
// }

// var isMarried = true;
// if(isMarried){
//     console.log(`${firstName} is married`);
// } else {
//     console.log(`${firstName} will hopely marry soon..`);
// }

// var heightMark = prompt('Mark enter your height ..');
// var massMark = prompt('Mark enter your mass ..');
// var massJohn = prompt('John enter your mass ..');
// var heightJohn = prompt('John enter your height ..');
// var bmiJ = massJohn / (heightJohn * heightJohn);
// var bimM = massMark / (heightMark * heightMark);

// if (bimM > bmiJ)
// console.log("BMI of Mark is bigger than John's BMI");
// else
// console.log("BMI of John is bigger than Mark's BMI");

/********************************************************************************
 * Boolean Logic
 */

// var firstName = 'deniro';
// var age = 22;

// if(age < 13){
//     console.log(`${firstName} 'is a boy'`);
// } else if(age >= 13 && age < 20) { 
//     console.log(`${firstName} is a teenager`);
// } else if(age >= 20 && age <=30) { 
//     console.log(`${firstName} is a small man`);
// } else {
//     console.log(`${firstName} is a man`);
// }

/**
 * Truthy and falsy values and equality operators
 */

// var height = 0;

// if (height || height === 0){
//     console.log('variable is defined');
// } else{
//     console.log('variable is not been defined');
// }

// //Equality operators
// height = 23;
// if (height == '23'){
//     console.log('The == operator does type coercion!');
// }

/**
 * Coding challenge n02
 */

// var johnScore = [89, 120, 103], mikeScore = [116, 94, 123], maryScore = [97, 134 ,105];
// var avgJohn = (johnScore[0] + johnScore[1] + johnScore[2])/3
// var avgMike = (mikeScore[0] + mikeScore[1] + mikeScore[2])/3
// var avgMary = (maryScore[0] + maryScore[1] + maryScore[2])/3

// if (avgJohn > avgMike && avgJohn > avgMary){
//     console.log(`John's team has the heighest score with ${avgJohn}`);
// } else if(avgMike > avgMike && avgMike > avgMary) {
//     console.log(`Mike's team has the heighest score with ${avgMike}`);
// } else {
//     console.log(`Mary's team has the heighest score with ${avgMary}`);
// }