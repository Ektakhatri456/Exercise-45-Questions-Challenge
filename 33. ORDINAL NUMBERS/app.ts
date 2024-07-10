//33. ORDINAL NUMBERS
//Ordinal numbers indicate their position in a array. such as 1st or 2nd. Most Ordinal numbers end in th, except 1,2 and 3.

//Task 1: Store the numbers through 1 to 9 in a array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Task 2: Loop through the array.[using for-loop]
for(let oneNumber of numbers){
    let ordinal_ending : string;

//Task 3: Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

if(oneNumber === 1){
    ordinal_ending = "st"
}
else if(oneNumber === 2){
    ordinal_ending = "nd"
}
else if(oneNumber === 3){
    ordinal_ending = "rd"
}
else{
    ordinal_ending = "th"
}

console.log(`${oneNumber}${ordinal_ending}`)

}