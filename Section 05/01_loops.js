// For Loop:
// syntax:
// for (let innitialize = 0; condition < array.length; iteration++) { // iteration = increament / decreament
//     // code 
// }

// Counting table using for loop:
// for(let i = 1; i <= 10; i++){
//     console.log(`xxxxxxxxxxxxxxxxx   Table of ${i}   xxxxxxxxxxxxxxxxxx`)
//     for(let j = 1; j<=10; j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// }


// You can stop a loop on a spacific point using break keyword as:
// for(let i = 1; i<= 10; i++){
//     if(i == 6){
//         console.log('detected 6, I am stoping')
//         break
//     }
//     console.log(i)
// }

// You can skip a specific value using continue keyword as:
// for(let i = 1; i<= 10; i++){
//     if(i==5){
//         console.log('skiping 5')
//         continue
//     }
//     console.log(i)
// }

// How to access content of an array using for loop
// let array1 = ['professor', 'israr', 'atal', 'afridi']
// for(let index = 0; index<array1.length; index++){
//     console.log(array1[index])
// } 


// While Loop: Same as for loop

// innitialization
// while (condition) {
//     // code 
//     // iteration
// }

// let i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }

// let i = 1
// while(i<=10){
//     if(i==5){
//         console.log('i am stoped')
//         break
//     }
//     console.log(i)
//     i++
// }

// let i = 1
// while(i<=10){
//     if(i==5){
//         console.log('i am skiping 5')
//         continue
//     }
//     console.log(i)
//     i++
// }


// Do While loop: must run code once before checking condition
// innitialize
// do {
//     // code 
//     // iteration
// } while (condition);

// let i = 1
// do{
//     console.log(i)
// }while(i<10);