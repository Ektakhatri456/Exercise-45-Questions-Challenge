//3. NAME CASES:
// Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase. 


//1. Lower Case
let personName:string = "Ekta";
console.log("lowercase:", personName.toLowerCase());

//2.Upper Case
console.log("UpperCase:", personName.toUpperCase());

//3.Title Case
console.log("TitleCase:", personName.replace(/\b\w/g,(char) => char.toUpperCase())); //using regix method

