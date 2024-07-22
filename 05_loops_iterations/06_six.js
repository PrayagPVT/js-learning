// const coding = ["js", "ruby","java","python","cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);
// output is
// ruby
// java
// python
// cpp
// undefined
// yaha usne item ki toh value de di par values nhi di kyuki for each loop value ko return nhi krta hai 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) =>{
//     return num > 4
// })
// output is [ 5, 6, 7, 8, 9, 10 ]line number 19 me explitly return likhna pada kyuki waha pehle bracket laga aur uske andar curlly
//  bracket laga hai jab bhi esa hoga toh explitly return statmenet lagana hoga 


const newNums = []
myNums.forEach((num) =>{
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);
// output is [ 5, 6, 7, 8, 9, 10 ] 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter((bk) => bk.genre === 'History')
// console.log(userBooks);
// output is 
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]
// yaha usne history gener ki sari books de di 

const userBooks1 = books.filter((bk) => { return bk.publish >= 2000})
console.log(userBooks1);
// output is 
//   [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'Book Eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]
// yaha return lagaya kyuki humne curly bracket ke andar likha hai toh scope open ho gaya hai oth return statement lagana padega 

const userBooks3 = books.filter((bk) => { 
    return bk.publish >= 1995  && bk.genre === "History"
})
console.log(userBooks3);

// output is 
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]