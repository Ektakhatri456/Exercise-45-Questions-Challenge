//31. NO USERS 
//Add an if test to Exercise 30 to make sure the list of users is not empty.
let userNames : string[] = ["Erica","Alishba","Fatima","Laiba","Admin"]

if(userNames.length === 0){
    console.log("Your array is empty,We need to find some users!")
}
else{

    userNames.forEach(oneUser=>{
        if(oneUser.includes ("Admin")){
            console.log(`Hello ${oneUser}, would you like to see a status report?\n`)
        }
        else{
            console.log(`Hello ${oneUser}, thankyou for logging in again.\n`)
        }
    })
}


//Task 1: If the list is empty, print the message: We need to find some users!
userNames = []
if(userNames.length === 0){
    console.log("Your array is empty, We need to find some users")
}
else{
    userNames.forEach(oneUser=>{
        if(oneUser.includes ("Admin")){
            console.log(`Hello ${oneUser}, would you like to see a status report?\n`)
        }
        else{
            console.log(`Hello ${oneUser}, thankyou for logging in again.\n`)
        }
    })
}


//Task 2: Remove all of the usernames from your array, and make sure the correct message is printed.

userNames = []