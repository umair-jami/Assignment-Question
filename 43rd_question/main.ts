// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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

let copy_magician_names: string[] = magician1.slice();
let copy_array = make_great(copy_magician_names);
//original array
console.log("originol array");

show_magicians(magician1);

//coppied
console.log("Coppied array");
show_magicians(copy_array);
