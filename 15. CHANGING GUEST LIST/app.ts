//15. CHANGING GUEST LIST 
//You just heard that any one of your guests can't make the dinner, so you need to send out a new set of invitations. You'll have to think of someone else to invite.

//Task 1: Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can't make it. 

let guest_list : string[] = ['fatima', 'Areeka', 'Nirmal', 'Sajida'];
for(let i=0; i<guest_list.length; i++)
    {
        console.log('Hello! ' + guest_list[i] +',\n You are invited for the Dinner tonight, \n\nThankyou.\n');
        
    }
//Task 2: Modify your list, replacing the name of the guest who can't make it with the name of the new person you are inviting.
    let not_coming : string = 'Nirmal';
    let new_guest : string = 'Aliza';
    guest_list[2] = new_guest;
    for(let i=0; i<guest_list.length; i++)

{
//Task 3: Print a second set of invitation messages, one for each person who is still in your list.
    console.log('Hello! ' + guest_list[i] +',\n You are invited for the Dinner tonight, \n\nThankyou.\n');
}

console.log(`Miss. ${not_coming} will not come at dinner tonight. `);

