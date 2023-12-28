// In this file I've learn more about Loops.
/**
 * - For Of loop
 * - For Of loop for String
 * - Maps
 * - For of loop on Maps
 * - For of loop on Object
 */

//------------------------------------------------------------//
//                         For Of loop
//------------------------------------------------------------//
/** 
 * For Of loop generally used for Array's.
 */

// const array = [ 1, 2, 3, 4, 5 ]
// for (const iterator of array) {
//     console.log(array[iterator]); // output : 2 3 4 5 undefined // search about it later
// }

// const array = [ 1, 2, 3, 4, 5 ]
// for (const iterator of array) {
//     console.log(iterator) // output : 1 2 3 4 5
// }

//------------------------------------------------------------//
//                  using For Of loop for String
//------------------------------------------------------------//

// const greetings = "hello world"
// for (const greet of greetings) {
//     console.log(`each char of greetings if ${greet}`);
// }


// // below code skip spaces in string
// const str = "hello world"
// for (const iterator of str) {
//     if (iterator == " ") {
//         continue;
//     }
//     console.log(iterator);
// }

//------------------------------------------------------------//
//                             Maps
//------------------------------------------------------------//
/**
 * - Map is an Object.
 *      The Map object holds key-value pairs and remembers the original insertion order of the keys.
 *  Any value (both objects and primitive values) may be used as either a key or a value.
 * - there is no duplicate values in Map.
 */

// const map = new Map()

// map.set("INDIA", "Delhi")
// map.set("GUJARAT", "Gandhinagar")
// map.set("UP", "Lakhnow")
// map.set("MP", "Bhopal")
// console.log(map);

/**
 * output : Map(4) {
            'INDIA' => 'Delhi',        
            'GUJARAT' => 'Gandhinagar',
            'UP' => 'Lakhnow',
            'MP' => 'Bhopal'
           }
 */

//------------------------------------------------------------//
/**
 * Map doesn't print duplicate key:value pairs
 */
// const map = new Map()

// map.set("INDIA", "Delhi")
// map.set("GUJARAT", "Gandhinagar")
// map.set("UP", "Lakhnow")
// map.set("GUJARAT", "Gandhinagar")

// console.log(map);
// /**
//  * output : Map(3) {
//                 'INDIA' => 'Delhi',        
//                 'GUJARAT' => 'Gandhinagar',
//                 'UP' => 'Lakhnow'
//             }
//  */

//------------------------------------------------------------//
//                      For of loop on Maps
//------------------------------------------------------------//

// const map = new Map()

// map.set("INDIA", "Delhi")
// map.set("GUJARAT", "Gandhinagar")
// map.set("UP", "Lakhnow")
// map.set("MP", "Bhopal")

// for (const i of map) {
//     console.log(i);
// }
/** output :
 *  [ 'INDIA', 'Delhi' ]
    [ 'GUJARAT', 'Gandhinagar' ]
    [ 'UP', 'Lakhnow' ]
    [ 'MP', 'Bhopal' ]
*/
//------------------------------------------------------------//
// const map = new Map()

// map.set("INDIA", "Delhi")
// map.set("GUJARAT", "Gandhinagar")
// map.set("UP", "Lakhnow")
// map.set("MP", "Bhopal")

// // by using destructuring of array concept for printing key and value separately
// for (const [key,value] of map) {
//     console.log(key,'=>',value);
// }
// // output :
// // INDIA => Delhi
// // GUJARAT => Gandhinagar
// // UP => Lakhnow
// // MP => Bhopal

//------------------------------------------------------------//
//                    For of loop on Object
//------------------------------------------------------------//

const myObj = {
    'game1' : "subway sufar",
    'game2' : "mini militia",
    'game1' : "free fire"
}

// here also we are appling destructuring concept for Object

for (const [key, value] of myObj) {
    console.log(key," => ",value);
}

// output : TypeError: myObj is not iterable
/**
 * abow example is shows that For Of loop is not used for iterate any Object but can be use for Maps and definetelly for Array.
 */