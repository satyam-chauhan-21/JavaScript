// in this document:
// setTimeout & clearTimeout


//----------------------------------------------------------------------------------//
//                                  setTimeout()
//----------------------------------------------------------------------------------//
/**
 * setTimeout() accept two parameters: handler(which is a Callback Function) and time(taken as miliseconds)
 * setTimeout() kaam ko ek baar karke chala jata hai means complete ho jata hai fir nahi karta jaise ki niche example me 5 second baad print karke setTimeout() programexecution se hatt jayega.
 * setTimeout(function(){
    console.log('hello async');
}, 5000)
 *  but what if hame kaam ko continuously karvana ho, tab setInterval() kaam aata hai.
 */

setTimeout(function(){
    console.log('hello async');
}, 2000)

// jaise hanme upper setTimeout() ke andar hi function likh diya hai usse ham alag se function bana kar fir uss function kar reference setTimeout() ke handler ke place par de kar bhi likh skte hai 

const changeName = function(){
    document.querySelector('h1').innerHTML = 'Heading is changed'
}

// setTimeout(changeName, 3000)
const changingName = setTimeout(changeName, 3000) // isse koi fark nahi padta ki setTimeout ko variable me store kar liya hai vo apna kaam fir bhi karga.


//----------------------------------------------------------------------------------//
//                                  clearTimeout()
//----------------------------------------------------------------------------------//
// this function used to stop setTimeout() functions work.
// but uske liye hame batana padega ki kis setTimeout() ko stop karna hai. and vo ham usse jo bhi setTimeout() ko rokna hai uska reference de kar batana hoga.
// for example hamne upper 2 setTimeout() ka use kiya hai usme se ham header ko change hone se stop karte hai
// ham ye clearTimeout() normally bhi likh skte hai like

// clearTimeout(changingName) // yaha ye specify kiya ki "changingName" vale setTimeout ko rokna hai 

// but ye tarika sahi hai ya nahi ye usecase per depend karta hai
// now hamne jo button li hai usse setTimeout() ko rokte hai.

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changingName)
    // setTimeout(() => { // this is for masti & knowledge
    //     console.log("inside clearTimeout()");
    // }, 2000);
}) // now if ham setTimeout() ke time se pehle button per click karenge to setTimeout() eventLoop se out ho jayega.