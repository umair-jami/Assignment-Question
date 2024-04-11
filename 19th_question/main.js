"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Umair', 'umar', 'Hassnain'];
// console.log("Great we found bigger dinner table")
//new guest in the start of array
guest_list.unshift("Raza");
//new guest in the last of array
guest_list.push("Ubaid");
//new guest in the middle of the array
//we can use there math.floor method to inset item in the center of the array
guest_list.splice(Math.floor(guest_list.length / 2), 0, "Hassan");
//we can also use simple slice method
// guest_list.splice(2,0,"Ali")
// guest_list.forEach(guest =>{
//     console.log(`${guest} you are invited to dinner at farm House`)
// })
console.log("exercise 16 guest list");
console.log(guest_list.length);
