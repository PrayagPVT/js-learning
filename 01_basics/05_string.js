const name = "Prayag"
const repoCount = 25

// console.log(name + repoCount + " value"); 
// yeh upar wala utna khas nhi hia jayada use nhi krna hai niche wala use krna hai 

// console.log(`Hello my name is ${name} and my birthdate is ${repoCount}`);
// upar wale ko string interpulation bola jata hai 

const gameName = new String('Prayag-pvt-com')
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

const newString = gameName.substring(0, 4)
// isse apan ek string ke andar ki substring mtlbb ek particular index se dusre index tak print kara skte hai 
console.log(newString)

const anotherString =  gameName.slice(-4, 4)
// isse bhi substring nikal skte hai with negative index 
console.log(anotherString)

const newString1 = "      prayag       "
// yaha gap hai string ke pehle bhi baad me bhi aur output me bhi yeh dikhegi toh trim ki help se yeh gap hat jaegi 
console.log(newString1);
console.log(newString1.trim());

const url  = "https://prayag.com/prayag%20choudhary"
// yaha pe yeh replace function se string ke andar ki value ko replace kr skte hai (output me %20 ki jagah '-' a jaega )
console.log(url.replace('%20' , '-'))

// isse pata kr skte hai ki string ke andar yeh keyword hai kya (iska output true hoga)
console.log(url.includes('prayag'))

console.log(gameName.split('-'))
// iski help se apan string ko split krke array bhi bana skte hai iska output yeh aega jisme string split 
// hoke array bangai hai aur is array ke andar 3 string hai [ 'Prayag', 'pvt', 'com' ]b