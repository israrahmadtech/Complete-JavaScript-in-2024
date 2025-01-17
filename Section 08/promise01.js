// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DataBase calls, cryptography, network calls
//     setTimeout(function(){
//         console.log('Async tast 1')
//         resolve() // have direct connection with .then()
//     }, 1000)
//     // resolve()
// })
// promiseOne.then(function(){ // .then() have direct relation with resolve
//     console.log('Promise consumed')
// })

// // Performaing same work differently
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2')
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log('Tast 2 resolved')
// })

// // Promise Three:

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName: 'Israr', email: 'israr.com'})
//     }, 1000)
// })
// promiseThree.then(function(data){
//     console.log(data)
//     console.log(data.userName)
// })

// Promise Four:
// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         // let error = true   // to appear error
//         let error = false     // to not appear error
//         if (!error) {
//             resolve({ userName: 'Ahmad', email: 'ahmad.com' })
//         } else {
//             reject('ERROR: something went wrong')
//         }
//     }, 1000)
// })
// promiseFour.then((user) => {     // Chaining
//     console.log(user)
//     return user.email
// }).then(function (email) {    // Holds resolved statement
//     console.log(email)
// }).catch(function (errored) { // Holds rejected statement
//     console.log(errored)
// }).finally(() => {      // must executes
//     console.log('The promise may resolved or rejected')
// })
// /*
// Ptomises have three States:
//         1) Pending:     innitial state, neither fulfilled nor rejected
//         2) Fulfilled:   the operation was completed successfully
//         3) Rejected:    the operation is failed
// */

// // Promise Five using async await
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // let error = true
//         let error = false
//     if(!error){
//         resolve({ userName: 'JavaScript', password: '12345678' })
//     }else{
//         reject('ERROR: JavaScript went wrong')
//     }
//     }, 1000)
// })
// // async function consumePromiseFive(){
// //     const response = await promiseFive
// //     console.log(response)
// // }
// // consumePromiseFive()

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.l
//     }
// }


// const promiseSIx = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     let error = true 
//     if(error){
//         resolve({userName: 'promiseSix'})
//     } else{
//         reject('PromiseSix is rejected')
//     }
// }, 1000)

// })

// promiseSIx.then(function(user){
//     console.log(user)
//     console.log( user.userName)
// }).catch(function(errored){
//     console.log(errored)
// }).finally(function(){
//     console.log('The promisSix may resolve or reject')
// })


// new Promise(function(resolve, reject){
//     console.log('Async task seven runned')
//     // resolve() // have direct connection with .then()
//     resolve({name: 'israrAhmad', id: 12345678})
// }).then(function(wholeObject){
//     // console.log('task seven resolved')
//     console.log(wholeObject)    // return whole object
//     console.log(wholeObject.name)
//     console.log(wholeObject.id)
// })


// const promiseEight = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//     if(error){
//         console.log('Promise success')
//         resolve({name: 'Abuzar', f_name: 'Tehsil'})
//     } else{
//         reject('Found an error, promise reject')
//     }  // reject() have a direct relation with .catch()
//     }, 2000)
    
// })

// promiseEight.then(function(object){
//     console.log(object)
//     return object.f_name // return value to another .then()
// }).then(function(f_name){
//     console.log(f_name)
// }).catch(function(foundError){
//     console.log(foundError)
// }).finally(() => console.log('promise resolved or reject')) // runs every time


const promiseNine = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        // let error = true
    if(!error){
        console.log('PromiseNine success')
        resolve({name: 'PrommiseNine', f_name: 'Promise'})
    } else{
        reject('Found an error, promise reject')
    }  // reject() have a direct relation with .catch()
    }, 2000)
})
// async await cannot handle errors directly
// async function functionName(){
    // const response = await promiseNine
    // console.log(response)

// Using try and catch to handle errors
//     try {
//         const response = await promiseNine
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// functionName()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('ERROR', error)
//     }
// }
// getAllUsers() 

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then((jsonData) => {
    console.log(jsonData)
}).catch(function(error){
    console.log(error)
})