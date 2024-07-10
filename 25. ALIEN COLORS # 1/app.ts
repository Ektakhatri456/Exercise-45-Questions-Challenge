//25. ALIEN COLORS # 1
//Imagine an alien was just shot down in a game. Create a variable called 'alien color' and assign it a value of 'green', 'yellow', or 'red'. 

let alien_color : string = "Green";

//Task 1: Write an if statement to test whether the alien's color is Green. If it is, print a message that the player just earned 5 points.
if(alien_color = "Green"){
    console.log("Congratulations!, you have earned 5 points.");
}

//Task 2: Write another version of this program that passes the if test and another fails. 
//(The version that fails will have no output.)

alien_color = "Yellow";
if(alien_color = "Green"){
    console.log("Congratulations!, you have earned 5 points.")
}