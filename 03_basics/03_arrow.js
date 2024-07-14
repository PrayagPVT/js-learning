// BROWSER KE ANDAR GLOBAL OBJECT WINDOW HAI 
const user = {
    username: "Prayag",
    price : 999,


    welcomeMessage: function(){
        // this current context ko refer krta hai mtlbb username ko refer krega 
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
// output sam, welcome to website 

console.log(this);

// output of all console log till here 
// Prayag, welcome to website
// {
//   username: 'Prayag',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam, welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// {}

// function chai(){
//     let username = "prayag"
//     console.log(this.username)
// }

// chai()

// const chai = function () {
//     let username = "prayag"
//     console.log(this.username)
// }
// chai()
// output undefined 

const chai =  () => {
    let username = "prayag"
    console.log(this.username)
}
chai()
// output undefined 


// arrow function => is symbol se ban skta hai 

// this is basic arrow function 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(4,5));
// output = 9 


// this is implicit return method mtlbb return statement nhi lagai hai 
// const addTwo = (num1, num2) =>   num1 + num2
// console.log(addTwo(4,5));
// ouyput 9 

const addTwo = (num1, num2) => ({username: "prayag"})
console.log(addTwo(4,5));
// { username: 'prayag' } output 



const myArr = [2, 5, 8, 9]
myArr.forEach()

