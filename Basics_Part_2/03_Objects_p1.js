/**Description about File : 
 * In This file I've learn about Objects :
 *  - creation of object by two methods : 
 *      1) Constructor method 2) Literal method
 *  - accessing of object by two methods : 
 *      1) using dot '.' operator 2) using [" "] brackets.
 *  - creat a varible of Symbol datatype 
 *  - freezing object using Object.freeze(obj_name) method
 *  - short about function.
 *  - short about "this" keyword.
 */

/**
 * There are many type of declaring an Object in JS.
 * but main are two : 1) Constructor method 2) Literal method
 * 
 * --> Singleton Object : 
 *      - is an object created using constructor method.
 *      - it is the only object of its type.
 *      - if we make object using Literal method then its not become singleton object.
 */

// Creating object using :🔳 Constructor method

// check for more object using Constructor method : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// Object.create() 

//  Creating object using :🔳 Object Literal method

// object generally create using "const" datatype.
// const obj = {} // here an empty object is created.

/*
const obj = {
    name : "manav", // here "name" is key & "manav" is value of "name" key.
    // and by default system consider key as string.
    "full name": "manav pagal",
    age : 18,
    location : "ahmedabad",
    email : "manav@kpmg.com",
    isLoggedIn : false,
    lastLoggedIn : [ "Friday", "Saturday" ]
 }
*/
// accessing Objects : 1) using dot '.' operator
      
// console.log(obj.email);

// accessing Objects : 2) using [" "] brackets.
/**
 * in this method we consider key's as string because,
 *  -- we can't access "full name" property by using '.' operator method because,
 *      "full name" contains a space between "full" & "name".
 */

// console.log(obj["email"]); // in this method we don't use dot '.' operator
// console.log(obj["full name"]);

//************************************************************//
//------------------------------------------------------------//

// creating a variable of Symbol datatype :
// for ccreating a Symbol we use Symbol() method

/*
const mySym = Symbol("key1")

const obj = {
    name : "manav",
    mySym : "mykey1",
    age : 18,
    location : "ahmedabad",
    email : "manav@kpmg.com",
    isLoggedIn : false,
    lastLoggedIn : [ "Friday", "Saturday" ]
}
* */
// console.log(obj.mySym); // it prints it's value : mykey1
// console.log(typeof obj.mySym); // output : string because mySym is consider as a string not a Symbol

// so if we want to creat a symbol in object we have to bound it with square brackets.
// for example : 

// const sym = Symbol("hello")

// const obj = {
//     name : "manav",
//     [sym] : "mykey1", // symbol must be first defined in outside of object,
//     // [mySym] : "mykey1", // because I get error for writing different symbol name.
//     age : 18,
//     location : "ahmedabad",
//     email : "manav@kpmg.com"
// }

// console.log(obj[sym]); // output : mykey1
// console.log(typeof obj[sym]); // output : string
// console.log(typeof [sym]); // output : object
// console.log(typeof sym); // output : symbol

//************************************************************//
//------------------------------------------------------------//

// updating or assigning object property value using equals to '=' or using assignment operator

// const obj = {
//     name : "manav",
//     age : 18,
//     location : "ahmedabad",
//     email : "manav@kpmg.com"
// }

// obj.name = "karan"
// console.log(obj.name);

//-----------------------------------------------------------------------------//
//          freezing object using Object.freeze(obj_name) method
//-----------------------------------------------------------------------------//
/**
 * if we want to no one can chenge objects value or property's value
 * so we can use Object.freeze(obj_name) method
 */

// const mysym = Symbol("hi")
// const obj = {
//     name : "manav",
//     [mysym] : "jai",
//     age : 18,
//     location : "ahmedabad",
//     email : "manav@kpmg.com"
// }

// obj.name = "karan"
// console.log(obj.name); // output : karan

// Object.freeze(obj)

// obj.name = "kiran"
// console.log(obj);
/** output : 
    {
        name: 'karan',
        age: 18,      
        location: 'ahmedabad',
        email: 'manav@kpmg.com',
        [Symbol(hi)]: 'jai' // see this is Symbol 
    }
 */

//************************************************************//

//------------------------------------------------------------//
//                  adding function in object 
//------------------------------------------------------------//

// const mysym = Symbol("hi")
// const obj = {
//     name : "Manav",
//     [mysym] : "jai",
//     age : 18,
//     location : "ahmedabad",
//     email : "manav@kpmg.com",
// }

// obj.greeting = function() {
//     console.log("Good Morning");
// }
// obj.greetingtwo = function() {
//     // below both statments will give same output.
//     // console.log(`My name is ${obj.name}`);
//     console.log(`My name is ${this.name}`); // "this" is used for these object "obj".
// }

// console.log(obj.greeting); // output : [Function (anonymous)]
// console.log(obj.greeting()); // output : Good Morning "(in next line)undefined"
// console.log(obj.greetingtwo()); // output : My name is manav "(in next line)undefined"