// In this file I've learn about foreach().
/**
 * - Foreach() on Array
 *  - using regular function
 *  - using Arrow function
 * - Passing other function in foreach()
 * - Callback function can accept Multiple parameters
 * - appling foreach() on Objects in Array
 */

//------------------------------------------------------------//
//                  Foreach() on Array
//------------------------------------------------------------//
/**
 * we can use foreach() on array by passing a callback function in it.
 * because foreach() is a method of Array made by us.
 * it can take function which can be made in foreach() method's argument or
 *   we can make this function outside the foreach() method's arguments, for that ,
 *      we have to pass only reference of that function means name of that function.
 */

//------------------------------------------------------------//
//          using regular function in foreach()
//------------------------------------------------------------//
// const language_arr = ['js', 'cpp', 'java', 'python']

// /**
//  * in foreach() we passed a callback function.
//  * callback function doesn't have any name.
//  * in callback function we passed a parameter which points at array's elements.
//  */
// language_arr.forEach( function (item) {
//         console.log(item);
// })
// /**
//  * output : 
//  *  js
//     cpp
//     java
//     python
//  */

//------------------------------------------------------------//
//              using Arrow function in foreach()
//------------------------------------------------------------//
// // we can also use arrow function in foreach() methods parameter.
// const language_arr = ['js', 'cpp', 'java', 'python']

// language_arr.forEach( (element) => {
//     console.log(element);
// })
// /**
// * output : 
// *  js
//     cpp
//     java
//     python
// */

//------------------------------------------------------------//
//          Passing other function in foreach()
//------------------------------------------------------------//
// we can make any other function and passed it in foreach() method's parameter.

// const language_arr = ['js', 'cpp', 'java', 'python']

// function printMsg(item){
//     console.log(item);
// }

// /**
//  * if we want to pass a function as a parameter of foreach() method,
//  *  so we have to pass only function's reference means function_name instead of like this function_name().
//  * don't use both function_name and it execution call means ' () '.
//  */
// language_arr.forEach(printMsg);
// /**
// * output : 
// *  js
//     cpp
//     java
//     python
// */


//---------------------------------------------------------------------------//
//              Callback function can accept Multiple parameters
//---------------------------------------------------------------------------//
// /**
//  * in foreach() method's parameter's function we can pass multiple values like,
//  *  elements in array, indexes of array & array itself.
//  */

// const language_arr = ['js', 'cpp', 'java', 'python']

// language_arr.forEach( (element, indexes, language_arr) => {
//     console.log(element, indexes, language_arr);
// })

// /**
//  * output : 
//  *  js 0 [ 'js', 'cpp', 'java', 'python' ]
//     cpp 1 [ 'js', 'cpp', 'java', 'python' ]
//     java 2 [ 'js', 'cpp', 'java', 'python' ]
//     python 3 [ 'js', 'cpp', 'java', 'python' ]
// * 
// */

//------------------------------------------------------------//
//            appling foreach() on Objects in Array
//------------------------------------------------------------//

const arrOf_Obj = [
    {
        languageName : "Javascript",
        languageExtention : "js"
    },
    {
        languageName : "C++",
        languageExtention : "cpp"
    },
    {
        languageName : "Python",
        languageExtention : "py"
    }
]

arrOf_Obj.forEach( (value) => {
    console.log(value);
})
/**
 * output : 
*  { languageName: 'javascript', languageExtention: 'js' }
    { languageName: 'C++', languageExtention: 'cpp' }  
    { languageName: 'Python', languageExtention: 'py' }
*/

/**
 * now we know here in arrow function we passed parameter "value" is indecating individual object in array.
 * so we can access all object's property using dot '.' operator.
 */
arrOf_Obj.forEach( (value) => {
    console.log(value.languageName);
})
/**
 * output : 
*   Javascript
    C++
    Python
*/