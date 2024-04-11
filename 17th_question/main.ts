// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

let guest_list:string[] =[ 'Raza', 'Umair', 'Hassan', 'umar', 'Hassnain', 'Ubaid' ]

console.log("we are sorry to say that we can just invite two Persons for dinner")

while(guest_list.length>2){
    let removedGuest=guest_list.pop()
    console.log(`Sorry, ${removedGuest}, but we can't invite you to dinner.`)
}

for(let guest of guest_list){
    console.log(`${guest} you are still invited at dinner`)
}
// Remove the last two names from the list to have an empty list
while(guest_list.length>0){
    guest_list.pop()
}
//empty list
console.log(guest_list)


export{}



