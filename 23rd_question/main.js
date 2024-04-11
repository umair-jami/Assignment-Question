"use strict";
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
Object.defineProperty(exports, "__esModule", { value: true });
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "Fortuner";
console.log("Test 1: Is car == 'Fortuner'? I predicted true ");
console.log(car == 'Fortuner');
//test 2
let name = "Umair";
console.log("test 2: I predicted True");
console.log(name == "Umair");
//test 2
let num = 5;
console.log("test 3:I predicted true");
console.log(num >= 5);
//test 3
let Force_unit = "Newton";
console.log("test 4:I predicted true");
console.log(Force_unit == "Newton");
//test 5
let dish = "Rice";
console.log("test 5:I predicted true");
console.log(dish == "Rice");
//False pridected
let num1 = 10;
let num2 = 5;
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
let condition1 = true;
let condition2 = false;
console.log("Is condition1 && condition2? I predict False.");
console.log(condition1 && condition2);
//testinf using array
let array = [1, 2, 3, 4, 5];
console.log("Is 9 in the array? I predict False.");
console.log(array.includes(9));
// Test whether an item is not in an array
console.log("Is 10 not in the array? I predict False.");
console.log(!array.includes(10));
//for string
let str1 = "hello";
let str2 = "world";
console.log("Is str1 == 'umair'? I predict False.");
console.log(str1 == 'umair');
