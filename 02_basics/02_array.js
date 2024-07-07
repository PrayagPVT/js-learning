const marvel_Heroes = ["thor", "spiderman" , "ironman"]
const dc_heroes= ["superman", "Flash","batman"]

// marvel_Heroes.push(dc_heroes)
// console.log(marvel_Heroes);

// merge krne ke baad output esa aega 
// [ 'thor', 'spiderman', 'ironman', [ 'superman', 'Flash', 'batman' ] ]
// yaha thor ek element hai spiderman ek element hai aur ironman ek element hai bacha  [ 'superman', 'Flash', 'batman' ] yeh pura ek element hai 

// const allHeroes = marvel_Heroes.concat(dc_heroes);
// console.log(allHeroes);
// yeh dono array ko sahi dhang se jod dega iska output yeh hai [ 'thor', 'spiderman', 'ironman', 'superman', 'Flash', 'batman' ]

const all_new_heroes = [...marvel_Heroes, ...dc_heroes]
// console.log(all_new_heroes);
// iska output yeh hai [ 'thor', 'spiderman', 'ironman', 'superman', 'Flash', 'batman' ] isko jayada use krte hai kyuki yeh 2
//  se jayada arrays ko sath me jod skta hai iss process ko spread process kehte hai 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const useable_an_array = another_array.flat(Infinity)
console.log(useable_an_array)
// yaha upar array ke andar bht sare array hai toh usko sahi krne ke liye flat use kr skte hai infinity isiliyr lagaya hai 
// kyuki waha batana hota hai kitne array hai hai ek array ke andar toh waha infinity de diya abb wo khud se handel kr lega 

console.log(Array.isArray("Prayag"));
console.log(Array.from("Prayag"));
// yeh dono ka line wise output hai pehle me pucha hai kya prayag array hai usne false de diya 
// 2sre me bola hai  ki prayag ko array bana do toh usne bana diya hai 
// false
// [ 'P', 'r', 'a', 'y', 'a', 'g' ]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
// [ 100, 200, 300 ] iska output yeh hai yeh bhi values ko jod ke array bana deta hai 