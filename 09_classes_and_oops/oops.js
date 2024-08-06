// this is a literal object 
const user = {
    username : "Prayag",
    LoginCount: 9,
    siggnedIn: true,

    getUserDetails: function(){
        // console.log("Gote user details from database");
        console.log(`username:  ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// new constructor hota hai ya naya context banae ke akm aata hai 
// const promiseOne = new Promise()
// const date = new Date

function User(username, LoginCount, isLoggedIn){
    // yaha pe this variable hai jo upar banaya hai aur right side wali jo function me parameter diye hai 
    this.username = username
    this.LoginCount = LoginCount
    this.isLoggedIn = isLoggedIn

    return this
}

// const userOne = User("prayag",12, true)
// const userTwo = User("chai aur code",11,false)
// console.log(userOne);
// console.log(userTwo);

// output
// username: 'chai aur code',
// LoginCount: 11,
// isLoggedIn: false

// username: 'chai au/r code',
// LoginCount: 11,
// isLoggedIn: false

// dono ka output same hai 
// yaha console log one kiya toh bhi dono ka output same ara hai kyuki values overwrit hori hai

const userOne = new User("prayag",12, true)
const userTwo = new User("chai aur code",11,false)

console.log(userOne);
console.log(userTwo);

// output
// User { username: 'prayag', LoginCount: 12, isLoggedIn: true }
// User { username: 'chai aur code', LoginCount: 11, isLoggedIn: false }

// ********* new leyword ****

// jese hi hum new keyword use krenge toh ek naya empty object create hota hai jisko instace bolte hai 
// step1 = naya object create 
// step2 = constructor function hota hai wo call hota hai new keyword ke karan hota hai 
// step3 = this keyword ke andar sare arguments inject hojate hai 
// step4 = me humko function ke andar mil jayte hai  