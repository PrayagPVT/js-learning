// const myArr = []
// %DebubPrint(myArr)

// array are of two types 
// continious(mtlbb packed), Holey (holley mtlbb hole)

// optimization js me 3 type se hote hai 
// SMI (small integer)
//  packed element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// pscked_smi_element

arrTwo.push(6.0)
// packed_double_elements

arrTwo.push('7')
// packed_elements

arrTwo[10] = 11
// holey_elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// output
// [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
// 11
// undefined

// holes are very expensive in js 

const arrThree = [1,2,3,4,5]
console.log(arrThree[8])

// SMI > DOUBLE > PACKED 
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just three holes. HOLEY_SMI_ELEMENTS

arrFour[0] = '1' // Holey_elemnts
arrFour[1] = '2' // Holey_elemnts
arrFour[2] = '3' // Holey_elemnts

const arrFive = []
arrFive.push('1')
arrFive.push('2')
arrFive.push('3')


const arrSix = [1, 2, 3, 4, 5]
arrSix.push(NaN)
// this is double 

