// In this file I've learn about IIFE.
/**
 * - IIFE
 * - creating IIFE using 
 *      1) Regular function & 
 *      2) Arrow function
 * - a Problem occur in creating anohter IIFE after one IIFE
 * - Passing an Argument to an Arrow IIFE
 * - Named IIFE
 */

//------------------------------------------------------------//
//          Immediately Invoked Function Expressions
//------------------------------------------------------------//

/**
 * IIFE stands for:- Immediately Invoked Function Expressions
 * it's used for preventing problems that occur from pollution of global scope's variable.
 * 
 * wirting an IIFE, is used two parentheses "()()"
 *      first for writing fucntion in it 
 *      second for cexecuting that IIFE or function
 */

//------------------------------------------------------------//
//          creating IIFE using Regular function
//------------------------------------------------------------//
// (function printMessage() {
//     console.log("created first IIFE using Regular function");
// })()
// // output : created first IIFE using Regular function


//------------------------------------------------------------//
//          creating IIFE using Arrow function
//------------------------------------------------------------//
// ( () => {
//     console.log("created first IIFE using Arrow function");
// } )()
// // output : created first IIFE using Arrow function


//------------------------------------------------------------//
//   Problem occur in creating anohter IIFE after one IIFE
//------------------------------------------------------------//
// (function printMessage() {
//     console.log("created first IIFE using Regular function");
// })()

// ( () => {
//     console.log("created first IIFE using Arrow function");
// } )()
// /**
//  * when we run above code it gives this type of error: TypeError: (intermediate value)(...) is not a function
//  *  because we don't use semicolon ";" after calling printMessage().
//  */
//------------------------------------------------------------//
// /**
//  * solution of above problem
//  * so we have to use semicolon after one IIFE then we can create another IIFE.
//  * & our code can successfully run 
//  */
// (function printMessage() {
//     console.log("created first IIFE using Regular function");
// })();

// ( () => {
//     console.log("created first IIFE using Arrow function");
// } )()
// /**
//  * output of above two IIFE:
//  *  created first IIFE using Regular function
//  *  created first IIFE using Arrow function
//  */


//------------------------------------------------------------//
//          Passing an Argument to an Arrow IIFE
//------------------------------------------------------------//
// ( (uname) => {
//     console.log(`Hello ${uname}`);
// } )("Manav")
// // output : Hello Manav


//------------------------------------------------------------//
//                         Named IIFE
//------------------------------------------------------------//
/**
 * function with function_name inside an IIFE is called named IIFE
 *  it can be both either Regular function or Arrow function
 */
