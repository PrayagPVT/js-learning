const score = 100
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
// 2 fixed se decimal ke baad ki 2 value show hogi 
// console.log(balance.toFixed(2));

const otherNumber = 23.8523

// console.log(otherNumber.toPrecision(3));
// isse iska output 23.9 aega round off kr diya 23.8523

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-In'));
// iska output aega  1,00,000 coma laga dega yeh 


// ******************************************MATHS************************************************************

console.log(Math);
console.log(Math.abs(-4));
// abs mtlb absolute value isse negative integer positive me ho jaega lekin positite negative me nhi hoga 

console.log(Math.round(4.6));
// yeh round of kr dega 
console.log(Math.ceil(4.2));
// yeh ceil hai mtlbb point ke baad kuch bhi value ho yeh usko ek badha dega (output = 5)
console.log(Math.floor(4.9));
// yeh floor hai mtlb point ke baad kuch bhi value ho yeh usko uski number me orund of kr dega (output = 4)

console.log(Math.min(4, 3, 2, 1));
// yeh array me se minimum dega 
console.log(Math.max(4, 3, 2, 1));
// yeh array se maximum dega 

console.log(Math.random());
// math random ke andar value 0 se lekar 1 ke andar a jaega
console.log((Math.random()*10)+ 1);
//  *10 + 1 krne se value 1 se 9 ke bich me aega 

const min = 10
const max = 25

console.log(Math.floor(Math.random() * (max - min + 1) ) + min);
// yaha pe min aur max ke bich kirandom values nikalna hai 
// Math.fllor isiliye kiya hai kyuki yeh decimal value ko hata dega 
// Math.random jo ki 0 se 1 kebich ki value batata hai usme max - min + 1 krr denge toh abb wo 0 se 25 tak ki random values dega
// +min isiliye kiya hai kyuki minimum apne ko 10 se upar value chie toh ans me har bar min + hoga toh random value 10 se 25 ke bich me aegi 
