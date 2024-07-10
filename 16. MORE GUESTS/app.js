//16. MORE GUESTS
//You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Task 1: Start with your program from Exercise 15. 
var guest_list = ['fatima', 'Areeka', 'Nirmal', 'Sajida'];
var not_coming = 'Nirmal';
var new_guest = 'Aliza';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Hello! ' + guest_list[i] + ',\n You are invited for the Dinner tonight, \n\nThankyou.\n');
}
console.log("Miss. ".concat(not_coming, " will not come at dinner tonight. "));
//Task 2: Add one new guest to the beginning of your array.
guest_list.unshift('Aliya', 'Dania', 'Kubra');
//Task 3: Add one new guest to the middle of your array.
var middle_index = Math.floor(guest_list.length / 2);
guest_list.splice(middle_index, 0, "Ume-Farwa");
//Task 4: Use append() to add one new guest to the end of your list.
guest_list.push('Zehra');
for (var i = 0; i < guest_list.length; i++) {
    //Task 5: Add a print statement to the end of your program informing people that you found a bigger dinner table.
    console.log('Hello! ' + guest_list[i] + ',\n You are invited for the Dinner tonight, we found a big table, so we are inviting three more people on dinner. \n\nThankyou\n\n');
}
console.log("Miss. ".concat(not_coming, " will not come at dinner tonight. "));
//Task 6: Print a new set of invitation messages, one for each person in your list. 
console.log("Updated list of guests:");
guest_list.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
