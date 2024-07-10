//41. MAGICIANS
//Make a array of magician's names. Pass the array to a function called show_magicians(). Which prints the name of each magician in the array. 
var magicians_names = ["David Blaine", "David Copperfield", "Doug Henning", "Harry Houdini"];
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
show_magicians(magicians_names);
