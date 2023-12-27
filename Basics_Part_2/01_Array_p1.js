// In this file i've learned ARRAY'S and its some Method's or Operations in JS.

//************************************************************//
/*
   declaration of array : two types
       1) datatype array_name = [value1, value2, value3, .....]
       2) datatype array_name = new array_name(value1, value2, value3, .....) 
*/

// first declaration type : datatype array_name = [value1, value2, value3,....]

/*
const arr = [1, 2, 3, 4, 5]

console.log(arr);
*/

//************************************************************//
// second declaration type : datatype array_name = new array_name(value1, value2, value3,....)

// const arr2 = new arr2(1,2,3,4,5)
// console.log(arr2);

/*
second declaration not working i'll check it later.
error given by node: const arr2 = new arr2(1,2,3,4,5)
             ^

                     ReferenceError: Cannot access 'arr2' before initialization
*/


//************************************************************//
/*
    array_name.push() : This method is used to add value " at the end " of the array
*/

// const arr = [1, 2, 3, 4, 5]
// arr.push(76)
// arr.push(77)
// arr.push(78)
// arr.push(79)
// console.log(arr);
/*
for (let index = 6; index <= 10; index++) {
    arr.push(index)
}
console.log(arr);
*/

//************************************************************//
/*
    array_name.pop() : this mathod is used to remove value from the end of the array.
*/

// arr.pop();
// console.log(arr);

//************************************************************//
/*
    array_name.unshift(value) : this mathod is used to add value from the starting of the array.
*/
// arr.unshift(9)
// console.log(arr);

//************************************************************//
/*
array_name.shift() : this mathod is used to remove value from the staring of the array.
*/
// arr.shift()
// console.log(arr);

//************************************************************//
/*
    for findding a value in array we can use "include" mathod.
    => which will check array, if array contains that value it will return true else it will return false.
    => it can only return boolean value : true or false.
    syntax => array_name.inclue(value)
*/

// console.log(arr.includes(4)); //output : true
// console.log(arr.includes(9)); //output : false

//************************************************************//
/*
    for finding given elements index we can use "indexOf()" method.
    -> syntax : array_name.indexof(value "which index we wants to print").
    -> if we entered wrong value or we wants to index of element which is not exist in the array so it
        will return " -1 ".
*/

// console.log(arr.indexOf(78));

//************************************************************//
/*
    array_name.join() : this emthod converts array into string type.
*/

// console.log(arr.join());
// console.log(typeof arr.join());


//------------------------------------------------------------//
//************************************************************//

/*
    array_name.slice(start_index,end_index) : this method print array from starting_index to (end_index - 1).
    -> it will not contains or print end_index value.
    -> it will not affects original array.
 */

    // const arr1 = [1,2,3,4,5,6]
    // const arr2 = arr1.slice(1,3)

    // console.log(arr1) // output : [ 1, 2, 3, 4, 5, 6 ]
    // console.log(arr2) // output : [ 2, 3 ]

//************************************************************//
//------------------------------------------------------------//

/*
    array_name.splice(start_index,end_index) : this method print array from starting_index to end_index.
    -> it will cut or remove elements from start_index to end_index of original array.
    -> it will affects original array.
 */

    const arr3 = [1,2,3,4,5,6]
    const arr4 = arr3.splice(1,3)

    console.log(arr3) // output : [ 1, 5, 6 ] => our original array in which value were removed.
    console.log(arr4) // output : [ 2, 3, 4 ]