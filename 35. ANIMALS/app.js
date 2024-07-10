//35. ANIMALS
//Think of atleast three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
var pet_animals = ["Rabbit", "Cat", "Dog"];
//Task 1: Modify your program to print a statement about each animal, such as; A dog would make a great pet! 
for (var _i = 0, pet_animals_1 = pet_animals; _i < pet_animals_1.length; _i++) {
    var onePet = pet_animals_1[_i];
    console.log("A ".concat(onePet, " would make a great pet."));
}
//Task 2: Add a line at the end of your program stating what these animals have in common. You could print a sentence such as: Any of these  animals would make a great pet!
console.log("Any of these animals would make a great pet.");
