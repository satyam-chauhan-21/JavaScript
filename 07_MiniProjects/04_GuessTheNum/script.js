// /**
//  * dekho is project ka logic sochte hai 
//  * - so hame ek number guess karvana hai jo ki har baar ek random number hoga.
//  * - 1) to firstly hum random number genrate karte hai ✅
//  * - 2) user se uske guess liye hue number ka input lena hai ✅
//  * - 3) ab ye check karna hai ki guessed number jo randomNumber genrate hua hai usse bada hai ya fir chhota ya fir same hai,
//  *    3.1) if guessNum > reandomNum => to user ko firse guess karne ka bolna or ye bhi batana hai ki guessedNum bada hai randomNum se.
//  *    3.2) if guessNum < reandomNum => to user ko firse guess karne ka bolna or ye bhi batana hai ki guessedNum chhota hai randomNum se.
//  *    3.3) if guessNum == reandomNum => ho fir kuch nahi Game over & restart new Game.
//  * - 4) ab ek inmortant cheej ke hame user ko kuch limited attepmt hi dene hai. or inn dono condition [guessNum > reandomNum] && [guessNum < reandomNum] me uss attempt ko decrease bhi karna hai.
//  * - 5) and also jitne bhi guess kiye ho unka ek record bhi rakhna hai.
//  */
// //--------------------------------------------------------------------------------------//
// //                           1) Genrating random number
// //--------------------------------------------------------------------------------------//
// //random number ganrate karne ke liye Math.random() ka use hota hai & for more info online padh lo.

// const randomNumber = parseInt((Math.random() * 100) + 1)
// console.log(randomNumber);

// //--------------------------------------------------------------------------------------//
// //                                         Idea
// //--------------------------------------------------------------------------------------//
// // // yaha per mujhe ek idea aaya hai setInterval ka use karte or jab tak number genarate karvate hai jab tak number 0 na mile. Halaki ye kaam ham loop se easily karva skte hai.
// // let count = 0
// // setInterval(() => {
// //     const randomNumber = parseInt(Math.random() * 100)
// //     // console.log("this is inside setInterval");
// //     console.log(randomNumber);
// //     if (randomNumber == 0) {
// //         console.log(`${count} count ke baad 0 aaya hai`);
// //     }
// //     count++;
// // }, 100);

// //--------------------------------------------------------------------------------------//
// //                                2) User's Guessed Number
// //--------------------------------------------------------------------------------------//

// // const guessNumber = document.getElementById('guessID').value
// // console.log(guessNumber);

// // input leke show karne ek dikkat aa rahi hai,I think jab ham input le kar submit click karte hai to vo form ko submit kar deta hai jisse value ko show nahi kar paa raha hu for it solution lets add an eventListener on Submit then usse preventDefault() kar denge.
// const form = document.querySelector('.form')
// let priviousGuess = []

// form.addEventListener('submit', function (e) {
    //     e.preventDefault()
    //     const guessNumber = document.getElementById('guessID').value
    //     console.log(guessNumber);
    
    
    //     if (guessNumber > randomNumber) {
        //         console.log(`Number bigger than Guess Number.`);
        //         priviousGuess.push(guessNumber)
        
        //     } 
        //     else if (guessNumber < randomNumber) {
            //         console.log(`Number smaller than Guess Number.`);
            //         priviousGuess.push(guessNumber)
            //     }
            //     else {
                //         console.log(`you guessed it right the number is ${randomNumber}`);
                //     }
                // })
                
                
                // // dikkat yaha aa rahi thi ki me direct value le rha tha instead of that mujhe pehle form ko select karna chahiye fir usme se input value leni chahiye.
                
                
                
// //--------------------------------------------------------------------------------------//
// //--------------------------------------------------------------------------------------//
// //--------------------------------------------------------------------------------------//
// //--------------------------------------------------------------------------------------//
// //--------------------------------------------------------------------------------------//
//  upper vala me khud se kar raha tha niche vala video me dekh ke kar raha hu
// //--------------------------------------------------------------------------------------//
// //--------------------------------------------------------------------------------------//
// //--------------------------------------------------------------------------------------//
// //--------------------------------------------------------------------------------------//
// //--------------------------------------------------------------------------------------//

let random_num = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessID')
const previousGuessSlot = document.querySelector('.guesses')
const remainingChances = document.querySelector('.remainingChances')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParams = document.querySelector('.resultParas') // ye hamne isiliye liya hai kyoki kabhi kabhi last tak number guess na ho paaye to ham iss pure portion ko hata kar gameOver msg show kar denge and start ka link de denge

const p = document.createElement('p')

let prevGuessArray = []
let attempt = 1

let playGame = true // the main variable iske bina game chalu hi nahi hogi

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

//--------------------------------------------------------------------------------------//
// ab kuch kaam ke functions
//--------------------------------------------------------------------------------------//

// guess ko validate karne ke liye ke sahi hai ya nahi means proper type me hai ki nahi
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if(guess < 1) {
        alert('Please enter number more than 1')
    } else if (guess > 100) {
        alert('Please enter number less than 100')
    } else {
        prevGuessArray.push(guess)
        if(attempt === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${random_num}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// guess ko check karne ke liye ki random number se match ho raha hai ya usse chhota-bada hai
function checkGuess(guess) {
    if (guess === random_num) {
        displayMessage(`You Guessed It Right `)
        endGame()
    } else if (guess < random_num) {
        displayMessage(`Number is Low`)
    } else if (guess > random_num) {
        displayMessage(`Number is High`)
    }
}


// this method will clean guess, set values in guess array and show remaining guess
function displayGuess(guess) {
    userInput.value = ''
    previousGuessSlot.innerHTML += `${guess}, `
    attempt++;
    remainingChances.innerHTML = `${11 - attempt}`
}


// this method will directly interect with DOM
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// for ending game
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button') // here we added a class named "button" we don't added any button
    p.innerHTML = `<h2 id="newGame" >Start New Game</h2>`;
    resultParams.appendChild(p)
    playGame = false
    // lowOrHi.innerHTML = ''
    newGame()
}

// for starting new game
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        random_num = parseInt(Math.random() * 100 + 1);
        prevGuessArray = []
        attempt = 1
        previousGuessSlot.innerHTML = ''
        remainingChances.innerHTML = `${11 - attempt}`
        userInput.removeAttribute('disabled')
        resultParams.removeChild(p)

        playGame = true
    })
}