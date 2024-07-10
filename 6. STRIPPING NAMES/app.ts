//6.STRIPPING NAMES
//Store a person's name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "/t" and "/n" atleast once.  

//Task 1: Print the name once, so the whitespace around the name is displayed. 
let personName : string = `\n\t Ekta Khatri \t\n`;
console.log(personName);

//Task 2: Then print the name after stripping the whitespaces.
let stripped : string = personName.trim();
console.log(stripped);