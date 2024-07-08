// singleton


// yaha symbol declare kiya hai 
const mySYM = Symbol("key1")

// object literal object declare krne ka tarika hai 
// Object.create
// yaha object declare kiye hai 
const JsUser = {
    name:"Prayag",
    "Full Name" : "Prayag Patel",
    // yaha symbol ko object me declare kiya hai mySym ko [] brackets me declare kiya hai kyuki wo as a symbol me aegi output me dikh jaega output me
    //  ek baar output check kr lena line number 55
    [mySYM]: "mykey1",
    age : 20,
    Location : "Pithampur",
    email :"anujpatel@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
// in do tarike se inko use kr skte hai ya output le lste hai lekin agar value string me di ho jo ki full name me di hai toh
// woh 1st way se access mhi ho skti usko 2nd way se hi access krna padega 
// by defaukt wo name , age , location sabko string ki tarah hi treat krega lekin jab apan string laga denge tab wo sirf 
// second way se hi access kr skte hai jese
console.log(JsUser["Full Name"])

// symbol ko ek tarike se hi run kr skte haai 
console.log(JsUser[mySYM])

// line wise output of all console till here 
// anujpatel@gmail.com
// anujpatel@gmail.com
// Prayag Patel
// mykey1

JsUser.email = "prayag@gmail.com"
// Object.freeze(JsUser)
// yaha freeze kr di hai value iske baad change nhi hoga value agar apan krenge toh bhi output me dikh jaega 
JsUser.email = "patel@gmail.com"
console.log(JsUser)

// OUTPUT
// {
//     name: 'Prayag',
//     'Full Name': 'Prayag Patel',
//     age: 20,
//     Location: 'Pithampur',
//     email: 'prayag@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

JsUser.greeting = function(){
    console.log("Hello JS user")
}
console.log(JsUser.greeting());
// ouput hai yeh (Hello JS user )

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());
// Hello Js User, Prayag yeh iska output yaha apan ne hello js user ke baad this.name kiya hai jo ki object me hai toh yeh value waha se
// refer hui hai