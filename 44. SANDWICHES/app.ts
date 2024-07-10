//44. SANDWICHES
//Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the function that is being ordered.

function makeSandwich(...items : string[]){          //using rest parameters that accepts arguements of sandwich items.
    console.log("\nI want these items in my sandwich:")
    items.forEach(singleItem => console.log("   " + singleItem))
    
    console.log("\nYour sandwich is ready, Enjoy!!!")
}    


//Task 2: Call the function three times, using a different number of arguements each time.
makeSandwich("Bread","Mayonnaise", "Tomatoes", "Cabbage", "Cheese");

makeSandwich("Bread","Chicken", "Cheese");

makeSandwich("Bread", "Tomato Sauce")
