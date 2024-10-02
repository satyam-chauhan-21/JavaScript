// In this file I've learn about filter, map, reduse.
/**
 * - Problem with forEach() loop
 * - filter()
 * - another solution of above problem using forEach() method
 * - more in filter()
 * - map()
 * - chaining on map()
 * - chaining on map() with filter()
 * - reduce()
 * - question on reduce()
 */

//------------------------------------------------------------//
//                Problem with forEach() loop
//------------------------------------------------------------//
// const language_arr = ['js', 'cpp', 'java', 'python']

// //here fisrt I've applied forEach() loop on this "language_arr" 
// language_arr.forEach((item) => {
//     console.log(item);
// })

// but now I wanted to store above code in a variable

// const values = language_arr.forEach((item) => {
//     /**
//      * here i store this loop in a veriable and wanted to check that what this loop will return.
//      * but as output it returns "undefined".
//      * by above output we get to know that "forEach()" loop doesn't return any value.
//      * so, we don't always want to print the values of array, in some case we want to apply some condition 
//      *      ans then return some value of array.
//      *  for example, here "if array_valur == java then return java" this type of condition or anything else.
//      */
//     // console.log(item);
//     return item
// })

// console.log(values); // output : undefined

//------------------------------------------------------------//
//                          filter()
//------------------------------------------------------------//
// this filter() method is solution of above problem.
/**
 * - In this filter(callback_function) method we have to pass a callback function as parameter.
 * - and this callback function take three parameter : 1) element 2) index 3) array
 * - This callback function will apply for each element in array.
 * - This function returns an array.
 * - In this callback function we set a condition for every elements in array and only that elements will be 
 *     included in returned array which values will pass this condition.
 */

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// below given all three code syntex or statements are correct.
// statement - 1
// const newNums = myNums.filter((item) => item > 5)
// statement - 2
// const newNums = myNums.filter((item) => (item > 5))

/**
 * statement - 3
 * here we open a scope with curly brackets {} in callback function, so we have to use return keyword 
 *   for return any value.
 */
// const newNums = myNums.filter((item) => {
//     return item > 5;
// })

// console.log(newNums); // output : [ 6, 7, 8, 9, 10 ]

//------------------------------------------------------------//
//                     another solution
//------------------------------------------------------------//
/**
 * now we can do the same work using forEach() method, but for that we first make an empty array.
 * then we add if(condition) in forEach() method.
 */

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach((item) => {
//     if (item > 5) {
//         newNums.push(item);
//     }
// })

// console.log(newNums);

//------------------------------------------------------------//
//                     more in filter()
//------------------------------------------------------------//
/**
 * this is a practice question, below type of value we get from Database through APIs then
      we filter this value like I've filtered.
 */

// const books = [
//     {
//         title: 'BookOne', genre: 'Fiction', publish: 1998, edition: 2023
//     },
//     {
//         title: 'BookTwo', genre: 'Non-Fiction', publish: 1990, edition: 2021
//     },
//     {
//         title: 'BookThree', genre: 'History', publish: 1991, edition: 2023
//     },
//     {
//         title: 'BookFour', genre: 'Fiction', publish: 1990, edition: 2024
//     },
//     {
//         title: 'BookFive', genre: 'Non-Fiction', publish: 1998, edition: 2022
//     },
//     {
//         title: 'BookSix', genre: 'Fiction', publish: 1992, edition: 2018
//     },
//     {
//         title: 'BookSeven', genre: 'Novel', publish: 1994, edition: 2020
//     },
//     {
//         title: 'BookEight', genre: 'History', publish: 1980, edition: 2021
//     },
//     {
//         title: 'BookNine', genre: 'Novel', publish: 1956, edition: 2020
//     }
// ]

// // const userBooks = books.filter((book) => book.genre === 'History')
// // const userBooks = books.filter((book) => book.publish > 1990 && book.genre === 'History')
// const userBooks = books.filter((book) => {
//     return book.publish > 1990 && book.genre === 'History'
// })

// console.log(userBooks);

//------------------------------------------------------------//
//                          map()
//------------------------------------------------------------//
// please see this for more : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/**
 * - map() is same as filter.
 * - it take a callbackfunction and apply some consdition given in that function for every element.
 * - and this callback function take three parameter : 1) element 2) index 3) array
 * - then returns a new array.
 */

