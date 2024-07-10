"use strict";
//14. GUEST LIST
//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes atleast three people you'd like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ['Fatima', 'Areeka', 'Nirmal', 'Sajida'];
exports.guest_list = guest_list;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Hello! ' + guest_list[i] + ',\n You are invited for the Dinner tonight, \n\nThankyou.\n');
}
