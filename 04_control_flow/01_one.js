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

// Nullish Coalescing Operatoe (??) : null undefined 
// yeh operator null aur undefined value ke liye banya hai agar database se null ya undeifed value a jae toh code me dikkat a skti 
// hai isiliye yeh abanaya hai ?? 2 question mark ke baad jo bhi value denge wo output me a jaegi
let val1
val1 = null ?? 10
// val1 = undefined ?? 15
console.log(val1);
// output 
// 10
// 15

// Ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// output is more than 80 