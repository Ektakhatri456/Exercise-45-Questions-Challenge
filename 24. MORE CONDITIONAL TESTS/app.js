//24. MORE CONDITIONAL TESTS
// You don't have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have atleast one True and one False result for each of the following:
var fruit = "Mango";
var places = ['Karachi', 'Hyderabad', 'Lahore'];
var age = 18;
//Condition 1: Test for Equality and Inequality with strings.
//Test for Equality: (True)
console.log("Is fruit == 'Mango'?");
console.log(fruit == 'Mango');
//Test for Inequality: (False)
console.log("Is fruit != 'Mango'?");
console.log(fruit != 'Mango');
//Condition 2: Test using the lowercase function.
//lowercase conversion: (true)
console.log("Is fruit.toLowercase() == 'mango'?");
console.log(fruit.toLowerCase() == 'mango');
//lowercase conversion: (false)
console.log("Is fruit.toLowercase() != 'mango'?");
console.log(fruit.toLowerCase() != 'mango');
//Condition 3: Numerical tests involving Equality and Inequality, Greater than and Less than, Greater than or equal to, and Less than or equal to.
//Test for Equality:(true)
console.log("Is age == '18'?");
console.log(age == 18);
//Test for Inequality:(false)
console.log("Is age != '18'?");
console.log(age != 18);
//Test for Greater than:(true)
console.log("Is age > '14'?");
console.log(age > 14);
//Test for Less than:(false)
console.log("Is age < '18'?");
console.log(age < 18);
//Test for Greater than or equal to:(true)
console.log("Is age >= '18'?");
console.log(age >= 18);
//Test for Less than or equal to:(false)
console.log("Is age <= '14'?");
console.log(age <= 14);
//Condition 4: Tests using "AND" and "OR" operators.
//test for "AND" operator:(true)
console.log("Is age > 14 && age < 25?");
console.log(age > 14 && age < 25);
//Test for "OR" operator:(false)
console.log("Is age > 20 || age > 30?");
console.log(age > 20 || age > 30);
//Condition 5: Test whether an item is in a array.
//In array:(true)
console.log("Is 'Lahore' in places?");
console.log(2 in places); //here 2 is the length of array
// Not in array:(False)
console.log("Is 'Lahore' not in places?");
console.log(4 in places); //here 4 is the length of array
