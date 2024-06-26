// const let var yaha pe memory ke andar assign hote hai aur accoountid , accountemail, accountpassword yaha pe memory ka nam hai 
// const change nhi ho skta kyuki wo constant hai 
const accountId = 144553
// variable 2 type se declare ho skte hai let and var 
let accountEmail = "anujpatellive@gmail.com"
// var ko use nhi krenge because of issue in block scope and functional scope
var accountPassword = "12345"
accountCity = "Jaipur"

// yaha const ko change krna chaha nhi hua 
// accountId = 2

accountEmail = "hre@com"
accountPassword = "54321"
accountCity = "pithampur"
// console.log se output ata hai 
console.log(accountId);

// consoletable se bht sare variables ka sath me output la skte hai 
console.table([accountId, accountEmail, accountPassword, accountCity])