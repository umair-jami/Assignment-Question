// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guest_list:string[]=['Umair','umar','Zubair']
let missing_guest:string=guest_list.splice(0,1)[0]
console.log(`${missing_guest} is not able to attend dinner`)

//new_guest
guest_list.push("Hassnain")
for(let guest of guest_list){
    console.log(`${guest} your are invited to dinner at my farm house`)
}

export{}