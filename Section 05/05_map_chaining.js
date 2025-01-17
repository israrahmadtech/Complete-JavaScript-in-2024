const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const map1 = numbers.map( (index) => {
    // return index >= 5   // Cannot be filtered
    return index + 10
})
// console.log(map1)


// function functionName()   == This is called Function Signature



// ++++++++++++++++++++   Chaining:   ++++++++++++++++++++
const tenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Chaining:   tenNums.map().map().filter()

const Chaining = tenNums
                        .map( (num) => num + 10 )
                        .map( (num) => num + 1)
                        .filter( (num) => num > 15)

console.log(Chaining)