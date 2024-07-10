//43. UNCHANGED MAGICIANS
//Start with your work from Exercise 42.
//Task 1: Call the function make_great() with a copy of the array of magician's names. 
let magicians_names = ["David Blaine", "David Copperfield", "Doug Henning", "Harry Houdini"]

function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(name));
}
function make_great(magicians : string[]){
    return magicians.map(name => `The Great ${name}`);

}


//Task 2: Because the original array will be unchanged, return the new array and store it in a separate array. 
let Copy_magicians_names = magicians_names.slice()
let Copy_Great_magicians = make_great(Copy_magicians_names)


//Task 3: Call show_magicians() with each array to show that you have one array of the original names and one array with 'The Great' added to each magician's name.
console.log("\nOriginal names:\n")
show_magicians(magicians_names)

console.log("\nCopied names:\n")
show_magicians(Copy_Great_magicians)