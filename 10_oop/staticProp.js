// in this document:
// static

//----------------------------------------------------------------------------------------------------//
//                                             static
//----------------------------------------------------------------------------------------------------//

// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`);
//     }

//     // yaha per ham ek funciton banana chahte hai jo ki object bante hi usse ek ID se attach kar de.
//     // but bohot baar ham ye ID sab objects ko nahi dena chahte hai to usse bhi rokna hoga.
//     // jiske liye "static" keyword use me aata hai. if ham "static" creatID() ke aage likh de to usse koi access nahi kar payega.
//     static createID(){
//         return `123`
//     }
// }

// const userOne = new User('hitesh')
// console.log(userOne.createID()) // ab yaha userOne ko ID mil jayegi.// output: 123
// // but after putting "static" befor the createID() we get an error : TypeError: userOne.createID is not a function
// // so this "static" indicate that we can't access this fucntion directly


// class Teacher extends User{
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const teacheTwo = new Teacher("hitech", 'hite@fg.com')
// teacheTwo.logMe() // output: Username: hitech // works fine
// teacheTwo.createID() // output: TypeError: teacheTwo.createID is not a function, ab ye isliye error mili kyoki static keyword lagane ke baas User class ka object hi uske creatID() ko access nahi kar paya to Teacher class ne to usse extend kiya hai Teacher class ka object "static" keyword vaale creatID() ko kese access kar lega.


// static ke baare me kal google par bhi search karke padhana abhi nind aa rahi hai so jao.
// yaha tak to hamne dekh liya ki static funciton ya fir properties ko class ke object access nahi kar pate hai.
// so unhe access kese kare? ye question to jaroor hota hoga,
// to ese static properties ko access karne ke liye direct class ka use hota hai, 
// means jese koi method ya property ko access karne ke liye "objec.property" likhte hai to vese ho static properties ko "className.property" se access kar skte hai. 

/**
 * Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
 * 
 * There are some additional syntax restrictions:
 *      The name of a static property (field or method) cannot be prototype.
 *      The name of a class field (static or instance) cannot be constructor.
 * fore more info must read this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
 */


//ek chij check karte hai,

class ClassWithStaticField {
    static staticField;
    static staticFieldWithInitializer = "static field";
}

class SubclassWithStaticField extends ClassWithStaticField {
    static subStaticField = "subclass field";
}

console.log(Object.hasOwn(ClassWithStaticField, "staticField")); // true
console.log(ClassWithStaticField.staticField); // undefined
console.log(ClassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.subStaticField); // "subclass field"

// yaha par SubclassWithStaticField class ne ClassWithStaticField ko inherite kiya hai so SubclassWithStaticField uski static property ko access kar skti hai and access karne ka method to same hi classaName kr through.