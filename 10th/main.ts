// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.



let friends_name:string[]=['umair','umar','Hassnain']
//with for of loop
for(let name of friends_name){
    console.log(name)
}


//with forEach loop
friends_name.forEach(name => {
    console.log(name)
});

export{}