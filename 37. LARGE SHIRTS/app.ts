//37. LARGE SHIRTS
//Modify the make_shirt() function so that shirts are large by default with a message that reads 'I love Typescript'.
//Make a large shirt and medium shirt with the default message, and a shirt of any size with a different message. 

function make_shirt(size: string = "Large", print_message: string = "I love Typescript"){
    console.log(`Creating a ${size} sized shirt with the ${print_message} prints on shirt.`)

}
//Call the function with by-default values
make_shirt();

//Call a function with Medium size and default message
make_shirt("Medium")

//Call a function with Small size and different message
make_shirt("Small", "I love HTML")