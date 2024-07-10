//45. CARS
//Write a function that stores information about a car in a Object.The function should always receive a manufacturer and a model name. 
function Car(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    features.forEach(function (feature) {
        var _a = feature.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Task 2: It should then accept an arbitrary number of keyword arguements. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
var my_car = Car("Automobili Lamborghini", "Aventador", "Color : Blue ", "Seats : Adjustable", "Year of Model : 2022");
//Task 3: Print the Object that's returned to make sure all the information was stored correctly.
console.log(my_car);
