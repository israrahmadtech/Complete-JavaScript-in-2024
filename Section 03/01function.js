
// function functionName(){
//     console.log("I")
//     console.log("S")
//     console.log("R")
//     console.log("A")
//     console.log("R")
// }
// // Above is a function, now you can use it several times as
// functionName  // This is just reference to the function
// functionName()  // Execution of function;
// functionName()


// function addTwoNumbers(parameter1, parameter2){ // these are called parameters
//     console.log(parameter1+parameter2)
// }
// addTwoNumbers() // return NaN (Not a Number)
// addTwoNumbers(10, 20)  // These are called arguments.
// addTwoNumbers(10, "20") // in this case both becomes strings.

// // you can store it under a valriable:
// const result = addTwoNumbers(10, 20)
// console.log("Result: ", result) // return undefined because the function is not returning something

// // do below if you want to return something
// function addTwoNumber2(parameter1, parameter2){
//     return parameter1+parameter2
// }
// const result2 = addTwoNumber2(10, 20)
// console.log("Result: ", result2) // give output because the function returns something

// // You can do the above task on an other formate
// function return1(num1, num2){
//     let result = num1 + num2
//     return result // the code below return will not be executed
//     // console.log("israr") // This will not executed because its below than return
// }
// console.log(return1(5, 3))

// function to give message to user
// function loginMsg(userName){
//     return`${userName} just logged in`
// }
// console.log(loginMsg("israr"))
// console.log(loginMsg()) // return undefined because no value is passed 


//  If user do not put userName

function loginMsg2(userName){
    if(userName === undefined){
        console.log("Prease enter a user name")
        return      // if i come to this block then below code will not executed
    }
    return`${userName} just logged in`
}
console.log(loginMsg2())

function loginMsg3(userName){
    if(!userName){
        console.log("Prease enter a user name")
        return      // if i come to this block then below code will not executed
    }
    return`${userName} just logged in`
}
console.log(loginMsg3())
// loginMsg2 == loginMsg3 and   !userName == (userName === undefined)


// you can give default value to userName if the user do not put it as
// if userName if given than defaultName will be removed/over writed
function loginMsg4(userName = "defaultName"){
    if(!userName){
        console.log("Prease enter a user name")
        return      // if i come to this block then below code will not executed
    }
    return`${userName} just logged in`
}
console.log(loginMsg4())
console.log(loginMsg4("israr")) 