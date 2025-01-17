// let score = 300
// console.log(score)
// // If you want to must return the number in Number datatype:
// let balance = new Number(score)
// // or you can declare new as:
// let load = new Number(100)
// console.log(balance)
// console.log(load)

// *********************************************************************************************
// Following methodes/functions can be used for Number Datatype/Prototype

let score = 500
let balance = 100

.1
// Convert Number to string:
// console.log(score.toString())   /// its a function
// // or
// let balance = score.toString()
// console.log(balance)
// console.log(typeof balance)
// // now we know its a string, lets find its length
// console.log(balance.length)

.2
// To get specific value after calculation or to make the value fixed

// console.log(score.toFixed(2))  // the value after toFixed means how much numbers you want after decimal
// console.log(balance.toFixed(5))

.3
// To get a Precised value/number (number of specific characters)
// => it will return a string

// let makeItPrecise1 = 932.746
// let makeItPrecise2 = 932.746
// let makeItPrecise3 = 932.746
// console.log(makeItPrecise1.toPrecision(3)   ) // value round off to 3 significant figures
// console.log(makeItPrecise2.toPrecision(5)) // value round off to 5 significant figures
// console.log(makeItPrecise3.toPrecision(4)) // value round off to 4 significant figures

.4
// To represent a value readable easily (making 1000000 into 1,000,000)
// => it will return a string

// let bigNumber = 10000000000000
// console.log(bigNumber.toLocaleString())
// let trillion = bigNumber.toLocaleString();
// console.log(trillion)
// console.log(typeof trillion)


// *********************************************************************************************
// Following methodes/functions can be used for Math Object

/*
.PI() = Pi
.abs()  = Absolute = convert negative number to positive
.pow()  = Power
.sqrt() = Square root
.round() = Round off the value one time
.random() = To get random values (give default value between 1 and 0)
.hypot() = hypotenuous
*/
// let number1 = 10
// let number2 = -10
// let number3 = 83.15
// console.log(Math.abs(number2))
// console.log(Math.PI)
// console.log(Math.pow(number1))
// console.log(Math.sqrt(number1))
// console.log(Math.round(number3))
// console.log(Math.random(number1))
// console.log(Math.hypot(number1))

// To get upper value of a decimal number (4.5  => 5)
// Math.ceil()  is used

// console.log(Math.ceil(4.5))
// console.log(Math.ceil(3.5))

// // To get lower value of a decimal number (4.5  => 4)
// // Math.floor()  is used

// console.log(Math.floor(4.5))
// console.log(Math.floor(3.5))

// To find minimum and maximum value in an array
// Math.min   => To find minimum
// Math.max   => To find maximum
// console.log(Math.min(1, 3, 5, 7, 9))
// console.log(Math.max(1, 3, 5, 7, 9))

// console.log(Math.random())                                // always give value between 1 and 0
// console.log(Math.random() *10)                            // give value bigger than zero but can be zero
// console.log(Math.random() *10 +1)                         // always give value bigger than zero (can't 0)
// console.log(Math.floor(Math.random() * (10 + 1))          // get proper number but can be smaller than 10
// console.log(Math.floor(Math.random() * (10 + 1) + 10))    // get proper number >= 10
// console.log(Math.floor(Math.random() * 11 +  10))         // get proper number >= 10
// console.log(Math.floor(Math.random() * 10 +  11))         // get proper number >= 10

let minimum = 10
let maximum = 20

// console.log(Math.random() * (maximum - minimum))                      // Give value bigger than 0 but can be 0
// console.log(Math.random() * (maximum - minimum + 1))                  // always give value bigger than zero (cannot be 0)
// console.log(Math.floor(Math.random() * (maximum - minimum + 1)))      // get proper number but can be smaller than 10
// console.log(Math.floor(Math.random() * (maximum - minimum + 1) + 10)) // get proper number >= 10
