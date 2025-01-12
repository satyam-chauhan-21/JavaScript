// in this document:
// Promise
// creating first promise
// Tow Part of Promise
// .then()
// without using variable
// passing value in resolve()
// reject() ka use
// .catch() ka use
// .finally() ka use
// async/await
// real API example using async/await
// real API example using promise.then().catch()
// last me kab async/await use karna hai & kab promise ke sath ".then().catch()" use karna hai ye dekh lena.



//-------------------------------------------------------------------------------------------------------//
//                                              Promise
//-------------------------------------------------------------------------------------------------------//
/**
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * iss baat par dhyan dena ki promise ek object hai.
 * promise JS me code ya fir execution ko esa bolta hai ki tum aage chalo me jo bhi result hoga usse baad me lekar aaunga tumhare pass.
 * means vaadaa karta hai ki future me result de dunga.
 * promise ke three state hote hai(jaise XHR me state hote the vese hi):
 * pending: means start hi nahi hua kabhi or pura karne ke baare me socha hi nahi.
 * fulfilled: means promise pura kar diya hai and koi value mili hai.
 * rejected: means promise pura ho gaya hai but koi error ke sath ya fir promise pura karne ke baad error mili hai.
 * 
 * 
 */

//-------------------------------------------------------------------------------------------------------//
//                                        creating first promise
//-------------------------------------------------------------------------------------------------------//
// jese ki hamne dekha hi promise ek object hai to usse use karne ke liye uska instance banana padega.

// const fisrtPromise = new Promise(function(resolve, reject){ 
//     // promise ke andar ek callback diya jata hai jiske 2 parameter hote hai, resolve and reject.
//     // Do an async task 
//     // BD calls, Cryptography, network call
// });  
// ye jo upper vali line me hane promise banaya hai vo ES6 me introduce hua hai uske pehle bhi promises ka use hota tha but different libraries ke through like Q and Bluebird.


//-------------------------------------------------------------------------------------------------------//
//                                        Tow Part of Promise
//-------------------------------------------------------------------------------------------------------//
// Producing part: jaha par ham promise create karte hai.
//               : is code that can take some time

// Consuming part: promise se mila hua result yaha par consume karte hai ya fir use me lete hai.
//               : is code that must wait for the result


// const firstPromise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async Task completed");
//     }, 1000);
// }) // ye to hogaya creation vala part


//-------------------------------------------------------------------------------------------------------//
//                                              .then()
//-------------------------------------------------------------------------------------------------------//
// now promise ko consume ".then(callback)" se karte hai
// ".then()" promise se jombhi value return aayi hai usko as callback ke parameter me leta hai and uske sath work karta hai.
// "resolve" ka conection bhi ".then()" ke sath hi hai.
// so uske liye pehle hame promise likhna padega fir ".then" likhna padega

// firstPromise.then(function() {
//     console.log("promise consumed");
// })

// now if itne code ko ham run kare to promise ka code to chal raha hai but jo ".then()" ka code hai vo run nahi ho raha hai.
// so iska ye mtlb hua ki hamne promise to kiya ans promise ka jo fisrt state tha "pending" usse bhi cross kar diya.
// but hamne ".then()" ko kabhi bataya hi nahi ki hamne promise pura kar diya.
// isiliye "resolve" kaam me aata hai. kyoki "resolve" batata hai promise pura kar diya hai ab aage kaam kar skte hai.
// so abhi pura code esa hoga ki,

// const completeFirstPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task properly completed")
//         resolve()
// }, 1000)
// })

// completeFirstPromise.then(function(){
// console.log("Promise completed.")
// })
// // ese resolve connected hai ".then()" se kyoki jab tak ham task "resolve" ho gaya hai esa nahi batayenge tab tak ".then()" execute nahi hoga.

//-------------------------------------------------------------------------------------------------------//
//                                         without using variable
//-------------------------------------------------------------------------------------------------------//
// abhi tak hamne promise ko variabale me store karke use kiya but ham usse directly bhi likh skte hai

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("second promise kar diya.😅")
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log("second promise pura kiya.")
// })


//-------------------------------------------------------------------------------------------------------//
//                                     passing value in resolve()
//-------------------------------------------------------------------------------------------------------//
// we can pass value in resolve() to use in ".then()" method's callback function.

