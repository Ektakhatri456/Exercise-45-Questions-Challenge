//45. CARS
//Write a function that stores information about a car in a Object.The function should always receive a manufacturer and a model name. 

function Car(manufacturer, model, ...features) {
    let car = {
        manufacturer : manufacturer,
        model : model 
    };
    features.forEach(feature => {
        let [key , value] = feature.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}


//Task 2: It should then accept an arbitrary number of keyword arguements. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
let my_car = Car("Automobili Lamborghini", "Aventador", "Color : Blue ", "Seats : Adjustable")

//Task 3: Print the Object that's returned to make sure all the information was stored correctly.
console.log(my_car);