// array hamesha brackets me likha jata hai [] iske andar
// array hamesha shallow copy banati hai mtlb jo bhi change krenge wo dusre array me bhi change hoga 
// here are some types jisse array declare kr skte hai 
const Myarr = [0, 1, 2, 3, 4, 5]
const Myarr2 = ["Batman","Prayag","Spiderman"]
const Myarr3 = new Array(1,2,3,4)
// yaha brackets add krne ki jarurat nhi hai apne app wo kr lega upar wale type me 
// console.log(Myarr);
// console.log(Myarr[0]);

Myarr.push(6)
// isse push kr skte hai value 
// console.log(Myarr);

Myarr.pop()
// pop se last element pop ho jaega 
// console.log(Myarr);

Myarr.unshift(9)
// unshift se yeh value array ke ekdum starting me lag jaegi jo ki bad practise hai isko jayada use nhi krna hai 
Myarr.shift()
// my shift se first value jo 0 index pe hogi wo hat jaegi

console.log(Myarr.includes(9));
// includes se yeh pata kr skte hai ki kya array me ek particular value hai ya nhi 
console.log(Myarr.indexOf(3));
// index se pata chalega kya yeh Value hai aur agar hai toh uska index batao 

const newArr = Myarr.join()
// join function dono array ko join kr dega 
// console.log(Myarr);
// console.log(newArr);
// join toh ho jaega par jo new array hoga dono ko join krne ke baad wo string me convert ho jaega 

// slice , splice

console.log("A" , Myarr);

const myn1 = Myarr.slice(1, 3)
console.log(myn1)
console.log("B", Myarr)

const myn2 = Myarr.splice(1, 3)
console.log("C", Myarr);
console.log(myn2)

// A [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B [ 0, 1, 2, 3, 4, 5 ]
// C [ 0, 4, 5 ]
// [ 1, 2, 3 ]
// line wise output hai niche explaination hai abb

// sabse pehle jo A , B, C lagaya hai woh sirf array ke age lagay hai yeh dekhne ke liye original array me kuch change hua hai ya nhi 
// slice 1 se lekar 3 tak value dega par wo 3 ko include nhi krega sath me original array manipulate nhi kreaga
// splice 1 se lekar 3 tak value dega par wo 3 ko bhi include krega par major change yeh hoga ki original array se wo value hi hata dega 
// slice splice ka sabse bada difference yahi hai ki slice me original array ko kuch nhi hoga par splice me original array manipulate ho jaega 