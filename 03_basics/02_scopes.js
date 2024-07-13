
// var c = 300
let a = 300

// yaha jo a,b,c variable hai inka kam sirf if ke andar hi hai mtlb inka scope sirf if ke andar hi hai 
// if ke andar hai  block scope hai 

if (true) {
let a = 10
const b = 20
}

// aur if ke bahar jo likha jata hai wo hai global scope 
// abb if global scope ki values le skta hai par hum bahar se if ki value nhi le skte bina return karae
// abb agar apan (a,b) ka output lenge toh print nhi hoga kyuki if ke andar kuch return nhi hora hai lekin c ka output a jaega 

console.log(a);
// console.log(b);
// console.log(c);

// yaha pe agar apan if ke andar se kuch return nhi karaenge aur console log krenge toh global scope me (a) ke andar jo value hai wo
// output me a jaega a ke andar global me 300 hai line number 3 output (300)
if (true) {
    let a = 10
    const b = 20
    console.log("INNER :" ,a);
}
// output
// INNER : 10 
// abb yaha block scope ke anda return hai mtlbb console log hai isiliye uski value aegi aur dusre consolle log me global scope 
// ki value aegi 


// *************************************IMP*********************
// agar inspect krke scope check krenge toh alag hai 
// aur yaha node me scope alag 



// *****************************NESTED SCOPE **************************************

// abb yaha function ke andar function banaya hai toh jo pehla function hai wo andar wale function ko access nhi kr skta 
// lekin andar wala function jo ki two nam ka function hai wo one nam ke  function ko access kr skta hai  kyuki
// two ke liye toh one hi global scope hai par one access nhi kr skta two ko (mtlbb child function parent function ko access kr
// skta hai )
function one() {
    const username = "prayag"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()

if(true){
    const username1 = "prayag"
    if(username1 === "prayag"){
        const website1 = "youtube"
        console.log(username1 + website1);
    }
    // console.log(website1);
    // yaha website1 ka scope hi child entity me hai toh wo parent entity me nhi a skta 
}

// console.log(username1);
// yeh bhi nhi execute hoga kyuki iska scope bhi nhi hai 


// ++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++

function addone(num) {
    return num +   1
}
console.log(addone(5));

const addtwo = function(num){
    return num + 2;
}
addtwo(5)

// yeh dono functions hi hai 