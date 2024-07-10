//43. UNCHANGED MAGICIANS
//Start with your work from Exercise 42.
//Task 1: Call the function make_great() with a copy of the array of magician's names. 
var magicians_names = ["David Blaine", "David Copperfield", "Doug Henning", "Harry Houdini"];
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Task 2: Because the original array will be unchanged, return the new array and store it in a separate array. 
var Copy_magicians_names = magicians_names.slice();
var Copy_Great_magicians = make_great(Copy_magicians_names);
//Task 3: Call show_magicians() with each array to show that you have one array of the original names and one array with 'The Great' added to each magician's name.
console.log("\nOriginal names:\n");
show_magicians(magicians_names);
console.log("\nCopied names:\n");
show_magicians(Copy_Great_magicians);
