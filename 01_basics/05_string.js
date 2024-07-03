const name = "Prayag"
const repoCount = 25

// console.log(name + repoCount + " value"); 
// yeh upar wala utna khas nhi hia jayada use nhi krna hai niche wala use krna hai 

// console.log(`Hello my name is ${name} and my birthdate is ${repoCount}`);
// upar wale ko string interpulation bola jata hai 

const gameName = new String('Prayag')
// is type se bhi string declare kr skte hai 

// console.log(gameName[0]);
// jese array me index se pata klr skte hai wese hi isme bhi kr skte hai 
// console.log(gameName.__proto__);

// console.log(gameName.length);
// lenght se length pata kr skte hai 
// console.log(gameName.toUppercase());
// isee puri string ko uppercase me convert kr skte hai 
console.log(gameName.charAt(2));
// isee yeh pata kr skte hai ki konse index pe konsi value hai 

console.log(gameName.indexOf('y'))