// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified

function show_magicians(magician: string[]) {
  magician.forEach((name) => console.log(name));
}
function make_great(magician: string[]) {
  return magician.map((name) => `The Great ${name}`);
}
let magician1: string[] = [
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

let magician2 = make_great(magician1);
show_magicians(magician2);
