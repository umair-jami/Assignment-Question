// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let person_name:string="\t \n Umair Ramzan \t \n"

console.log("Name without white spaces",person_name)

//After strinping White spaces

let stripe_name:string=person_name.trim()

console.log("Name without white spaces", stripe_name)

export {};
