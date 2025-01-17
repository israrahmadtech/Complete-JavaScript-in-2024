

// Practical example on fetch using try and catch:
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // await is used to make it wait
//     const object = await response.json() //api string to json
//     console.log(object)
//     // console.log(object[0])
//     } catch (error) {
//         console.log('ERROR: ', error)
//     }
    
// }
// getAllUsers()

// Performing same work using .then(), .catch():
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(array){
    console.log(array)
    console.log(array[0])
    console.log(array[0].name)
    console.log(array[0].email)
})
.catch((error) => console.log(error))
