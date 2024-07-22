const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (accumulator,currentValue){
//     console.log(`acc: ${accumulator} and currvalue ${currentValue}`);
//     return accumulator + currentValue
// },0)
// console.log(myTotal);
// output is 
// acc: 0 and currvalue 1
// acc: 1 and currvalue 2
// acc: 3 and currvalue 3
// 6

const myTotal = myNums.reduce((accumulator,currentValue) => (accumulator+currentValue) ,0)
console.log(myTotal);
// ouput is 6

const shoppingCart = [
    {
        itemName :"js course",
        price: 2999
    },
    {
        itemName :"Pythnon course",
        price: 999
    },
    {
        itemName :"mobile dev course",
        price: 5999
    },
    {
        itemName :"Data science course",
        price: 12999
    },
]

const priceTopay = shoppingCart.reduce((accumulator,item) => accumulator + item.price,0)
console.log(priceTopay);
// ouput is
// 6
// 22996