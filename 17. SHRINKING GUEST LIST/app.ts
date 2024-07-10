//17. SHRINKING GUEST LIST
//Start with your program from Exercise 16. 
let guest_list : string[] = ['fatima', 'Areeka', 'Nirmal', 'Sajida'];
let not_coming : string = 'Nirmal';
let new_guest : string = 'Aliza';
guest_list[2] = new_guest;
guest_list.unshift(`Aliya`,`Dania`,`Kubra`);

//Task 1: Add a new line that prints a message saying that you can invite only two people for dinner.  
console.log(`\n We are sorry, we cannot arrange big table, so only two people are allowed \n\n`);

//Task 2: Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you're sorry you can't invite them to dinner. 
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry dear ${remove_guest}, you are not invited for the dinner \n\n`);
}

//Task 3: Print a message to each of the two people still on your list, letting them know they're still invited.
for(let i=0; i<guest_list.length; i++)
{
    console.log('Hello! ' + guest_list[i] +',\n Yes you are still invited for the dinner tonight\n\nThankyou\n\n');
}

//Task 4: Remove the last two names from your list, so you have an empty list. 
guest_list.splice(0,2)

//Task 5: Print your list to make sure you actually have an empty list at the end of your program.
console.log(guest_list);