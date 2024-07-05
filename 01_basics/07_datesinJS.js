let myDate = new Date()
// Date is a object in javaScript
// sirf date ko console log krenge toh output smjh nhi aega isiliye usko tostring me convert kiya hai 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// in sab ka line wise output
// Fri Jul 05 2024 09:06:53 GMT+0000 (Coordinated Universal Time)
// Fri Jul 05 2024
// 2024-07-05T09:06:53.422Z
// 2024-07-05T09:06:53.422Z
// 7/5/2024, 9:06:53 AM

// let myCreatedDate = new Date(2024, 6, 5)
// console.log(myCreatedDate.toDateString())
// (output hai yeh myCreatedDate ka )Fri Jul 05 2024
let myCreatedDate = new Date(2024, 6, 5, 5, 3)
// console.log(myCreatedDate.toLocaleString())
// (7/5/2024, 5:03:00 AM) upar wale ka output

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// iska output yeh hai (1720170892221) milisecond me aya hai 
// console.log(Math.floor(Date.now()/1000));
// isse mili second seconds me convert ho jaenge 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
// 2024-07-05T09:19:49.958Z
// 6
// 5
// 5
// inka linewise output yeh hai 

newDate.toLocaleString('default',{
    weekday:"long"
})
// isse local string ko customize kr skte hai example date numeric chie 