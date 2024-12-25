const form = document.querySelector('form');

// yaha par jo event hamne target kiya hai vo hai "submit"or ye "submit" event form par apply hota hai submit button per nahi, submit button per "click" event apply hota hai or bhi hote honge but me ye issliye yaha likh raha hu kyoki aage "GuessTheNumber" me mene "submit" event submit button per apply karva raha tha jab ki 
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `${height} is not a valid Height. Please enter valid Height`;
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `${weight} is not a valid Weight. Please enter valid Weight`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        console.log(bmi);
        

        if (bmi < 18.6) {
            result.innerHTML = `<span>${bmi} BMI Underweight</span>`;
            console.log(bmi + "u");
        } 
        else if ( bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span>${bmi} BMI Normal</span>`;
            console.log(bmi + "n");
        } 
        else if (24.9 < bmi) {
            result.innerHTML = `<span>${bmi} BMI Overweight</span>`;
            console.log(bmi + "o");
        }
    }
})