// function setUserName(userName){
//     // complex DataBase calls
//     this.userName = userName
//     console.log('called')
// }
// console.log(setUserName('israr'))

// function createUser(userName, email, password){
//     setUserName.call(this, userName)

//     this.email = email 
//     this.password = password
// }

// const chai = new createUser('chai', 'chai@fb.com', 'password')

// console.log(chai)


// 88************************************************
// function getData(){
//     this.username = username
// }

function setUserName2(username){
    console.log(this)
    this.username = username
    console.log('called')
}
// setData2(7438)

function createUser2(username, email, password){
    setUserName2.call(this, username) // .call is used to hold the reference
// here we give this as a parameter which will take the content of the above this (i.e this.username)
    this.email = email
    this.password = password
}

const data = new createUser2('israr', 'israr.com', '555')
console.log(data)