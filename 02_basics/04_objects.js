// const tinderUser2 = new Object()
// console.log(tinderUser2)
// iske upar wala singleton object hai 

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "Prayag@gmail.com",
    // yaha object ke andar objects banae hai 
    fullname: {
       userfullname : {
        firstname: "prayag",
        lastname:"patel"
       }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)
// line wise output hai yaha apan objects ke andar jake bhi value nikal skte hai kyuki objects ke andar bhi objects hai 
// { userfullname: { firstname: 'prayag', lastname: 'patel' } }
// { firstname: 'prayag', lastname: 'patel' }
// prayag

const object1 = {1: "a" , 2: "b"}
const object2 = {3: "a" , 4: "b"}
const object4 = Object.assign({}, object1,object2)
console.log(object4);
// output
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// yaha 2 objects ko combine kiya hai 
// yaha pehle {} curly brackets lagaya  hai iska mtlbb yeh hai ki {} curly brackets target hai aur sare objects source 
// hai aur curly brackets ka mtlbb object hota hai  

// is type se bhi objects ko combine kr skte hai
const object3 = {...object1, ...object2}
console.log(object3);
// output
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// yuaha array ke andar objects banae hai 
const users = [
    {
        id: 1,
        email: "anuj@123gmail.com"
    },
    {
        id: 1,
        email: "anuj@123gmail.com"
    },
    {
        id: 1,
        email: "anuj@123gmail.com"
    },
]
users[1].email
// ese value access kr skte hai array ke andar ke objects ki 

console.log(tinderUser)


// yaha humne objects ko array me convert kr diya aur yaha pe keys nikali hai  
console.log(Object.keys(tinderUser));
// output aur output me keys hai values nhi dhayan se dekhna tinder user ko upar line no 5 me
// [ 'id', 'name', 'isLoggedIn' ]

// yaha pe va;ues nikali hai 
console.log(Object.values(tinderUser));
// output
// [ '123abc', 'sammy', false ] 


// yaha pe entries nikali hai
console.log(Object.entries(tinderUser));
// output yaha pe har key aur value ka ek alag array ban gaya hai dikh jaega output me
// [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ] 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// output yaha pucha hai ki kya tinderUser me isLoogedIn hai toh ans true aya
// true