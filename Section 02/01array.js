/*
()  --> Paranthesis   = Used to define function(methodes)
[]  --> Brackets      = Used to define array
{}  --> Braces        = Used to define object

Array: Array is an object storing a collection of items under a single variable name
Array can be accessed through index, index always starts with 0
*/

// let myArr =  [1, 2, 3, 4, 5]  
// // Numbers inside brackets called elements. It can be a number, string, boolean, null, etc or mixed as:
// let mixArr = [10, "Israr", true, null, undefined, BigInt, Symbol]
// console.log(mixArr)

// // You can access a single value from an array as:
// console.log(mixArr[0]) // first element of an array
// console.log(mixArr[5]) // sixth element of an array 

// Other formate of an array
// let Arr1 = new Array(1, 2, 3, 4)
// console.log(Arr1)


// ************** ARRAY METHODES
// let array1 = [1, 2, 3, 4, 5]

// array1.push(9, 2)
// console.log(array1)  // add element at the end of array

// array1.pop(9)
// console.log(array1)  // remove element from the end of array

// array1.unshift(9)
// console.log(array1)  // add element at the start of array

// array1.shift()
// console.log(array1)  // remove element from the start of array

// console.log(array1.includes(9)) // tells the element includes or not if include return true and vice versa

// console.log(array1.indexOf(3))  // tells the index of a specific element
// console.log(array1.indexOf(35)) // always return -1 if the element not exist

// let toStringArray = array1.join()  // convert array into string form, always return new
// console.log(toStringArray)
// console.log(array1.join())
// console.log(typeof toStringArray)

// console.log(array1.slice())

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let array2 = array.slice(0, 6)
console.log(array2)