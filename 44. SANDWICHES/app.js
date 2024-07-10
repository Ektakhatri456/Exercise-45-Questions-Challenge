//44. SANDWICHES
//Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the function that is being ordered.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nI want these items in my sandwich:");
    items.forEach(function (singleItem) { return console.log("   " + singleItem); });
    console.log("\nYour sandwich is ready, Enjoy!!!");
}
//Task 2: Call the function three times, using a different number of arguements each time.
makeSandwich("Bread", "Mayonnaise", "Tomatoes", "Cabbage", "Cheese");
makeSandwich("Bread", "Chicken", "Cheese");
makeSandwich("Bread", "Tomato Sauce");
