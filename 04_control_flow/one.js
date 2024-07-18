// < , >, <=, >=, == , != , ===

const isUserLoggedIn = true
const temperature = 41
if (temperature < 50) {
    console.log("It is less than 50");
} else {
    console.log("It is greter than 50");
}
console.log("Executed");
// output 
// It is less than 50
// Executed 


const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}
// abb agar yeh console.log(`User power: ${power}`); bahar likhenge toh output nhi dega kyuki power variable if ke andar banaya hai
// toh woh andar hi rahega 

const balance = 1000
if (balance < 500) {
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 700");
}else{
    console.log("balance is greater than 12000");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoggle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to purchase");
}

if(loggedInFromGoggle || LoggedInFromEmail){
    console.log("Let him cook")
}
// output
// Allow to purchase
// Let him cook