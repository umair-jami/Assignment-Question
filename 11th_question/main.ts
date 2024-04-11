// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let friends_name:string[]=['umair','umar','Hassnain']
let message:string="Nice to meet you!!"
for(let name of friends_name){
    console.log(`${message} ${name}`)
}


//with forEach loop
friends_name.forEach(name => {
    console.log(`${message} ${name}`)
});

export{}