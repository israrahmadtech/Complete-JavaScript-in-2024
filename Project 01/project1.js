const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(e){
        // console.log(e)
        // console.log(e.target)
        if(e.target.id === 'black'){
            body.style.background = e.target.id
            body.style.color = '#fff'
        }
        if(e.target.id === 'gray'){
            body.style.background = e.target.id
            body.style.color = '#fff'
        }
        if(e.target.id === 'yellow'){
            body.style.background = e.target.id
            body.style.color = '#212121'
        }
        if(e.target.id === 'greenyellow'){
            body.style.background = e.target.id
            body.style.color = '#black'
        }
        if(e.target.id === 'white'){
            body.style.background = e.target.id
            body.style.color = '#414141'
        }
    })
})