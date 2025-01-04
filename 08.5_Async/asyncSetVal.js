// in this document:
// setInterval & clearInterval


//----------------------------------------------------------------------------------//
//                                  setInterval()
//----------------------------------------------------------------------------------//
// jaise setTImeout() diye gaye time par kaam pura karke program execution se out ho jata tha usi se ulta setInterval() diye gaye time ke baad baar baar apna kaam dohrata hai.
// setInterval() bhi 2 parameter accept karta hai : handler (function) and time (in milisecond)
// setInerval kuch return bhi karta hai
/** ye niche ki details setInterval() jo bhi return kar raha hai uske liye hai:
=>In JavaScript, the setInterval() method returns a numeric, non-zero value which serves as an identifier for the timer created. This identifier, often referred to as intervalID, is crucial for managing the interval.
=> The intervalID allows the user to later cancel the repeated execution of the function set by setInterval() using the clearInterval() method. By passing the intervalID to clearInterval(), the timer is cleared, and the function will no longer be executed at the specified interval.
=> It's important to note that the intervalID is a positive integer. Each call to setInterval() will return a unique ID, allowing for the management of multiple intervals independently.
 */



// setInterval(function(){
//     console.log('hi');
// }, 1000)

// const printName = function(){
//     console.log('hela')
// }
// setInterval(printName, 1000)


// const printName = function(str){
//     console.log(str, Date.now()) // dekho ab mujhe isme se time ki proper formate nikalni hai but ye vo time nahi hai, ye vo time bata raha hai jab se JS me time add hua hai. tab se leke abhi tak ka total time bata rha hai.
// }
// // setInterval(printName, 1000, "kar") // ye setInterval ek third parameter bhi accept karta hai
// const printingName = setInterval(printName, 1000, "kar")



//----------------------------------------------------------------------------------//
//                                  clearInterval()
//----------------------------------------------------------------------------------//
// used for stopping setInterval()
// takes reference of setInterval() means jo setInterval() ne ID number return kiya hai vo accept karta hai and uss IB number se related setInterval() ko stop karta hai.
// now ab upper vale setInterval() ko stop karte hai hai using clearInterval()
// to sabse pehle hame usse ek variable means reference me hold karna padega

// clearInterval(printingName) // now ab if ham direct ese likhte hai to setInterval kabhi start hi nahi hoga

// so ye kaam hamunn dono button se karte hai jisse hamne liya hai

const printName = function(str){
    console.log("seconds")
}

let printingName;
document.querySelector('#start').addEventListener('click', function(){
    printingName = setInterval(printName, 1000)
    console.log(printingName);
})


document.querySelector('#stop').addEventListener('click', function(){
    console.log(printingName);
    clearInterval(printingName)
})

/**
 * yaha per setInterval ek number return kar raha hai jab bhi hai stop ke baad start par firse click karte hai to vo number increse ho jata hai.
 * 
 * ab ye setInterval() ki return value hi yaha hamare kaam aa rahi hai kyoki hame "printingName" jo variable liya hai and usse "start" ke eventListener me setInterval se assign karva diya. ab usme setInterval() pehle to kuch value return kar raha hai vo store ho rahi hai.
 * now, "stop" me jo "clearInterval" used kiya hai usme ye "printingName" variable as argument daal diya hai, so "clearInterval" me "printingName" ke andar store "setInterval" ne return kari "ID number" aa gaya hai. now "clearInterval" uss "ID number" ka use karke uss se related "setInterval" ko stop kar dega.
 */


// my confution:
/**
 * yaha par mujhe ye confution ho rha tha ki ye dono function(eventListener) ke console.log "printingName" ki value kese access kar rahe hai now it's clear.
 * dekho "printingName" ko hamne dono function ke outside "let" ka use karke create kiya hai.
 * now in first eventListener me hamne usme "setInterval" assign karva diya hai and vo kuch INT value return kar rha hai jo "printingName" me store ho rahi hai. and then hamne usko print karva diya.
 * now in second eventListener hanme jo "printingName" me jo value thi usko pehle print karva liya then "printingName" ko jisme kuch INT value hai useko "clearInterval" ko pass kar diya.
 * ye jo INT value "printingName" hold kar raha hai vo actual me "setInterval" ka "ID number" hai jise "clearInterval" identify karke "setInterval" ko stop kar de raha hai.
 */