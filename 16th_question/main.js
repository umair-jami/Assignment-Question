"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list = ['Umair', 'umar', 'Hassnain'];
console.log("Great we found bigger dinner table");
//new guest in the start of array
guest_list.unshift("Raza");
//new guest in the last of array
guest_list.push("Ubaid");
//new guest in the middle of the array
//we can use there math.floor method to inset item in the center of the array
guest_list.splice(Math.floor(guest_list.length / 2), 0, "Hassan");
//we can also use simple slice method
// guest_list.splice(2,0,"Ali")
guest_list.forEach(guest => {
    console.log(`${guest} you are invited to dinner at farm House`);
});
