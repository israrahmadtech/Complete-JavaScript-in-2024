// console.log('one')
// setTimeout(function(){
//     console.log('two')
// }, 1000)
// console.log('three')

// console.log('one')
// console.log('two')

// function hello(){
//     console.log('hello')
// }
// setTimeout(hello, 1000) // here hello is a callback function

// console.log('three')
// console.log('four')

// ........................ CALLBACK .............................

// function sum(a, b){
//     console.log(a + b)
// }
// function calculator(a, b, sumCallBack){
//     sumCallBack(a, b)
// }
// calculator(1, 2, sum)

// ........................ CALLBACK HELL .............................

// function to get Data01 after 2 seconds and then data2 after 2 seconds
function getData(dataId, getNextData){
    setTimeout(function(){
        console.log('DataID:', dataId)
        if(getNextData){
            getNextData()
        }
    }, 2000)
}
// 40 minutes
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4)
        })
    })
})

// ........................ NESTED .............................
// something inside another thing

// for(let i=0; i<6; i++){
//     let str = '';
//     for(let j=0; j<6; j++){
//         str = str+j
//     }
//     console.log(i, str)
// }
