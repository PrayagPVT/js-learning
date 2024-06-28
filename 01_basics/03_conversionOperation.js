let score = 33

// conversion ka sidha mtlbb hota hai ki conevert krna value ko jes string ko bool me numbr me object me ya aaray me
// abhi upar wala number 33 hai toh typeof me number dega 
console.log(typeof score);
console.log(typeof (score));

// upar wale 33 ko agar "33" double quotes me likh de toh toh abb wo string ban jaega aur fer uska type of nikalenge toh wo string dega 
// lekin agar us "33" jo double quotes me hai fer bhi usko number bana ho toh niche diya hai ese krke usko number bana skte hai by capital me sirf N aur baki sab small umber i.e Number 
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true = 1;  false =0;

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 = true ; 0=false: => false;
// "prayag" = true; 

// yshs pehle number liya fer usko string banaya fer uska output nikala toh 33 hi mila lekin type of me wo string ban jaega 
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);