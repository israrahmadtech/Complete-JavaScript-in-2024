// Immediately Invocked Function Expressions (IIFE)
// in order to remove pollution coming from global scope, we use iife

// (function definition)(for execution)
(function IIFI(){
    console.log("DataBase Connected")
})(); // function below will not work if you not put simicolon(;)

(function IIFI(){
    console.log("DataBase Connected")
})();

// // ()()

(() =>{ // arrow this function cannot be hold in variable
    console.log("arrow function")
})();

// you can also pass a value
(function IIFI2(name){
    console.log(`${name}DataBase Connected`)
})('israr');


((name) =>{
    console.log(`arrow function ${name}`);
})('Ahmad')