//41. MAGICIANS
//Make a array of magician's names. Pass the array to a function called show_magicians(). Which prints the name of each magician in the array. 
let magicians_names = ["David Blaine", "David Copperfield", "Doug Henning", "Harry Houdini"]

function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(name));
}

show_magicians(magicians_names);
