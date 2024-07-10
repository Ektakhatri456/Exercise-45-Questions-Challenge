//30. HELLO ADMIN
//Make an array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log into a website. Loop through the array, and print a greeting to each user:
var userNames = ["Erica", "Alishba", "Fatima", "Laiba", "Admin"];
//Task 1: If the username is 'admin', print a special greeeting, such as Hello admin, would you like to see a status report?
userNames.forEach(function (oneUser) {
    if (oneUser.includes("Admin")) {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
    }
});
//Task 2: Otherwise, print a generic greeting, such as Hello Eric, thankyou for logging in again.
