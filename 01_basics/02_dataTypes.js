"use strict"; // treat all JS code as newer version

// alert(3 + 3) we are using node js not browser isiliye yeh error de rha hai

let name = "prayag"
let age = 18
let isLoggedIn = false

// primitive data types 
// number => 2 to power 53 iski limit exceed ho jae toh bigint use kr skte hai 
// string => ""
// boolean => true/false
// null => standalone value
// undefined => variable declare kiya hai par usme kuch value nhi dali hai 
// symbol => unique jab declare krna ho toh use hota hai 

//object iske bare me dusri videos me hai 

// yaha typeof ne output me bata diya ki "prayag" ek string hai 
console.log(typeof "prayag");

// agar type of se null ki value puchenge toh wo object bata dega jo ki language ka error hai 
console.log(typeof null);