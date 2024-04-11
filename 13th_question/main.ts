// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list:string[]=['Umair','umar','Zubair']
let message:string=`Hy you are inviting to dinner at my farm House`

//1st method
for(let guest of guest_list){
    console.log(`${guest} your are invited to dinner at my farm house`)
}

//2nd method 
guest_list.forEach(guest =>{
    console.log(`${guest} ${message} `)
})


export{}