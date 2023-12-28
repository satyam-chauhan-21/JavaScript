// in this file I've learn about truthy & flasy value.
/**Description
 * - Falsy
 * - Truthy
 * - checking empty array as truthy
 * - checking empty object as truthy
 * - Nullish Coalescing Operator " ?? "
 */

//------------------------------------------------------------//
//                      Falsy Values
//------------------------------------------------------------//

/**
 * in JS some values are considered as False values which are given below
 * false,
 *  0,
 *  -0,
 *  BigInt 0n,
 *  ""(empty string),
 *  null,
 *  undefined,
 *  NaN
 * apart from this values all the other values were consider as truthy value
 */
// // IF statement's condition is undefined
// if ("") {
//     console.log("this code is not executed.");
// }
// else {
//     console.log("this code is executed because it's IF condition is an empty string.");
// }

// // IF statement's condition is undefined
// if (undefined) {
//     console.log("this code is not executed.");
// }
// else {
//     console.log("this code is executed because it's IF condition is undefined.");
// }

// // IF statement's condition is NaN
// if (NaN) {
//     console.log("this code is not executed.");
// }
// else {
//     console.log("this code is executed because it's IF condition is NaN.");
// }

//------------------------------------------------------------//
//                      Truthy Values
//------------------------------------------------------------//

/**
 * some values which look like falsy but actually these values are truthy,
 * {anything inside a string is consider as a truthy value.}
 * - " " : space inside a string. 
 * - "0" : zero inside a string.
 * - "false" : false inside a string.
 * - [] : empty Array is truthy value.
 * - {} : empty Object is also a truthy value.
 * - function(){} : function without any parameters and execution code is known as empty function is also a truthy value.
 */

/**
 * for example in below we declare a variable and pass it in IF() statement, 
 * and the code block of IF() is executed because it consider that variable as truthy value. 
 */

// const userEmail = "hello@gmail.com"

// if (userEmail) {
//     console.log("got user email");
// } else {
//     console.log("doesn't get user email");
// }

// // IF statement's condition is "0"
// if ("0") {
//     console.log("0 in string is a truthy value");
// } else {
//     console.log("0's else part");
// }

// // IF statement's condition is "flase"
// if ("flase") {
//     console.log("flase in string is a truthy value");
// } else {
//     console.log("flase's else part");
// }

// // IF statement's condition is "undefined"
// if ("undefined") {
//     console.log("undefined in string is a truthy value");
// } else {
//     console.log("undefined's else part");
// }

// // IF statement's condition is "NaN"
// if ("NaN") {
//     console.log("NaN in string is a truthy value");
// } else {
//     console.log("NaN's else part");
// }


// // IF statement's condition is "null"
// if ("null") {
//     console.log("null in string is a truthy value");
// } else {
//     console.log("null's else part");
// }

//------------------------------------------------------------//
//          Checking empty Array as truthy value
//------------------------------------------------------------//

/**
 * Don't check [] empty array directly given like below
 */
// IF statement's condition is []
// if ([]) {
//     console.log("[] empty Array as truthy value");
// } else {
//     console.log("empty Array's else part");
// }

/**
 * But check empty array using this condition
 * - first store that empty array in a variable
 * - then write this condition,
 *      variable_name.lenth === 0
 */

// const array = []
// // const array = [2,3]
// if (array.length === 0) {
//     console.log("Array is empty.");
// }
// else {
//     console.log("Array isn't empty");
// }

//------------------------------------------------------------//
//          Checking empty Object as truthy value
//------------------------------------------------------------//
/**
 * as abov condition of empty array in IF statement, there is also a consdition for empty object,
 * as we know that Object.keys(obj_name) returns an array of key's of that object which we pass as parameter,
 * so if we check this array's length as we found abow example so we can check if an Object is empty or not.
 * so the condition can be coded as,
 *      Object.keys(obj_name).length === 0
 */
// // checking empty object
// const empty_Obj1 = {}
// if (Object.keys(empty_Obj1).length === 0) {
//     console.log("Object_1 is Empty");
// } else {
//     console.log("Object_1 isn't Empty");
// }

// // checking, not empty object
// const empty_Obj2 = {
//     a : 1,
//     b : 4
// }
// if (Object.keys(empty_Obj2).length === 0) {
//     console.log("Object_2 is Empty");
// } else {
//     console.log("Object_2 isn't Empty");
// }

//------------------------------------------------------------//
//              Nullish Coalescing Operator " ?? "
//------------------------------------------------------------//
/**
 * Nullish Coalesing Operator " ?? " is used for,
 * sometimes, when we get values from Databases or anywhere else, we get two values either "null" or "undefined" or 
 *      anything else value or we don't get any response in that situation our code might be not work,
 * for that type of case we have this `Nullish Coalescing Operator " ?? "`.
 * - The nullish coalescing operator (??) is a JavaScript logical operator that returns the second value if 
 *      the first value is null or undefined. It's a short-circuited operator that can't be directly combined 
 *      with the logical AND or OR operator.
 * - this operator is made for "null" & "undefined".
 */

// in this case value of var1 is firstvalue
// let var1;
// var1 = 5 ?? 10
// console.log(var1); // output : 5

/**
 * - in this case, if null value comes from DataBase so thi operator checks it's safty and then assign value.
 * - here the second value apart from "null" is a valid value which is 10, so 10 is assigned to var2.
 * - if any error value or something undefined value is comming so "null" is assigned to the var2.
 * here second value us 10 but in future it can be any complex function which fatch the value from the Database.
 */
// in this case value of var1 is secondvalue
// let var2;
// var2 = null ?? 10
// console.log(var2); // output : 10


//------------------------------------------------------------//
//   Nullish Coalescing Operator " ?? " more than two value
//------------------------------------------------------------//
/**
 * for more than two value Nullish Coalescing Operator assign the first value occurs,
 * for below example, 10 is occurs just before the "null" and after 10 the third value 20 is come.
 * and the place of 10 & 20 there can be any other function.
 */

let var3;
var3 = null ?? 10 ?? 20
console.log(var3);