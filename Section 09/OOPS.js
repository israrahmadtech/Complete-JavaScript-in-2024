/*
Does JavaScript have classes

OOP: Object Oriented Programming

Object is a collection of properties and methods 

why use OOP

Parts of OOP:
Object literals 

constructor function
prototypes
Classes
Instances (new, this)


Learn these four pillars:
                        Abstraction (to hide details)
                        Incapsulation (wrapping of data)
                        Inheritnace
                        Polymorphism (many shapes)
*/

// Object Literals(actually)
// const user = {
//     // This is actually an object which called Object Literals
//     name: 'israr',
//     class: 12,
//     getUserDetails: function(){
//         console.log('Got user details')
//         // console.log(`UserName: ${name}`) // Undefined
//         console.log(`UserName: ${this.name}`)  // Used for current context
//         console.log(this) // refers current context
//     }
// }
// console.log(user.name)
// console.log(user['class'])
// console.log(user.getUserDetails())
// console.log(this)   

// const promise1 = new Promise()
const date = new Date()  // here new is a constructor function
// a construction functioncalls when using new keyword which brings some values

// Below function is for node.js because in nodeJs this. retruns an empty {}
function User(userName, loginCount, isLoggedIn, greeting){
    // userName = userName  // here we don't know which one is variable and which one is argument
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
            console.log(`Welcome ${this}`)
    }
    
    return this
}
const userOne = User('israr', 12, true)
const userTwo = User('abuzar', 11, false)
// console.log(userOne.userName)
// console.log(userTwo.userName) // userTwo over Writes the value of userOne
// console.log(userTwo.greeting())

console.log(userTwo.constructor)
console.log(auto instanceof User)