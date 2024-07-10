//38. CITIES
//Write a function called describe_city() that accepts the name of the city and its country.
//Task 1: The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.

function describe_city(city : string , country : string = "Pakistan"){
    console.log(`${city} is in ${country}.`)
} 


// Task 2: Call your function for three different cities, atleast one of which is not in the default country.
describe_city("Karachi");

describe_city("Hyderabad");

describe_city("Islamabad");

describe_city("Delhi","India");