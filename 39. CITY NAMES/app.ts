//39. CITY NAMES
//Write a function called city_country() that takes in the name of a city and its country. 
function city_country(city : string, country : string ) : string{
    return `${city} , ${country}`;
}

//Task: The function should return a string formatted like this: "Lahore", "Pakistan". Call your function with atleast three city-country pairs, and print the value that's returned.
console.log(city_country("Mumbai", "India"));

console.log(city_country("Hala", "Pakistan"));

console.log(city_country("Beijing", "China"));

