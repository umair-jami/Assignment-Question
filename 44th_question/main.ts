// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(...items: string[]) {
  console.log("Making a Sandwich with the following items:");
  items.forEach((item) => console.log(item));
}
//First sandwich
make_sandwich("egg", "Seafood");
//secong
make_sandwich("Roast Beef ", "egg", "Seafood");
//third
make_sandwich("Roast Beef ", "egg", "Seafood", "Ham");