// const thirdPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "satyam", email: "hello@gmail.com"}) // mostly ham isme object type me data pass karte hai
//     }, 1000)
// })

// // ab resolve se jo data pass kiya hai vo ".then()" ke callback me receive karte hai
// thirdPromise.then(function(data){
//     console.log(data);
// })


//-------------------------------------------------------------------------------------------------------//
//                                            reject() ka use
//-------------------------------------------------------------------------------------------------------//

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) { // means error nahi hai to ye block execute kar do
//             resolve({ username: 'manav', password: '123' })
//         } else {
//             reject('ERROR: Somthing Went Wrong')
//         }
//     }, 1000)
// })

// const userDetails = promiseFour.then((userData) => {
//     console.log(userData);
//     return userData.username
// })

// console.log(userDetails);
// // esa karne se Promise { <pending> } state me bata raha hai. & "UnhandledPromiseRejection" error aa rahi hai.
// // jis se hame pata chalta hai ki promise comsumtion vala part hame esa kuch bhi return nahi kar raha jiss se ham data nikal paye. 
// // now abhi pata chala ki promise state pending kyo bata rahi hai vo isiliye kyoki hamne "console.log(userDetails);" ye line sabse last me likhi hai to code execution me sabse pehle promise creation execute ho raha hai then, promise consumption means ".then()" vala code execute ho raha hai uske baad "console.log(userDetails);" vali line execute ho rahi hai
// // now see promise ke setTimeout 1 sec baad execute hoga joki eventloop me chala gaya tab tak last line joki hai "console.log(userDetails);" execute ho ja rahi hai & uske hisab se promise ka execution start hi nahi isiliye ho "pending" state me dikha raha hai.


// yaha par hitesh choudhary sir little confuse ho gaye because unhone error ko ture assign kiya hai and if me not vali condition daal di hai isiliye if vala tab tak execute nahi hoga jab tak ya to error me false na assing kar do ya fir error me true hi rehne do but if ki condition me se "!(not)" ka symbol hata do.

//-------------------------------------------------------------------------------------------------------//
//                                            .catch() ka use
//-------------------------------------------------------------------------------------------------------//
// // ab dekho ham esa code isiliye likh rahe hai kyoki hame error bhi chahiye. jise ham ".catch()" se solve karenge.

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: 'manav', password: '123' })
//         } else {
//             reject('ERROR: Somthing Went Wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((userData) => {
//     console.log(userData);
//     return userData.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error); // output:- ERROR: Somthing Went Wrong
// })
// // ab hamne jo error reject me likhi thi vo mil rahi hai


//-------------------------------------------------------------------------------------------------------//
//                                            .finally() ka use
//-------------------------------------------------------------------------------------------------------//
// .finally() hamesha execute hota hi hai. kuch bhi ho either promise resolve or reject.

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: 'manav', password: '123' })
//         } else {
//             reject('ERROR: Somthing Went Wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((userData) => {
//     console.log(userData);
//     return userData.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error); // output:- ERROR: Somthing Went Wrong
// }).finally(() => console.log("The Promise either resolve or reject"))

//-------------------------------------------------------------------------------------------------------//
//                                             async/await
//-------------------------------------------------------------------------------------------------------//
// first iske liye ye padh lo: https://www.w3schools.com/js/js_async.asp
// w3school ke hisab se async/await promise ko easy banate hai likhne ke liye joki sahi hoga but mujhe to .then() vala hi sahi laga.
/**
 // async makes a function return a Promise
 * The keyword async before a function makes the function return a promise:
 * Example
 * async function myFunction() {
 *     return "Hello";
 * }
 * 
 * Is the same as:
 * 
 * function myFunction() {
 *     return Promise.resolve("Hello");
 * }
 */

/**
 * // await makes a function wait for a Promise
 * The await keyword can only be used inside an async function.
 * The await keyword makes the function pause the execution and wait for a resolved promise before it continues, means await wait karta hai promise ke successfully complete hone ka mtlb ke resolve hone ka.
 * I think await "reject()" me nahi chalta hai.
 * 
 * example:
 * async function myDisplay() {
 * let myPromise = new Promise(function(resolve, reject) {
 *   resolve("I love You !!");
 * });
 * document.getElementById("demo").innerHTML = await myPromise;
 * }
 * myDisplay();
 */

