let index  = 0
while(index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2
}
// output is 
// value of index is 0
// value of index is 2
// value of index is 4
// value of index is 6
// value of index is 8
// value of index is 10

let myArray = ["flash" , "batman" ,"superman"]
let arr = 0 ;
while (arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1;
}
// output is 
// value is flash
// value is batman
// value is superman


// do mtlbb oehle kam hoga fer condition check hogi 
let score  = 1;
do {
    // console.log(`score is : ${score}`);
    score++;
} while (score <= 10);
// output is 
// score is : 1
// score is : 2
// score is : 3
// score is : 4
// score is : 5
// score is : 6
// score is : 7
// score is : 8
// score is : 9
// score is : 10


let score1  = 11;
do {
    console.log(`score is : ${score}`);
    score++;
} while (score <= 10);
// output is (score is : 11) yaha isiliye aya kyuki pehle console log hua output a gaya fer uske baad condition check hui isiliye
// loop ruk gaya

