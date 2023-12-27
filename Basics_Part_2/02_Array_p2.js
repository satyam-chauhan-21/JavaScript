/*
 * In this file I've learn more about Array. 
 * Three things,
 * 1) merging two or more array using 1)concat() function and 2)sprade operator.
 *   --> Flat() method
 * 2) making array using 1) Array.from() and 2) Array.of().
 * 3) also learned & used isArray() to check given value is array or not.
 */

const array1 = [1,2,3,4,5,6]
const array2 = [7,8,9]

/**
 * by performing push() operation we are thinking that array1 and array2 will be 
 *  merged or concatinate but array2 will became its new element
 * for example we have two arrays here : array1 and array2
 * now we perform push() operation on array1 and in push() we give array2 as argument
 *      now, when we print array1, array2 is pushed in it as element   
 */
// array1.push(array2)

// console.log(array1) // output : [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]

/**
 * now access the value of array1's 7th element (which is here array2),
 * we will write code like this,
    array1[index where sub array is present(here index is 6)][index of element present in sub array]
 */

// console.log(array1[6][1]) // output : 8


//************************************************************//
//------------------------------------------------------------//


/*
    now we want to merge two array and it has two methods ✅
    1) by using concat() function
    --- this methos creates new array and we have to store it in new array.
    2) by using sprade operator
    --- [...array_name1,...array_name2,...array_name3, and so on]
    ---> must use only three DOTs brfore array_name.
    --- by using sprade operator we can merge multiple arrays.
*/

// 1) by using concat() method 
// const array3 = array1.concat(array2)
// console.log(array3); // output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// 2) by using sprade oprator
// ---> must use only three DOTs brfore array_name.

// const array4 = [...array1,...array2]
// console.log(array4); // output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// const array5 = [...array1,...array2,...array3]
// console.log(array5); // output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


//------------------------------------------------------------//
// concatination or combining sub array into one array,
//  of this type of array [ 1, 2, [ 3, 4 ], 5, [ 6, 7, [ 8, 9 ] ] ]
// using Flat() ✅

/**
 * Flat() : returns a new array with all sub-array elements,
 * --->concatenated into it recursively upto the specified depth
 * --->we have to pass an argument which represents depth of sub-array till we want to concatenate 
 *      with root or parant array.
 * --->we can just simply write "Infinity", so it will concatenate all sub-array to main or root array.
 */

// const arr1 = [ 1, 2, [ 3, 4 ], 5, [ 6, 7, [ 8, 9 ] ] ]

// const arr2 = arr1.flat(Infinity)
// console.log(arr2);

//************************************************************//
//------------------------------------------------------------//

// used isArray() to check given value is array or not. ✅
/**
 * checking value is Array or not by using "Array.isArray()" method
 * below code will check that given input string is array or not.
 * -->if its an array so true will returned else flase will returned.
 */
// console.log(Array.isArray("Shyam")); // output : false

/**
 * for creating array we can use to methods 
 *  1) Array.from(values or variable for which we want to create arrays)
 *  2) Array.of(values or variable for which we want to create arrays)
 * below code will create an array of given input argument and return an array.
 * we can give any velue either it can be objects or strings.
 */
// //using Array.from() method
// console.log(Array.from("Shyam")); // output : [ 'S', 'h', 'y', 'a', 'm' ]

// for this type of object argument output will be always an empty array
// console.log(Array.from({name : "Shyam"})); // output : []


//************************************************************//
//------------------------------------------------------------//

// making array using 1) Array.from() and 2) Array.of(). ✅
// using Array.of() method
/*
 Array.of() consider "Shyam" an onle element value 
 and not break it into characters like Array.from divide "Shyam"
*/
// console.log(Array.of("Shyam")); // output : [ 'Shaym' ]

// creating array from different variavbles & using Array.of() method
// let value1 = 100;
// let value2 = 200;
// let value3 = 300;

// console.log(Array.from(value1,value2,value3)); 
/**
 * I think we can't make array from variable values using Array.from() method
 * so, that we use Array.of() method for solving this problem.
 */

// // we can also use Array.of() method to create arrays

// console.log(Array.of(value1,value2,value3)); // output : [ 100, 200, 300 ]
