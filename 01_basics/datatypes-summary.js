// JavaScript is dynamically typed language 
// js is dynamically typed language because
// example 
const score = 100 
//  (yaha apan ne bataya nhi ki value numbers me hai fer bhi javascript ko pata hai )
// kis tarah se data ko memory me rakha jata hai aur access kiya jata hai us basis pe data ke 2 types hai 

// Primitive
// There are 7 types of primitive data types (all primitive data types are call by value isme data ki copy banti hai )
// 1 => String
// 2 => number
// 3 => null
// 4 => Boolean
// 5 => undefined (variable declare hai par abhi value nhi di hai )
// 6 => Symbol (kisi bhi value ko unique banane ke liye symbol use kiy ajata hai )
// How to declare symbol
  // const id = symbol('123')
// 7 => BigInt (integer se badi value ko store krne ke liye big int use hota hai ) 

// Non-primitive (reference type)
// 1 => Array 
// Example of array =>
    const heroes = ["shaktiman", "naagrraj" , "doga"]
//  arrays ko square bracket me likhte hai 
// 2 => Objects
// Example of objects 
      let myObj = {
        name :"prayag",
        age : 22,
      }
//  kurli braces ke andar likhte hai key value pair me 
// 3 => Functions 
// Example of function => 
const myFunction = function(){
    console.log("hello world");
}


// Return typeof of variables in java script

// PRIMITIVE DATA TYPES
// 1 => String => string
// 2 => number => number
// 3 => null => object
// 4 => Boolean => boolean
// 5 => undefined => undefined
// 6 => Symbol => symbol
// 7 => BigInt => bigint

// NON-PRIMITIVE TYPE 
// 1 => arrays => Object
// 2 => Function => Function 
// 3 => object => object



// *****************************************************************************MEMORY*********************************
// STACK primitive me use hoti hai (copy milta hai)
// HEAP (non primitive) (reference milti hai)

let myNameIs = "PrayagPatel"
let AnotherName  = myNameIs
AnotherName = "Anujpatel"

console.log(AnotherName)
console.log(myNameIs)

// abb yaha pehle ka output Anujpatel ara hai aur dusre ka prayag patel kyuki
//  anothername ki ek alag copy ban gai hai aur uske andar value store hai isiliye isko stack memory bolenge

let userOne = {
  email: "prayag@gmail.com",
  upi : "gpay"
}

let userTwo = userOne
userTwo.email = "anuj2gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

// yaha dono ke andar anuj2gmail aega kyuki reference milga heap memory ka 

// At the end yeh bol skte hai ki Stack memory me copy banti hai jo ki change ho skti
//  hai lekin Heap memory me reference milta hai jo ki change nhi ho sklta hai  