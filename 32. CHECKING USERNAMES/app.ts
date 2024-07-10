//32. CHECKING USERNAMES
//Do the following to create a program that simulates how websites ensure that everyone has a unique username.

//Task 1: Make a list of five or more usernames called current_users.
let current_users : string[] = ["Asifa", "Usman", "Ali", "Raheema", "Zehra"]

//Task 2: Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users : string[] = ["Maria", "Hooria" , "Fariha" , "Zehrish", "Usman"]

//Task 3: Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//Task 4: Make sure your comparison is case insensitive. If 'john' has been used, 'JOHN' should not be accepted.

new_users.forEach(new_one_user =>{
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already been used. Please enter a new username.`)
    }
    else{
        console.log(`${new_one_user} is available.`)
    }

})


