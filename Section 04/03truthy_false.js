// There are some values that is always considered to be false called falsy values
// Falsy: 
//        false, 0, -0, "", null, BigInt 0n, NaN, undefined

let userName = ""
// let userName = false
// let userName = 0
// let userName = -0
// let userName = BigInt 0n
// let userName = NaN
// let userName = null
// let userName = undefined
if(userName){
    console.log('user name is correct')
} else{
    console.log('User name is incorrect') // run on all falsy values
}


// There are some values that is always considered to be true called falsy values
// Truthy Values:
//                  true, "0", ' ', 'false', [], {}, function(){}

// let userEmail = true
// let userEmail = "0"
// let userEmail = ' '  // space inside a string
// let userEmail = 'false'
// let userEmail = []
let userEmail = {}
// let userEmail = function(){}

// to check that array if empty opr not
if(userEmail.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){  // Object.keys(emptyObj)  return an array than we find its length
    console.log("Object is empty")
}


console.log(false == 0)    // return true
console.log(false == "")       // return true
console.log(0 == "")       // return true