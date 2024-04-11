"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician1 = [
    "Merlin",
    "Gandalf",
    "Hermione",
    "Dumbledore",
    "Zatanna",
    "Morgana",
    "Luna Lovegood",
    "Dr. Strange",
    "Circe",
    "Neville Longbottom",
];
function show_magicians(magician) {
    for (let name of magician) {
        console.log(name);
    }
}
show_magicians(magician1);
