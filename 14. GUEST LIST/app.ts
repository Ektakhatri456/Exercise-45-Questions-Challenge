//14. GUEST LIST
//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes atleast three people you'd like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner. 

let guest_list : string[] = ['Fatima', 'Areeka', 'Nirmal', 'Sajida'];
for(let i=0; i<guest_list.length; i++)
{
    console.log('Hello! ' + guest_list[i] +',\n You are invited for the Dinner tonight, \n\nThankyou.\n');

}

//FOR EXERCISE 19:
export {guest_list};