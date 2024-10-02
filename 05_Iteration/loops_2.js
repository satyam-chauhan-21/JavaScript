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
//          Solving tic tac toe's 2D array confution
//------------------------------------------------------------//
// for see the confution go to the tic tac toe folder -> script.js
/**
 * In Tic Tac Toe there are total 8 pettern or combination of boxes in which ,
 *      when same symbol occur so the player of that symbol win the match.
 * there total 9 boxes and I have count these boxes from 0 to 8.
 * 
 * |-----------|----------|----------|
 * |     0     |    1     |     2    |
 * |-----------|----------|----------|
 * |     3     |    4     |     5    |
 * |-----------|----------|----------|
 * |     6     |    7     |     8    |
 * |-----------|----------|----------|
 * 
 * so i am storing that combination of winnig petterns in an array.
 *      like,
 *  row petterns: 1st pettern:- [0,1,2]
 *                2st pettern:- [3,4,5]
 *                3st pettern:- [6,7,8]
 *  column petterns: 4st pettern:- [0,3,6]
 *                   5st pettern:- [1,4,7]
 *                   6st pettern:- [2,5,8]
 *  diagonal petterns: 7st pettern:- [0,1,2]
 *                     8st pettern:- [0,1,2]
 */

const winPettern = [
    [0, 1, 2],
    [0, 2, 4],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

// const checkWin = () => {
//     for (const pettern of winPettern) {
//         console.log(pettern);
//         // console.log(btns[pettern[0]],btns[pettern[1]],btns[pettern[2]]);
//     }
// }
// checkWin()
// /**
//  * by runnig above code i've got this output.
//  * output : 
//  * [ 0, 1, 2 ]
//    [ 0, 2, 4 ]
//    [ 0, 3, 6 ]
//    [ 1, 4, 7 ]
//    [ 2, 4, 6 ]
//    [ 2, 5, 8 ]
//    [ 3, 4, 5 ]
//    [ 6, 7, 8 ]
//  */


/**
 * using below forOF() loop i'm printing elements inside of each array.
 * here "pettern" refers to each sub array in side the winPetterns array.
 * by using "pettern" we can access each subarray inside of the winPetterns array.
 *  - now if we write like this "pettern[index_of_subarray]" we can access values inside of each subarray one by one when loop iterate.
 *      - for example : pettern[0] will print first subarray's first element. (here, which is 0) 
 *                      pettern[1] will print second subarray's first element. (here, which is 1) 
 *                      pettern[2] will print third subarray's first element. (here, which is 2) 
 * now loop value increase pettern points to second sub array,
 *      - for example : pettern[0] will print first subarray's first element. (here, which is 0) 
 *                      pettern[1] will print second subarray's first element. (here, which is 2) 
 *                      pettern[2] will print third subarray's first element. (here, which is 4) 
 */
const checkWin = () => {
    for (const pettern of winPettern) {
        console.log(pettern[0],pettern[1],pettern[2]);
        // console.log(btns[pettern[0]],btns[pettern[1]],btns[pettern[2]]);
    }
}
checkWin()

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

// const myObj = {
//     'game1' : "subway sufar",
//     'game2' : "mini militia",
//     'game1' : "free fire"
// }

// // here also we are appling destructuring concept for Object

// for (const [key, value] of myObj) {
//     console.log(key," => ",value);
// }

// output : TypeError: myObj is not iterable
/**
 * abow example is shows that For Of loop is not used for iterate any Object but can be use for Maps and definetelly for Array.
 */