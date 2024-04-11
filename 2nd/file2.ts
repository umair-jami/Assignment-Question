// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person_name:String="umair"

//toUpperCase

console.log(person_name.toLocaleUpperCase())

//toLowweCase

console.log(person_name.toLocaleLowerCase())


//titleCase

let words:string[]=person_name.split(" ")

let titleCaseName:string=""

for(let i=0;i<words.length;i++){
    titleCaseName+=words[i].charAt(0).toLocaleUpperCase()+words[i].slice(1).toLocaleLowerCase()  
    console.log(titleCaseName)
}

export {};

