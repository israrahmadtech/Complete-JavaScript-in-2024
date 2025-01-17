const form = document.querySelector('form')

// This use case will give you empty value
// const height = parseInt(document.getElementById('height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height === NaN || isNaN(height)){  // isNaN(height) = height < 0
        result.innerHTML = 'Please enter a valid Height'
    } else if(weight === '' || weight === NaN || isNaN(weight)){  // isNaN(height) = height < 0
        result.innerHTML = `Please enter a valid Weight ${height}`
    } else{
        const BMI = (weight / ((height*height) /10000)).toFixed(2) // BMI formula
        // Show result 
        result.innerHTML = BMI;

// BMI Guide
        const bmi = document.querySelector('#BMI_guide')
        if(result.innerHTML < 18.6){
            // const bmi = document.querySelector('#BMI_guide')
            bmi.innerHTML = 'You are under weight'
        }else if(result.innerHTML > 18.6 && result.innerHTML < 24.9){
            // const bmi = document.querySelector('#BMI_guide')
            bmi.innerHTML = 'You are in normal range'
        } else{
            // const bmi = document.querySelector('#BMI_guide')
            bmi.innerHTML = 'You are over weight'
        }  // inner else closed
    } // outer else closed
})