//21. TYPESCRIPT OBJECT
//Think of something you could store in a Typescript Object.
//Write a program that creates Objects containing these items.

interface item {
    Name : string 
    Price : number
}
const book: item = {
    Name : "Essential Typescript",
    Price : 500
}
const shoes : item = {
    Name : "Nike shoes",
    Price : 3000
}
console.log(`book name : ${book.Name}, Price : ${book.Price}`);

console.log(`shoes name : ${shoes.Name}, Price : ${shoes.Price}`);