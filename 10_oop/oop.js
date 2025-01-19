// int this document:
// iss file me utna hi likhenge jitna ham naya sikhenge. jo hame pehle se hi aata hai vo nahi likhenge.
// JS type
// object literal
// object constructor & "this" keyword
// Problem & new keyword
// "instaceof" operator ke baare me padh lena.

//-------------------------------------------------------------------------------------------------------//
//                                              JS type
//-------------------------------------------------------------------------------------------------------//
/**
 * Normally languages ke types hote hai functional language, object oriented language etc, but
 * JS is prototypes-based language.
 */


//-------------------------------------------------------------------------------------------------------//
//                                            object literal
//-------------------------------------------------------------------------------------------------------//
// object literal koi khas chij nhi hai but directly object ko likh dena iss type se object banata hai usse object literal kehte hai.
// object literal also known as object initializers.
/**
 * for example:
 * const obj = {
 *     name: "karan",
 *     age: "38",
 *     salary: "10000000"
 * }
 */
// and i think string literal bhi ese hi hota hoga direclty string ko likh dena.


//-------------------------------------------------------------------------------------------------------//
//                                            object constructor
//-------------------------------------------------------------------------------------------------------//
// for more: https://www.w3schools.com/js/js_object_constructors.asp
// object constructor ek function hota hai jise ham object banane ke liye use karte hai.
// object constructor banane ka ek sahi rule hai ki function ka name ka first letter capital ho.
// for example:

// function Person(fname, lname, age, salary){
//     // ab yaha par ham ese likhe de
//     // fname = fname // to fir yaha confusion ho jayegi ki parameter me jo varibale hai vo konsa hai & object ka variable konsa hai.
//     // to uske liye hame "this" ka use karna hoga object ka variable alag se batane ke liye & parameter vale variable ko ese hi normally likh denge.
//     this.fname = fname 
//     this.lname = lname 
//     this.age = age 
//     this.salary = salary 

//     return this
// }

// yaha tak hamne "this" dekh liya , use bhi kar liya

// ab ek problem dekhte hai

// const empOne = Person("karan", "singh", 21, 21000000)
// console.log(empOne); // dekho yaha ek problem aayi, 
// // hame object costructor banane ke baad usme se object ko return bhi karna padta hai. so abhi uper vale object constructor me "return this" likhna padega. 
// dekho ye abhi pata chal raha hai ki "return this" likhna koi jaruri nahi hai bina likhe bhi kaam ho jata hai.
// ye check karne ke liye ek object constructor bana kar dekhte hai.
function User(userName, pswd, isLoggedIn){
    this.userName = userName
    this.pswd = pswd
    this.isLoggedIn = isLoggedIn
}
const firstUser = User("kara", '123', true)
console.log(firstUser) // output: undefined, 
// ye output milne ke 2 reason hai,
// first to hamne "new" keyword ka use nahi kiya hai. and 
// second ke if ham "new" ka use na kar ke "return this" ka use kare to hame faltu ke chije bhi output me milegi but problem solve ho jayegi.


// const secondUser = new User("kara", '123', true)
// console.log(secondUser) // output: undefined

//-------------------------------------------------------------------------------------------------------//
//                                            Problem
//-------------------------------------------------------------------------------------------------------//

// function Person(fname, lname, age, salary){
//     this.fname = fname 
//     this.lname = lname 
//     this.age = age 
//     this.salary = salary 

//     return this
// }

// // ab main problem dekhte hai.
// // hamne uper object constructor ka ek instance banaya now ab dusra instance banate hai
// const empTwo = Person("manav", "singh", 21, 21000000)
// console.log(empTwo);
// console.log(empOne);
// // yaha per jab hamne second instance "empTwo" banaya to usne "empOne" ko bhi overwrite kar diya.
// // so iss overwrite ki problem se bachne ke liye instance creation ke time "new" keyword ka use hota hai. joki memory me instances ko new memory asign karta hai so overwrite ki problem nahi hoti hai.

// const empOne = new Person("karan", "singh", 21, 21000000)
// const empOne = Person("karan", "singh", 21, 21000000)
// const empTwo = new Person("manav", "singh", 21, 21000000)
// console.log(empTwo);// yaha par new keyword nahi likhte hai na to fir output me bohot sari chije show karta hai jo kaam ki bhi nahi hai is time par.
// console.log(empOne);

