// for of 

const arr = [1, 2, 3, 4, 5]
// object ka mtlbb yeh hai ki kis chiz ke upar loop lagana hai 
for (const num of arr) {
    // console.log(num);
}
// output is 
// 1
// 2
// 3
// 4
// 5

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}
// output is 
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// gap isiliye hai line no 25 me kyuki hello world ke bich me gap hai

//maps

const map = new Map()
map.set('IN',"India")
map.set('US',"Unites states of America")
map.set('FR',"France")
// console.log(map);
// output isFiniteMap(3) {
//     'IN' => 'India',
//     'US' => 'Unites states of America',
//     'FR' => 'France'
//   }

for (const [key,value] of map) {
    // console.log(key, ':-' , value);
}
// output is 
// IN :- India
// US :- Unites states of America
// FR :- France

const myObject = {
    'game1' : 'NFS',
    'game2':'spiderman'
}

for (const [key,value] of myObject) {
    console.log(key, ':-' , value);
}
// yeh run nhi hoga kyuki object pe iteration possible nhi hai 
// /workspaces/js-learning/05_loops_iterations/03_moreLoops.js:59
// for (const [key,value] of myObject) {
// TypeError: myObject is not iterable