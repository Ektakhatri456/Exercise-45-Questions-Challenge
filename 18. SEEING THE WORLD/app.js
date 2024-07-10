//18. SEEING THE WORLD
//Think of atleast five places in the World you'd like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.   
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Task 1: Print your array in its original order/form.
var places = ['Dubai', 'New zealand', 'Abottabad', 'South Korea', 'Hyderabad'];
console.log('original order: ' + places);
//Task 2: Print your array in alphabetical order without modifying the actual list. 
console.log('alphabetical order: ' + __spreadArray([], places, true).sort());
//Task 3: Show that your array is still in its original order by printing it.
console.log('original order: ' + places);
//Task 4: Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse order: ' + __spreadArray([], places, true).sort().reverse());
//Task 5: Show that your array is still in its original order by printing it again.
console.log('original order: ' + places);
//Task 6: Reverse the order of your list. Print the array to show that its order has changed.
console.log('Reverse order:' + __spreadArray([], places, true).sort());
//Task 7: Reverse the order of your list again. Print the list to show it's back to its original order.
console.log('Reverse order: ' + __spreadArray([], places, true).sort().reverse());
