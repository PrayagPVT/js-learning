const myObject = {
    js: 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift: 'swift by apple'
}

// this is for in loop 
for (const key in myObject) {
   console.log(key);
}
// output is js
// cpp
// rb
// swift

for (const key in myObject) {
    console.log(myObject[key]);
 }
//  output is
// javascript
//  c++
//  ruby
//  swift by apple

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// output is 
// js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

const programming = ["Js", "rb","py","java","cpp"]

for (const key in programming) {
   console.log(key);
}
// output isFinite
// 0
// 1
// 2
// 3
// 4

for (const key in programming) {
    console.log(programming[key]);
 }
//  output isFiniteJs
//  rb
//  py
//  java
//  cpp

const map = new Map()
map.set('IN',"India")
map.set('US',"Unites states of America")
map.set('FR',"France")

for (const key in map) {
    //  console.log(key);
}
// for in loop se bhi map iterate nhi ho skta 