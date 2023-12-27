// In this file I've learn about "this" keyword and Arrow function.
/**
 * - "this" keyword
 * - why we don't use "this" keyword in functions with two example.
 * - Arrow function (just writing function in another type)
 * - Difference between Arrow and Regular Function
 * - Using Parentheses in Implicit Return
 */

//------------------------------------------------------------//
//                      "this" keyword
//------------------------------------------------------------//
/**
 * "this" keyword is also known as execution contex.
 * "this" keyword used to refered current context.
 * in below example current context is "user" object. so "this" keyword refered to "user".
 */
// const user = {
//     uname : "Hitesh",
//     price : 399,

//     welcomeMessage : function() {
//         // below both statement will gave same output.
//         // console.log(`${user.uname}, welcome to website.`);
//         console.log(`${this.uname}, welcome to website.`);
//         // console.log(this)
//     }
// }

// user.welcomeMessage() // output : Hitesh, welcome to website.
// user.uname = "Manav"
// user.welcomeMessage() // output : Manav, welcome to website.

// console.log(this); // output : {} 
/**
 * above "console.log(this);" returns "empty" object in node in vscode but,
 * "console.log(this);" returns "Window" object in browser's console.
 * because "Window" is Global object, & "console.log(this);" returns Globale object.
 */

//------------------------------------------------------------//
//                         example_1 
//------------------------------------------------------------//

// function hello(){
//     console.log(this);
// }
// hello()
/**
 * if we use "this" keyword in function as shown above it returns 
 * output :
 <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],       
  clearImmediate: [Function: clearImmediate],       
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],     
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 63.590900000184774,
      nodeStart: 4.38289999961853,
      v8Start: 10.326500002294779,
      bootstrapComplete: 46.15240000188351,
      environment: 22.798200000077486,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1703509849463.722
  },
  fetch: [AsyncFunction: fetch]
}
 */

//------------------------------------------------------------//
//                         example_2 
//------------------------------------------------------------//

// function hello() {
//     let username = "Manav"
//     console.log(this.username);
// }
// hello() // output : undefined

// const hello = function () {
//     let username = "Manav"
//     console.log(this.username);
// }
// hello() // output : undefined
//------------------------------------------------------------//
/**
 *         In function's we can't use "this" keyword.
 *          as we see in above two example.
*/
//------------------------------------------------------------//


//------------------------------------------------------------//
//                      Arrow Function
//------------------------------------------------------------//
/**
 * Arrow Function were introduced in ES6 and have become increasingly popular since then. 
 * when we create a function, we generally used "function" keyword to create a function.
 * Arrow function is nothing but wirting function in another method or syntex. 
 * in Arrow function we don't use "function" keyword because it replaced with '=>'.
 */

// function function_name(){
//     console.log("hello")
// }
// function_name()


//------------------------------------------------------------//
// const hello = () => {
//     console.log("first arrow function");
// }
// hello() // output : first arrow function


// if we use "this" keyword as shown below it will return an empty object.
// const hello = () => {
//     console.log(this);
// }
// hello() // output : {} (returning empty object)

//------------------------------------------------------------//
//      Difference between Arrow and Regular Function
//------------------------------------------------------------//

/**
 * Arrow functions have a few other advantages over regular functions. For example, 
 *      they do not have their own "this" context, which means that they always use 
 *      the "this" context of the enclosing scope. This can be helpful in some cases, 
 *      but it can also be confusing if you are not used to it.
 * Arrow functions can also be used to create anonymous functions. Anonymous functions
 *      are functions that do not have a name. They can be useful in some cases, but 
 *      they can also be confusing if you are not used to them.
 */
/**
 * folow this link for more (pls open this link atleast once 🟥) :-
 * https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/#:~:text=arguments%20object%20inside%20the%20regular,args%20).
 */

//------------------------------------------------------------//
//                      Implicit Return
//------------------------------------------------------------//
/**
 * If you only have one line in your function which is returning 
 *      something you can put it on one line without the return statement.
 * Implicit return in arrow function means removing return statement and braces for one line statement.
 *      just like below given example, 
 */
// const add = (num1,num2) => {
//     return num1 + num2
// }
// console.log(add(5,9)); // output : 14

//------------------------------------------------------------//
//          Using Parentheses in Implicit Return
//------------------------------------------------------------//
// const add = (num1,num2) => num1 + num2
// console.log(add(5.25,9.38)); // output : 14.63

/**
 * we can bound num1+num2 in parentheses means "()"
 * so above example ⬆ can be written as below example ⬇
 */

// const add = (num1,num2) => ( num1 + num2 )
// console.log(add(6.25,7.38)); // output : 13.629999999999999

//------------------------------------------------------------//
/**
 * if we don't use parentheses so there will be problem in returning Object.
 */
// const returnObject = () => {uname : "Karan"}
// console.log(returnObject()); // output : undefined

/**
 * but we use parentheses so we can solve that problem occur in without using parentheses.
 */
// const returnObject = () => ({uname : "Karan"})
// console.log(returnObject()); // output : { uname: 'Karan' }