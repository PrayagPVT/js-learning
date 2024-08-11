const deccripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(deccripter);

const chai = {
    name: 'ginger chai',
    price: '250',
    isAvailable: true,

    orderChai: function(){
        console.log('chai nhi bani');
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// output 
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

// yaha humne niche yuski property badal di jese ki output me dikh rhas hai 
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// output 
// {
    // value: 'ginger chai',
    // writable: false,
    // enumerable: false,
    // configurable: true
// }

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}