"use strict";
//29# FAVORITE FRUIT:
//Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//Task 1: Make an array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Strawberries", "Mangoes", "Bananas"];
//Task 2: Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as 'You really like bananas!'.
if (favorite_fruits.includes("Strawberries")) {
    console.log("I really like Strawberries.");
}
if (favorite_fruits.includes("Mangoes")) {
    console.log("I really like Mangoes.");
}
if (favorite_fruits.includes("Bananas")) {
    console.log("I really like Bananas.");
}
if (favorite_fruits.includes("Oranges")) {
    console.log("I really like Oranges.");
}
