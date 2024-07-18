const userEmail = "prayag@.ai"

// yaha bina comparison ke man liya hai ki value true hi hai 
if(userEmail) {
    console.log("Got user email");
}
else{
    console.log("Not got useremail");
}
// output is Got user email 

// falsy value 
// niche di hui sari values ko falsy value mana jata hai mtlbb default me inko false mana jat ahi 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// yaha single ya double quotes ke andar koi bhi value likhe toh wo truthy value hai aur falsy value 
// ke baad jo bhi bachi hai wo bhi truthy values hai
// "0", 'false', " ", [], {}, function(){}