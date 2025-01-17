
document.body.style.background = '#212121'
document.body.style.color = '#fff'


document.getElementById('title').id
document.getElementById('title').className  

document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')    // pass key and get the value

// document.getElementById('title').setAttribute('class', 'addClass') // overwrited/remove the original and add new
// document.getElementById('title').setAttribute('class', 'class1 class2') // add two classes and remove the original


const title = document.getElementById('title')
title.style.background = 'green'
title.style.padding = '10px'
title.style.borderRadius = '10px'

// """"""""""   How to add content  """"""""""""""""""""""""""""""""

// console.log(title.innerText)     // Return just available text (not return removed text)
// console.log(title.textContent)   // return both available and removed text
// console.log(title.innerHTML)     // return text and inside whole variable if its removed or not

// ''''''''''''''''''''' How to select elements ''''''''''''''''''''''

// id
// console.log(document.getElementById('title'))
//class
// console.log(document.getElementsByClassName('heading'))

// querySelector
const h1 = document.querySelector('h1')  // Select 1st h1
h1.style.color = 'red'

document.querySelector('#title').style.background = '#fff'
document.querySelector('.heading').style.color = '#212121'

// const head2 = document.querySelectorAll('h1') // Select all h1
// head2.style.color = 'green'

document.querySelector('input[type="password"]')

const myul = document.querySelector('ul')
console.log(myul)
const turnGreen = myul.querySelector('li')
turnGreen.style.background = 'yellow'
turnGreen.style.color = 'brown'
// chnging innerText
turnGreen.innerText = 'Israr'

// document.querySelectorAll('li')  // Retrun NodeList
const applyForEach = document.querySelectorAll('li')
console.log(applyForEach)  // its not pure array, it have some but not all array properties
applyForEach.forEach( (li) => {
    li.style.background = 'brown'
    // li.style.color = 'yellow'
})

applyForEach[0].style.background = 'green'  // Using index

// HTML collection into array
const list = document.getElementsByClassName('list-item')
const convertedArray = Array.from(list)

convertedArray  .forEach( (item) => {
    item.style.color = 'greenyellow'
})