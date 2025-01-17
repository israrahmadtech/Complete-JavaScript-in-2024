const array1 = [1, 2, 3, 4, 5, 6]
//  1 + 2 + 3 + 4 + 5 + 6 = 21     // it will does like this, give result 

const sumWithInnitial = array1.reduce( (storeSum, currentValue) => {
    return storeSum + currentValue
})
// console.log(sumWithInnitial)

// it can also be written as
const initialValue = 0
const sumWithInnitial2 = array1.reduce( (storeSum, currentValue) => {
    return storeSum + currentValue
}, initialValue)
// console.log(sumWithInnitial2)

// it can also be written as
const sumWithInnitial3 = array1.reduce( (accumulator, currentValue) => accumulator + currentValue)
// console.log(sumWithInnitial3)

// it can also be written as
const initialValue2 = 0
const sumWithInnitial4 = array1.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue)
// console.log(sumWithInnitial4)


// applying reduce using simple function:
const array = [1, 2, 3]
const sum = array.reduce(function (accu, currVal){
    console.log(`accu: ${accu},  currVal: ${currVal}`)
    return accu + currVal
}, 0)
console.log('sum = ',   sum)

const arrray = [
    {price: 1000},
    {price: 2000},
    {price: 3000}
]

shopingCart = arrray.reduce( (storeAddition, obj) => storeAddition + obj.price , 0)
console.log(shopingCart)