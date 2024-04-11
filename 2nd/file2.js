"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let person_name = "umair";
//toUpperCase
console.log(person_name.toLocaleUpperCase());
//toLowweCase
console.log(person_name.toLocaleLowerCase());
//titleCase
let words = person_name.split(" ");
let titleCaseName = "";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toLocaleUpperCase() + words[i].slice(1).toLocaleLowerCase();
    console.log(titleCaseName);
}
