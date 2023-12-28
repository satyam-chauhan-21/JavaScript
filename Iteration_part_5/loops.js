// In this file I've learn about Loops in JS.
/**
 * - for loop
 *   - For loop for Array
 * - Break & Continue
 * - while loop
 *   - While loop for Array
 * - do while loop
 * - 
 */

/**
 * I know about For loop, While loop & Do While loop so i don't write anything about that.
 */

//------------------------------------------------------------//
//                      For Loop
//------------------------------------------------------------//
// for (let i = 1; i <= 10; i++) {
//     console.log(`table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log( i + " * " + j + " = " + (i*j));
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(`element is ${element}`);
//     }
//     console.log(element);
// }

//------------------------------------------------------------//
//                      For loop for Array
//------------------------------------------------------------//

// const myArray = ["flash", "batman", "superman", "aquaman","zoro"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//------------------------------------------------------------//
//                      Break & Continue
//------------------------------------------------------------//

// // Break
// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     if (element == 7) {
//         break;
//     }
//     console.log(element);
// }


// // Continue
// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     if (element == 6) {
//         continue;
//     }
//     console.log(element);
// }

//------------------------------------------------------------//
//                          While loop
//------------------------------------------------------------//

// let index = 0
// while (index != 10) {
//     console.log(index);
//     index = index + 1;
// }

//------------------------------------------------------------//
//                      While loop for Array
//------------------------------------------------------------//

// const arr = ["flash", "batman", "superman", "aquaman","zoro"]
// let index = 0
// while (index < arr.length) {
//     console.log(arr[index]);
//     index = index + 1;
// }

//------------------------------------------------------------//
//                        Do While loop
//------------------------------------------------------------//

// let index = 1
// do {
//     console.log(index);
//     index = index + 1;
// } while (index <= 10);

// ture use of do-while loop
// let index = 11
// do {
//     console.log(index);
//     index = index + 1;
// } while (index <= 10);