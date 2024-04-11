"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let placesToVisit = ["Pakistan", "Naran", "Kagan", "America", "Turkey"];
console.log(`in Original order: `, placesToVisit);
//alphabetical order
console.log("alphabetical order", placesToVisit.slice().sort());
//simple order
console.log(`in Original order: `, placesToVisit);
// in reverse alphabetical
console.log("in reverse alphabetical", placesToVisit.slice().sort().reverse());
//simple order
console.log(`in Original order: `, placesToVisit);
//reverse order
placesToVisit.reverse();
console.log("reverse order", placesToVisit);
//again reverse order
placesToVisit.reverse();
console.log("reverse order again", placesToVisit);
//sort the array in alphabatical order
placesToVisit.sort();
console.log("alphabatical order", placesToVisit);
//reverse alphabatical order
placesToVisit.sort().reverse();
console.log("reverse alphabatical order", placesToVisit);
