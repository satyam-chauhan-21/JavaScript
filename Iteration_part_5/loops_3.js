// In this file I've lear Loops of Object.
/**
 * - For In loop on Object
 * - For In loop on Array
 * - For In loop on Map
 */

/**
 * For In loop used for iterate Objects.
 */
//------------------------------------------------------------//
//                    For In loop on Object
//------------------------------------------------------------//

// const language_Obj = {
//     js : "javascript",
//     cpp : "C++",
//     py : "Python",
//     cs : "C#"
// }

// for (const key in language_Obj) {
//     console.log(key);
// }

// output : we get all key's by using abow code
// js
// cpp
// py
// cs
//------------------------------------------------------------//
// const language_Obj = {
//     js : "javascript",
//     cpp : "C++",
//     py : "Python",
//     cs : "C#"
// }
// // // below FOR IN loop has wrong syntex for printing key & values of any Object
// // for (const [key, value] in language_Obj) {
// //     console.log(key,' => ',value);
// // }

// // use this code for printing key & values of any Object
// for (const key in language_Obj) {
//     console.log(`${key} and it's value : ${language_Obj[key]}`);
// }
// /**
//  * output for abow loop :
//  *  js and it's value : javascript
//     cpp and it's value : C++
//     py and it's value : Python
//     cs and it's value : C#
//  */

//------------------------------------------------------------//
//                    For In loop on Array
//------------------------------------------------------------//

// const arr = ['a','s','d','f','g']

// // as output of below code we get only key(beacause array in JS is an object) means indexs of array
// for (const key in arr) {
//     console.log(key); // output : 0 1 2 3 4
// }

// const arr = ['a','s','d','f','g']

// // to get values of array we have to modify this code like,
// for (const key in arr) {
//     console.log(arr[key]); // output : a s d f g
// }


//------------------------------------------------------------//
//                    For In loop on Map
//------------------------------------------------------------//
/**
 * we can't use For In loop for Map because Map is not Iterable.
 * so below code will be run but not generate any output.
 */
// const map = new Map()

// map.set("INDIA", "Delhi")
// map.set("GUJARAT", "Gandhinagar")
// map.set("UP", "Lakhnow")
// map.set("MP", "Bhopal")

// for (const key in map) {
//     console.log(key);
// }