/** without await ke ese bhi promise likh skte hai. 
 * async function myFunction() {
 *   return "Hello";
 * }
 * myFunction().then(
 *   function(value) {myDisplayer(value);},
 *   function(error) {myDisplayer(error);}
 * );
*/

// const fifthPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (error) {
//             resolve({username: "JS", password: "1234"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     })
// })

// // async fifthPromise()// promise bana kar ham usse ese nahi likh skte. uske liye alag se function banana padta hai.
// async function consumeFifthPromise(){
//     let response = await fifthPromise
//     console.log(response);
// }
// // ye async function bana kar execute karna bhi jaruri hai.
// consumeFifthPromise()
// // yaha tak hamne likha tha without error vala code, ab error vala code likhte hai



// const fifthPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "JS", password: "1234"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     })
// })

// async function consumeFifthPromise(){
//     let response = await fifthPromise
//     console.log(response);
// }
// // ab error mil rahi hai: UnhandledPromiseRejection, err_code: 'ERR_UNHANDLED_REJECTION'
// // yaha esi error isliye mil rahi hai kyoki error hamne likh rakhi hai yrr, ye batane ke liye ki async/await error handle nahi kar pata hai isiliye usme hame try catch ka use karna padega. means reject() handle karne ki capacity nahi hai.


// const fifthPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "JS", password: "1234" })
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     })
// })

// async function consumeFifthPromise() {
//     try {
//         let response = await fifthPromise
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumeFifthPromise()


//-------------------------------------------------------------------------------------------------------//
//                                  real API example using async/await
//-------------------------------------------------------------------------------------------------------//
// yaha par ham async/await ka use karenge.
// ab dekho yaha per ham fetch() ka use karenge joki baad me dekhenge.

// problem 1 occurs: network call ko time lagta hai response dene me.

// async function getAllUsers(){
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    // sabse jaruri baat jab bhi ese API se data lao tab uska type check kar lena chaiye.
//    // yaha par uska type string hai lekin usse JSON me convert karenge.
//    const data = response.json()
//    console.log(data);
// }
// getAllUsers() // output : Promise { <pending> }
// // ab yaha per ye pending isliye bata raha hai kyoki "network calls(like ye API)" time leti hai response dene me and usse pehele hi function execute ho ja raha hai and console.log bhi execute ho ja raha hai lisiye "data" me value "pending" aa rahi hai.


// problem 2 occurs: try-catch me abhi yahi dikkat aayi ki network call ko time lagta hai response dene me.

// // so usse try-catch me daal ke dekhte hai.
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers() // ab bhi same hi output: Promise { <pending> } aa raha hai. ye bhi isliye hi bata raha hai kyoki network call's ko response dene me kabhi kabhi time lagta hai.


// problem 3 occurs: .json() ko bhi time lagta hai type convertion me.

// but yaha par ek or nayi dikkat mili hai ki ".json()" ko bhi type convert karane me time lagta hai. to uske liye usse bhi await karvana padega.
// kyoki upper "response" me to data aa raha hai joki ham console.log karke dekh skte hai but ajib format me aa rahe hai. isliye fir pata chal rha hai ki .json() ko time lag rha hai.

// async function getAllUsers() {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//         const data = await response.json()
//         console.log(data);
// }
// getAllUsers()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()

//-------------------------------------------------------------------------------------------------------//
//                            real API example using promise.then().catch()
//-------------------------------------------------------------------------------------------------------//
// yaha per ham .then() and promises ka use karenge
// but yaha per dekhne vali baat ye hai ki jo fetch() hai vo promise return karta hai(maybe). isiliye hum usme bhi .then() and .catch() se chaining kar skte hai.

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(function(response){
//     const data = response.json() // yaha per hame store nahi karna tha hame return karna tha.
// })

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))
// now ye upper vali se likhne ke mamle me sahi hai kyoki hame async function ko alag se execute nahi karvana pada. itna hi code likh ke direct chhhod do kyoki ye apne aap hi execut eho jata hai.

// last me kab "async/await" use karna hai & kab promise ke sath ".then().catch()" use karna hai ye dekh lena.