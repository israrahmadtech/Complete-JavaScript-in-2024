// High Order Loops
// For of loop, for in loop, for each loop

// for of loop:
// for (const iterator of object) {
    // code 
// }

// accessing characters of string using for of loop
// const str = "israr"
// for(const i of str){
//     console.log(i)
// }

// // accessing elements of array using for of loop
// const arr = [1, 2, 3, 4, 5]
// for(const index of arr){
//     console.log(index)
// }

// // accessing objects inside array using for of loop
// const arrobjs = [
//     {obj1: 'obj1'},
//     {obj2: 'obj2'},
//     {obj3: 'obj3'}
// ]
// for(const iteration of arrobjs){
//     console.group(iteration)
// }

// for of loop can't be used for iterating objects
// We use for in loop to iterate objects as
const object2 = {
    israr: 'Ahmad',
    Abuzar: 'Koko',
    Salman: 'Afridi',
}
// To get only keys
for (const key in object2){
    // console.log(key)
}
// to get keys, values and object
for(const key in object2){
    // console.log(`${key}: ${object2[key]}`)
}


// **************************  Map  ****************************
// return unique values(no repetation)

const map1 = new Map()
map1.set('Pak', 'Pakistan')      // Adding key and value to map()
map1.set('UK', 'United Kingdom')  // Adding key and value to map()
map1.set('UK', 'United Kingdom') // can't add, no repetation   
map1.set('Afg', 'Afghanistan')   // Adding key and value to map()
// console.log(map)

// for(const key of map1){
//     console.log(key)
//     console.log(typeof key) // return object(array)
// }

for(const [key] of map1){ // return strings
    // console.log(key)
}
// you can hold both keys and values as
for(const [key, value] of map1){
    // console.log(key, ':', value)
    // console.log(typeof key, typeof value)
}


// **********************   for in loop   *************************
// return keys directly
const object1 = {
    'obj1': "Object1",
    'obj2': "Object2",
    'obj3': "Object3"
}
// To get only keys
for (const key in object1){
    // console.log(key)
}
// to get keys, values and object
for(const key in object1){
    // console.log(`${key}: ${object1[key]}`)
}

const programs = ['html', 'css', 'javascript']
for(const key in programs){
    console.log(programs[key])
}
// Map can't be iterated

