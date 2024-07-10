//15. CHANGING GUEST LIST 
var guest_list = ['fatima', 'Areeka', 'Nirmal', 'Sajida'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Hello! ' + guest_list[i] + ',\n You are invited for the Dinner tonight, \n\nThankyou.\n');
}
var not_coming = 'Nirmal';
var new_guest = 'Aliza';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Hello! ' + guest_list[i] + ',\n You are invited for the Dinner tonight, \n\nThankyou.\n');
}
console.log("Miss. ".concat(not_coming, " will not come at dinner tonight. "));
