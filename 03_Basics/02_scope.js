// In This file I've learn about scoping in JS
/**
 * - Local & Global scope of variable
 * - hoisting
 */


/**
 * ther are two types of scope 1) Global and 2) Local
 * 1) Global scope variables values can be access from anywhere in the program .
 * 2) Local scope variables values can be access inside it's block or it's childe block's but not accessible outside of that block
 */
// let a = 10
// const b = 20
// var c = 30 

// console.log(a); // output : 10
// console.log(b); // output : 20
// console.log(c); // output : 30

/**
 * here we declare variable a, b, c using let, const, var and we again declare that variable in "if block",
 * "var" don't have block scope so the value of variable c is overwritten in if block
 * but let and const have block scope so the value of a & b don't chenge.
 */
// let a = 10
// const b = 20
// var c = 30 

// if (1) {
//     let a = 100
//     const b = 200
//     var c = 300
// }

// console.log(a); // output : 10
// console.log(b); // output : 20
// console.log(c); // output : 300

//----------------------------------------------------------------------------------------//
//              Accessing Parent functions varible in it's childe function
//----------------------------------------------------------------------------------------//

// outputfirst is first time run the code 
// outputsecond is run code after solving errer that occur in outputfirst
// outputthird & outputfourth showing that we can't call childe function outside of it's parent function
// function parent() {
//     const uname = "karan"
//     function childe(){
//         const fullname = "manav"
//         console.log(uname); // outputsecond : karan
//     }
//     // console.log(fullname); // outputfirst : ReferenceError: fullname is not defined
//     // childe()
// }
// // childe() // outputthird : ReferenceError: childe is not defined
// parent()
// // childe() // outputfourth : ReferenceError: childe is not defined



//------------------------------------------------------------//
//                         Hoisting
//------------------------------------------------------------//

/**
 * Hoisting : we call use variables of "var" type before it's declaration and it's return undifined.
 *      But we can't use "let" and "const" variables before it's declaration because,  
 *          it gives error like this => ReferenceError: Cannot access 'a' before initialization 
 */

// console.log(a); // output : undefined
// var a = 10
// console.log(a); // output : ReferenceError: Cannot access 'a' before initialization
// let a = 10
// console.log(b); // output : ReferenceError: Cannot access 'b' before initialization
// const b = 10

/**
 * we call function before it's declaration or creation
 */

// console.log(addOne(5)) // output : 6
// function addOne(num){
//     return num + 1
// }
/**
 * But we can't accesse this function before declare, which is stored in a variable.
 * it give below error when we store it in "const" variable 
 */
// console.log(add(8)); // output : ReferenceError: Cannot access 'add' before initialization
// const add = function (num){
//     return num + 2
// }

/**
 * But we can't accesse this function before declare, which is stored in a variable.
 * it give below error when we store it in "var" variable 
 *      here we create a function but not give any name to it and store it in a varible which
 * is a "var" type then we run program and it gives below error
 */
// console.log(add(7)); // output : TypeError: add is not a function
// var add = function(num){
//     return num + 3 
// }

/**
 * here we create a function named it as "addThree". and store it in a varible which
 * is a "var" type then we run program and it gives below error
 */
// console.log(addThree(7)); // output : ReferenceError: addThree is not defined
// var add = function addThree(num){
//     return num + 3 
// }
