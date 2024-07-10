//27. ALIEN COLORS # 3
//Turn your if-else chain from Exercise # 25-26 into an if-else chain.

//Task 1: If the alien is Green, print a message that the player earned 5 points.
//(Version 1)
let alien_color : string = "Green"
if(alien_color == "Green"){
    console.log("(Version 1) Congratulations!, you have earned 5 points.")
}

//Task 2: If the alien is Yellow, print a message that the player earned 10 points.
else if(alien_color == "Yellow"){
    console.log("Congratulations!, you have earned 10 points.")
}

//Task 3: If the alien is Red, print a message that the player earned 15 points.
else if(alien_color == "Red"){
    console.log("Congratulations!, you have earned 10 points.")
}



//Task 4: Write three versions of this program, making sure each message is printed for the appropriate color alien.
//(Version 2)
let alienColor = "Yellow";

if(alienColor == "Green"){
    console.log("Congratulations!, you have earned 5 points.")
}
else if(alienColor == "Yellow"){
    console.log("(Version 2) Congratulations!, you have earned 10 points.")
}
else if(alienColor == "Red"){
    console.log("Congratulations!, you have earned 5 points.")
}

//(Version 3)
let AlienColor = "Red";
if(AlienColor == "Green"){
    console.log("Congratulations!, you have earned 5 points.")
}
else if(AlienColor == "Yellow"){
    console.log("Congratulations!, you have earned 10 points.")
}
else if(AlienColor == "Red"){
    console.log("(Version 3) Congratulations!, you have earned 15 points.")
}
