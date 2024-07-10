//28.STAGES OF LIFE
//Write an if-else chain that determines a person's age, and then:
var age = 18;
//Task 1: If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("The person is a baby.");
}
//Task 2: if the person is atleast 2 years old but less than 4 years, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
//Task 3: If the person is atleast 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
//Task 4: If the person is atleast 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
//Task 4: If the person is atleast 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
//Task 5: If the person's age is 65 or older, print a message that the person is an elder.
else if (age >= 65) {
    console.log("The person is an elder.");
}
