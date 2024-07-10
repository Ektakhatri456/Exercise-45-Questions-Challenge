var guest_list = ['fatima', 'Areeka', 'Nirmal', 'Sajida'];
var not_coming = 'Nirmal';
var new_guest = 'Aliza';
guest_list[2] = new_guest;
guest_list.unshift("Aliya", "Dania", "Kubra");
console.log("\n We are sorry, we cannot arrange big table, so only two people are allowed \n\n");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry dear ".concat(remove_guest, ", you are not invited for the dinner \n\n"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Hello! ' + guest_list[i] + ',\n Yes you are still invited for the dinner tonight\n\nThankyou\n\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
