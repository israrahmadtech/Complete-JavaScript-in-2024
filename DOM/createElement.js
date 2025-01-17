document.body.style.color = '#fff'
document.body.style.background = '#212121'


const parant = document.querySelector('.parant')

parant.firstElementChild.style.color = 'red'  // selecting first child element
// Using for loop
for(let i=0; i<parant.children.length; i++){ // children is a property to select all childrens
     parant.style.color = 'blue'
}

parant.children[2].style.color = 'green' // selecting element 

// Using forEach()
const selectAll = document.querySelectorAll('.day')
selectAll.forEach( (days) => {
     days.style.background = 'white'
})

// Selecting all elements
const days = document.querySelectorAll('.day')
days.forEach( (day) => {
     day.style.padding = '2px 20px'
})


// *********************** parant2  ******************

// const months = document.querySelectorAll('.month')
// console.log(months)
// months.style.color = 'yellow'

const month1 = document.querySelector('.month')
console.log(month1.innerHTML)
console.log(month1.parentElement)  // Selecting parent element from child
console.log(month1.nextElementSibling) // Selecting next brother of current element

const parent2 = document.querySelector('.parent2')
/*
NODES:
      comment node
      text node
      element node
*/
console.log(parent2.childNodes)