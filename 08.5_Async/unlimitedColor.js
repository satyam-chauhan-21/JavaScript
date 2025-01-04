//----------------------------------------------------------------------------------//
//                              Unlimited Color Changer
//----------------------------------------------------------------------------------//
// but sabse pehle hamare paas ye problem hai ki ye sab reandom color ko generate kese kare
/**
 * to uske liye, color ko ham different formats hote hai if ham ne unko set kar liya means kaam ho gaya.
 * so ham color ke hex format ko set karenge like : #3E34D5
 * and hame ese bohot sare numbers generate karne hai but pehle one geenerate karte hai
 */

// sbse pehle ham ek pure hex numbers ko e place par store kar lete hai
// const hex = "0123456789ABCDEF";

// // ab dekho random number ese milte hai
// // console.log(Math.random()); // and isko if ham 10 se multipy kare to 0 to 9 ki range mese koi number 3.xxxxxx ese format me milega and yaha hamari range 10 hi hai but hamare pass total 16 hex numbers hote hai so if ham 16 se multiply kare to ye range ab 0 to 15 tak ho jayegi joki hamare "hex" variable ki range hai
// console.log(Math.floor(Math.random()*16)); // Math.floor() se ham decimal format se INT format me number convert kar skte hai.

// // ab socho ki colors ke hex format me ek hastag (#) and 6 hex number hote hai
// // upper to hamne random number genarate kar liya 
// // ab "hex" mese random position ka number ese nikal skte hai
// console.log(hex[Math.floor(Math.random()*16)]); // to hamne "hex" mese ek number nikal liya hai ab ese hi hame 6 numbers nikalne hai fir unhe combine karna then uske aage hastag(#) set karna hai ese ban jayega random color ki hex format.

// // so uske liye ham loop ka use karte hai
// let color = '#';
// for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random()*16)];
// }
// console.log(color);
// // now random color ka hex number generate ho raha hai.


// const randomColor = function () {
//     const hex = "0123456789ABCDEF";
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color
// }


// // so random color ka generator to ban gaya ab usse start and stop karne ki button set kar dete hai
// let colorChange;

// // to start color changer using start button
// document.querySelector('#start').addEventListener('click', function () {
//     document.querySelector('h1').innerHTML = "To Stop The Color Chenger Press Stop Button"
//     colorChange = setInterval(function () {
//         document.querySelector('body').style.backgroundColor = randomColor()
//     }, 100)

// }, false)

// // to stop color changer using stop button
// document.querySelector('#stop').addEventListener('click', function () {
//     document.querySelector('h1').innerHTML = "To Start The Color Chenger Press Start Button"
//     clearInterval(colorChange)
// }, false)

//-------------------------------------------------------------------------------------------------------------//
//                          upper vale code me ek bug hai jo niche fix kar diya hai
//-------------------------------------------------------------------------------------------------------------//

// dekho ab sab set ho gaya hai sab sahi se chal rha hai but ek chiij nahi chal rahi like id ham start button more than one time press kar rahe hai to stop button ki functionality kaam nahi kar rahi hai.

// to uske liye hitesh sir ne bataya ki pehel to ham setInterval() se "ID number" "colorchange" me store ho raha hai usse clear means "null" set kar de. then start ke event me setInterval() start karne ke liye ek condition set karte hai ki if setInterval() ka "ID number" null ho to hi start ho.


const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color
}


// so random color ka generator to ban gaya ab usse start and stop karne ki button set kar dete hai
let colorChange;

// to start color changer using start button
document.querySelector('#start').addEventListener('click', function () {
    document.querySelector('h1').innerHTML = "To Stop The Color Chenger Press Stop Button";
    if (!colorChange) {
        colorChange = setInterval(function () {
            document.querySelector('body').style.backgroundColor = randomColor();
        }, 100)
    }
}, false)

// to stop color changer using stop button
document.querySelector('#stop').addEventListener('click', function () {
    document.querySelector('h1').innerHTML = "To Start The Color Chenger Press Start Button";
    clearInterval(colorChange);
    colorChange = null;
}, false)