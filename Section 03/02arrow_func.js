// this. is a keyword which refers current content (content under a specific range)

const user = {
    userName: "Israr",
    price: 999,
    welcomeMsg: function(){
        // console.log(`${userName}, welcome to website`) // not a good way
        console.log(`${this.userName}, welcome to website`) // this. refers content inside user object
        console.log(this) // shows current context
    }
}
// user.welcomeMsg()
// user.userName = "abuzar"
// user.welcomeMsg()
// console.log(this) // refers to the  global object window


function chai(){
    // console.log(this)
    let username = 'israr'
    console.log(this.username)
}
// chai()

// ways to declare a function:
const oneWay = function(){
    console.log(this)
    let username = 'israr'
    console.log(this.username)
}
oneWay()


// Arrow function:
// if you rape arrow function under curley braces{} then must use return keyword
// if you rape arrow function under paranthesis then don't use return keyword
const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(5, 10))

// You can do the same word as:
const addThree = (n1, n2, n3) => n1 + n2 + n3
console.log(addThree(5, 5, 5))

const addFour = (n1, n2, n3, n4) => (n1 + n2 + n3 + n4)
console.log(addFour(3, 4, 4, 4))

// How to make an object inside arrow function:
const israr = () => ({username1: "israr"}) // must rape the object in paranthesis(1)
console.log(israr())