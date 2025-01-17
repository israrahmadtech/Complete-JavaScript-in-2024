// Ecma Script 6

// class works like object but don't have keys
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptpassword(){
        return `${this.password}abcd`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User('chai', 'chai.com', '1234')
console.log(chai.encryptpassword())
console.log(chai.changeUserName())