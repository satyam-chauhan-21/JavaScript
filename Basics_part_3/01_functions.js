// In this file I've learn about Function in JS.
/** Description :
 * - creating Function
 * - Function for adding two numbers
 * - Function with or without returning values
 * - REST Operator
 * - Passing Object to Function
 * - Passing Array to Function
 * - Function Expression
 */


//************************************************************//

//------------------------------------------------------------//
//                          Function
//------------------------------------------------------------//
/**
 * for creating a Function in JS we have to use "fuction" keyword.
 * syntext : function function_name()
 *           {
 *                  //code
 *           }
 */

// function firstFunction() {
//     console.log("creating First function in JS :)")
// }

// // here "firstFunction" is reference and "firstFunction()" is execute or function call
// firstFunction() // function call


//------------------------------------------------------------//
//              Function for adding two numbers
//------------------------------------------------------------//

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNum() // output : NaN
// addTwoNum(5,6) // output : 11
// addTwoNum(3,"3") // output : 33
// addTwoNum(3,"a") // output : 3a
// addTwoNum(3,null) // output : 3

/**
 * in JS we can store function in variable.
 * but function don't return any value to that variable,
 * ========> so the value of variable stores or hold value "undifined".
 * or if function returns any value to that variavble so that value assign to the variable.
 */

//------------------------------------------------------------//
//              Function don't return any value
//------------------------------------------------------------//
// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

// const result = addTwoNum(5,9)
// console.log(result); // output : undefined


//------------------------------------------------------------//
//                  Function returns value
//------------------------------------------------------------//
// function addTwoNum(num1,num2){
//     return (num1+num2);
// }

// const result = addTwoNum(5,9)
// console.log(result);

// function loggedIn(uname)
// {
//     // if (uname === null || uname == "") {
//     //     console.log("enter user name ");
//     //     return
//     // }
//     if (!uname) {
//         console.log("enter user name ");
//         return
//     }
//     return `${uname} is logged In`
// } 

// console.log(loggedIn(""))

//------------------------------------------------------------//
//                      REST Operator
//------------------------------------------------------------//

// function calculateCart(num1){
//     return num1
// }

// console.log(calculateCart(2)); 
/**
 * in above function call we just give single number(argument) and function also has one parameter
 *      but what is function has only one parameter and we passed more than one arguments and we want all 
 *      of them get returned by function so "REST operator" come in play.
 * => "REST operator" is similar to Sprad operator, 
 *      it used by simply adding three dots "..." before the parameter in function 
 *  REST operator returns values abound in an ARRAY
 */  

// function calculateCart(...num1){
//     return num1
// }

// console.log(calculateCart(2,4,5,6,4,)); // output : [ 2, 4, 5, 6, 4 ]


// below example don't return first two value because it returning only "num1 and rest of the num1 values"
// function calculateCart(num2,num3,...num1){
//     return num1
// }

// console.log(calculateCart(2,4,5,6,4,)); // output : [ 5, 6, 4 ]

//------------------------------------------------------------//
//                Passing Object to Function
//------------------------------------------------------------//

// const user = {
//     name : "hitesh",
//     age : 35
// }

// function handleObject(anyObject){
//     console.log(`User name is ${anyObject.name} and his age is ${anyObject.age}`);
// }

// // handleObject(user)
// // we can create object in function call
// handleObject({
//     name : "manav",
//     age : 23
// })

//------------------------------------------------------------//
//        Just using my Object Destructuring concepts
//------------------------------------------------------------//

// const user = {
//     username : "hitesh",
//     userage : 35
// }
// const {username: uname,userage: uage} = user
// function handleObject(anyObject){
// console.log(`User name is ${username} and his age is ${userage}`);
// }
// handleObject(user)
//------------------------------------------------------------//
// const user = {
//     username : "hitesh",
//     userage : 35
// }
// const {username: uname,userage: uage} = user
// function handleObject(anyObject){
// console.log(`User name is ${uname} and his age is ${uage}`);
// }
  
// handleObject(user)

//------------------------------------------------------------//
//                Passing Array to Function
//------------------------------------------------------------//

// const myArray = [ 100, 200, 300, 400, 500 ]

// function returnArrayValue(anyarray) {
//     return anyarray[2]
// }

// // console.log(returnArrayValue(myArray)); // output : 300
// // creating array at function call
// console.log(returnArrayValue([1,2,3,4,5])); // output : 3

//------------------------------------------------------------//
//                     Function Expression
//------------------------------------------------------------//
/**
 * Storing function in a variable is known as Function Expression.
 */

// const greet = function(who) {
//     return `Hello, ${who}`;
//   }

// console.log(greet("Manav")) // output : Hello, Manav