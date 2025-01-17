
// const mySymbl = Symbol("outsidevalue")
// const yourSymbl = Symbol("outsidevalue2")

// const jsUser = {
//     name: "israr", // here "name" is key and "israr" is its value
//     age: 18,        // key is always a string
//     location: "bara",
//     email: "israr@gmail.com",
//     isLoggedIn: false,
//     lastLoggedDays: ["Monday", "Saturday"],
//     "my name": "ahmad",
//     mySymbl: "insidevalue",
//     [yourSymbl]: "insidevalue2", // right way to define a symbol
// }
// console.log(jsUser.name)    // not best way
// console.log(jsUser["name"]) // best way because
// // console.log(jsUser.my name) or    // throw an error
// // console.log(jsUser."my name")     // throw an error
// console.log(jsUser["my name"])

// console.log(jsUser['mySymbl'])
// console.log(typeof jsUser['mySymbl']) // return a string
// console.log(jsUser['yourSymbl'])
// console.log(typeof jsUser['yourSymbl'])      // return a symbol

const obj2 = {
    name: "israr",
    age: 18,
    location: "bara",
    email: "israr@gmail.com",
    isLoggedIn: false,
    lastLoggedDays: ["Monday", "Saturday"],
}

// You can change(re-declare) a value in an object as:
obj2.name = "Abuzar"
console.log(obj2)

// You can lock the object (no changes will be occur inside object) as:
// Object.freeze(obj2)
// obj2.email = "Abuzar@gmail.com"  // unable to change it
// console.log(obj2)

// inserting a function into object
obj2.greeting = function(){
    console.log("Hi JS User: ")
}
// printing the function which is inserted above
console.log(obj2.greeting)  // Function is not executed, just its reference is comed
console.log(obj2.greeting())

obj2.greeting2 = function(){
    // console.log(`Hi JS User: ${obj2.name}`) // not good way b/c there can be many objects
    console.log(`Hi JS User: ${this.name}`) // give reference to this object only
}
console.log(obj2.greeting2())