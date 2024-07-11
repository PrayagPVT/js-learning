// console.log("A")
// console.log("N")
// console.log("U")
// console.log("J")
// abb yaha sabko console log krna padega isse better hai ki hum functions bana le jisko hum kitni bhi baar khin bhi use kr le 

// yaha function banaya hai aur output bhi nikala hai
function sayMyName(){
    console.log("A")
    console.log("N")
    console.log("U")
    console.log("J")
}
sayMyName()
// output
// A
// N
// U
// J

// yaha ek aur function banaya hai function me number1 aur number2 parameters hai aur call krte time (3,4) arguments hai 
function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers(3, 4)


// *****************************************
const result = addTwoNumbers(3,8)
console.log("Result :",  result);
// yaha 2 baar output aya pehla const result ka aur dusra console log ka console log ka output undefined hai kyuki humne upar wale 
// function me thodi galatiu ki hai jo niche new function me sahi kr di hai 
// 11
// Result : undefined

function AddTwoNumbers(number1,number2){
    let results = number1 + number2
    return results
    // or it can be written as 
    // return number1 + number2
}

const results = AddTwoNumbers(8,110)
console.log("Result :",  results); 
console.log(AddTwoNumbers(8,110));
// abb function ke nam se output nhi dega 43 aur 44 dono line likhni padegi ya fer sirf 46 

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Prayag"))
// (Prayag just logged in ) is output 

// lets suppose abb agar hum yaha input de hi nhi toh kya hoga 
console.log(loginUserMessage())
// (undefined just logged in) yeh aega output me isko solve krne ke liye if likhna padega


function loginUserMessage1(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage1())
// this is the output jo niche hai 
// Please enter a username
// undefined

function loginUserMessage2(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2())
// sam just logged in is the output of line 79
console.log(loginUserMessage2("Anuj"));
// Anuj just logged in
// yeh output aega agar apan input value nhi denge toh default value jo set hai line number 72 me sam wo execute hogi aur agar input
// value denge toh wo print hogi 


// ******************************************SUPPOSE KRO KI APNE KO NHI PATA KI KITNE NUMBER AENGE CALCULATE KRNE KE LIYE UPAR WALE 
// FUNCTION ME 2 PARAMETER LAGAE HAI LINE NUMBER 36 ME PAR AGAR PATA NHI HO KI KITNE NUMEBRS AENGE PLUS KRNE KE LIYE TOH IS NICHE WALE
// FUNCTION KO USE KRENGE
// YAHA ... REST OPERATOR HAI 
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500));
// [ 200, 400, 500 ] output 

const user = {
    username: "Prayag",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)
// Username is Prayag and price is 199 output 


const myNewArr = [200, 300, 400, 500]

function returnsecondValue(getArray){
    return getArray[1];
}
// upar wale function me myNewArr pass nhi krna hai kyuki waha dusra array bhi pass kr skte hai hume function ka argument pass krna
// hai jo ki getArray hai line no 120 me dikh jaega esa kyu hai
// console.log(returnsecondValue(myNewArr));
// output is 300 
console.log(returnsecondValue([200,300,400,500]));
// output is 300 