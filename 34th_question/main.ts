// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizza_flavour: string[] = [
  "Pepperoni.",
  "Supreme.",
  "Hawaiian (Ham & Pineapple)",
];
//just pizza names
for (let flavor of pizza_flavour) {
  console.log(flavor);
}
//sentence with pizza
for (let flavor of pizza_flavour) {
  console.log(`I love to eat ${flavor} pizza`);
}

//console oustside loop

console.log(
  "Pepperoni Pizza: A classic favorite topped with spicy pepperoni slices and a blend of mozzarella cheese"
);
console.log(
  "Supreme Pizza: Loaded with a variety of toppings including meats like sausage and vegetables like bell peppers and olives."
);
console.log(
  "Hawaiian Pizza: A sweet and savory combination of ham and pineapple pieces, often paired with mozzarella cheese."
);

console.log("I really love pizza");
