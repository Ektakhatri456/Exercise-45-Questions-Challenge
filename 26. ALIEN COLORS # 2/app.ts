//26. ALIEN COLORS # 2
// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

let alien_color : string = "Green";

//Task 1: If the alien's color is Green, print a statement that the player just earned 5 points for shooting the alien. 
if(alien_color = "Green"){
    console.log("Congratulations!, you have earned 5 points for shooting the alien.");
}

//Task 2: If the alien's color isn't Green, Print a statement that the player just earned 10 points.
if(alien_color == "Yellow"){
    console.log("Congratulations!, you have earned 5 points for shooting the alien.");
}
else{
    console.log("Congratulations!, you have earned 10 points.");
}

//Writ one version of this program that runs the if block and another that runs the else block.
//For 'if' block: 
alien_color = "Red";
if(alien_color == "Red"){
    console.log("Congratulations!, you have earned 15 points.")
}
else{
    console.log("you have earned enough points.")
}

//For 'else' block: 
alien_color = "Yellow"
if(alien_color == "Red"){
    console.log("you have earned enough points.")
}
else{
    console.log("Congratulations!, you have earned 20 points.")
}