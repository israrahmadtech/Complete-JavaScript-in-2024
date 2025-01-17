// Date 

// let dateNow = new Date()
// console.log(dateNow)
// console.log(dateNow.toString())
// console.log(dateNow.toDateString())   // get only date
// console.log(dateNow.toLocaleString()) // get both date and time
// console.log(dateNow.toJSON())
// console.log(typeof dateNow)  // Object

// How to declare your own date
// months works on index

// let myCreatedDate = new Date(2023, 0, 23) // here 0 is index of months
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 23, 5, 7, 12) // last three values are for time
// console.log(myCreatedDate.toLocaleString())

// mm/dd/yy syntax for date
// let myCreatedDate = new Date("01-15-2024") // now months index starts from 1 or 01
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.toDateString())
// yy/dd/mm syntax for date
// let myCreatedDate = new Date("2024-01-15") // now months index starts from 1 or 01
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.toDateString())

// 0 = January
// 1 = February
// 11 = December
// 12 = December
// 17 = December ......


// let myCreatedDate = new Date("06-12-2024")
// let toTimeStamp = Date.now()
// console.log(toTimeStamp)
// console.log(myCreatedDate.getTime()) // date is in milisecond
// console.log(Date.now()/1000) // converting date to seconds
// console.log(Math.floor(Date.now()/1000)) // converting date to seconds

// // How to get specific value (index always starts with 0)
let newDate = new Date()
// console.log(newDate.getFullYear())
// console.log(newDate.getMonth())
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getHours())
// console.log(newDate.getMinutes())   
// console.log(newDate.getSeconds())
// console.log(newDate.getMilliseconds())

let moreDate = newDate.toLocaleString('default', {
    weekday: "long",
    weekday: "short",
    weekday: "narrow"
}
)  
console.log(moreDate)