// const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// // const newNumbers = mynumber.map((item) => item * 2)
// const newNumbers = myNumbers.map((item) => {
//     return item * 2
// })

// console.log(newNumbers);

//------------------------------------------------------------//
//                     chaining on map()
//------------------------------------------------------------//
/**
 * we can add or call multiple map() method after one map() method or we can call one or more filter()
 *      method after one map() method. this is know as chaining.
 */

// const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// const newNumbers = myNumbers.map( (num) => num * 10).map( (bun) => bun + 1)
// console.log(newNumbers); // output : [ 11, 21, 31, 41,  51, 61, 71, 81, 91, 101 ]
/**
 * now, let's dry run above code, 
 *  in first map() method the elements of myNumbers array will be multipy  with 10 then this value 
 *    is passed to second map() method and this second mep() method will add 1 in each elements 
 *    coming from first map() method.
 */

//------------------------------------------------------------//
//              chaining on map() with filter()
//------------------------------------------------------------//

// const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// const newNumbers = myNumbers.map( (num) => num * 10)
//                             .map( (bun) => bun + 1)
//                             .filter( (num) => num > 50 && num < 90)
// console.log(newNumbers); // output : [ 51, 61, 71, 81 ]

//------------------------------------------------------------//
//                          reduce()
//------------------------------------------------------------//
/**
 * - this reduce() is take a callback function as parameter.
 * - and this callback function take four thing as parameter :
 *      1) accumulator 
 *      2) currentvalue
 *      3) currentindex
 *      4) array
 * - there is one other thing which we have to set first is a initialValue. 
 *      it is a value which accumulator is inisialized when the callback function is called first time.
 *      and if we don't set any initial value so it will take array is first element as initial value
 *      and second element as currentValue. 
 * - but this might be give error sometimes (suppose if array empty).
 */

// const myNumbers = [1, 2, 3, 4, 5];


// let initialValue = 0;
// // const reducedValue1 = myNumbers.reduce( (accumulator,currentValue) => accumulator + currentValue, initialValue)
// console.log(`initial value is ${initialValue}`);
// const reducedValue1 = myNumbers.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator : ${accumulator} + currentValue : ${currentValue}`);
//     return accumulator + currentValue
// }, initialValue)
// console.log(reducedValue1);

/**
 * - we can do whatever operation we perform with accumulator and currentValue, but this is not good practice
 *  set operation according to need or logically.
 */

// here i've performed subtraction in reduce()
// const reducedValue2 = myNumbers.reduce( (accumulator,currentValue) => accumulator - currentValue, initialValue)
// console.log(reducedValue2);

// // here I've updated initialValue because I want to perform multiplication and division operation
// initialValue = 1;
// // here i've performed multiplication in reduce()
// const reducedValue3 = myNumbers.reduce( (accumulator,currentValue) => accumulator * currentValue, initialValue)
// console.log(reducedValue3);

// // here i've performed division in reduce()
// const reducedValue4 = myNumbers.reduce( (accumulator,currentValue) => accumulator / currentValue, initialValue)
// console.log(reducedValue4);

//------------------------------------------------------------//
//                     practice reduce()
//------------------------------------------------------------//
// in below problem we have to add price of shoppingCart's items.
const shoppingCart = [
    {
        itemName: 'Book1',
        price: 299
    },
    {
        itemName: 'Book2',
        price: 99
    },
    {
        itemName: 'Book3',
        price: 999
    },
    {
        itemName: 'Book4',
        price: 399
    },
    {
        itemName: 'Book5',
        price: 9999
    }
]

let initialValue = 0;
const totalPrice = shoppingCart.reduce( (acc, item ) => acc + item.price, initialValue)
/**
 // const totalPrice = shoppingCart.reduce( (acc, item, index, array ) => acc + item.price, initialValue)
 * in above line of code "item" is pointing to the each "object" of "shoppingCart array",
 * so by the useing of item we can access the "price" of the each "object" of "shoppingCart array".
 */

console.log(totalPrice);