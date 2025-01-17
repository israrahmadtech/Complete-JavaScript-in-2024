
const user2 = {}   // non-singleton object
console.log(user2)

// Object Literals (constructor)

const user1 = new Object() // singleton object
console.log(user1)

// you can add keys and values to an object as:
user1.id = "123abc"
user1.name = "Israr"
user1.email = "abc@gmail.com"
user1.isLoggedIn = "false"
console.log(user1)

// you can create further objects in an object as:
const regularUser = {
    email: "same@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Israr",
            lastname: "Ahmad"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)


// You can combine two objects as:
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2} // not a good way
console.log(obj3) // objects are printed inside object

const obj4 = Object.assign(obj1, obj2) // 2nd or remaining objects merge in 1st obj
console.log(obj4)
const obj5 = Object.assign({}, obj1, obj2) // 2nd or remaining objects merge in 1st obj, 
// The object in which other objects merge called Target and remaining called Source
console.log(obj5)

// best way for merging/combining objects is Spread as
const obj6 = {...obj1, ...obj2}
console.log(obj6)

// Values from a database always are in the form of Array as
const objInArray = [
    {name: 'Israr', email: 'israr@gmail.com'},
    {name: 'Israr', email: 'israr@gmail.com'},
    {name: 'Israr', email: 'israr@gmail.com'},
    {name: 'Israr', email: 'israr@gmail.com'}
]
console.log(objInArray[0].email)
console.log(objInArray[0].name)

// You can access only keys and only values of an object as:
const object1 = {1: "a", 2: "b", 3: "c", 4: "d"}
console.log(Object.keys(object1)) // return an Array
console.log(Object.values(object1)) // return an Array

// .entries is an object property which convert one key and its value into array as
console.log(Object.entries(object1))


console.log(object1.hasOwnProperty('isLoggedIn'))
