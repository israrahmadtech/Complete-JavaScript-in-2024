let randomNumber = parseInt((Math.random()*100 + 1))

const submit = document.querySelector('#submit1')
const userInput = document.querySelector('#guessField')

// Selecting Elements
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

// Creating Paragraph Element:
const p = document.createElement('p')
p.style.cursor = 'pointer'

let prevGuess = [] // to store previous guesses
let numGuess = 1   // Number of guess done

let playGame = true 

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){ // to know if the value if valid/right or not
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number greater than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    } else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`GameOver. Random Number was ${randomNumber}`)
            endGame()
        } else{
                displayGuess(guess)
                checkGuess(guess)
        }
    } 
}

function checkGuess(guess){ // to show msg that he winned or not
    if(guess === randomNumber){
        displayMessage('You guessed it right')
    } else if(guess < randomNumber){
        displayMessage('The number is Low')
    } else if(guess > randomNumber){
        displayMessage('The number is High')
    }
}

function displayGuess(guess){
    userInput.value = '' // make the input empty
    guessSlot.innerHTML += `${guess}, ` //adding guesses to previous guesses array
    numGuess++;
    remaining.innerHTML = `${12 - numGuess}` // decreasing remaining guesses
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute('disabled', '') // adding atribute to input
    p.classList.add('button')
    p.innerHTML = '<h4 id= "newGame">Start new Game</h4>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt((Math.random()*100 + 1))    
    prevGuess = []
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${12 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true 
    })
}

