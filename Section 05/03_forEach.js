

const coding = ['html', 'css', 'js', 'cpp']

coding.forEach( function function_name(parameter) {} )
// We donot give name to callback function as:

coding.forEach( function(parameter){
    // console.log(parameter)
})

// forEach using arrow function
coding.forEach( arrow = (parameter) => {} )
// here we donot store it under a variable as:
coding.forEach( (parameter) => {
    // console.log(parameter)
})


// You can pass a function in forEach() as:
function printMe(parameter){
    // console.log(parameter)
}
// coding.forEach(printMe) // where printMe is also a function and forEach get a function, index and array



//  forEach() get/pass/takes a function, index and array as:

// function func1(parameter, index){
//     console.log(parameter, index)
// }
const israr = ['I', 'S', 'R', 'A', 'R']
israr.forEach(function israr1(parameter, index, israr){
    // console.log(parameter, index, israr)
})
console.log() 
// Using arrow function:
israr.forEach( (parameter, index, israr) => {
    // console.log(parameter, index, israr)
})


const objInArr = [
    {languageName: 'JavaScript'},
    {languageName: 'Python'},
    {languageName: 'CSS'}
]
objInArr.forEach((obj) => {
    console.log(obj)
})

objInArr.forEach((item) => {
    console.log(item.languageName)
})


