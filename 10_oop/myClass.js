// in this document:
// class
// behind the scene

//----------------------------------------------------------------------------------------------------//
//                                              class
//----------------------------------------------------------------------------------------------------//
// class kya hai vo to ham jante hi hai, but class se pehle object cunstructors ka use hota tha class ki kami ko pura karne ke liye.
// so abhi hamre pass both things ka knowledge hai.

// so lets makesome class,
// JS me "class" keyword ka use karke hi class banate hai.

// class User {
//     // so ye constructor object ko bante hi initialize karne ke liye banaya jata hai.
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     // now we want to create a funciton for parssword encryption.
//     // in JS class we can declare function without "function" keyword.
//     encryptPassword(){
//         return `sjfklS!${this.password}k2j3sdfhk`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// } // so this is our class.

// // now let's create it's object,
// // const userOne = User("manav", "hello@fb.com", "123")
// // console.log(userOne.encryptPassword()); // output: TypeError: Class constructor User cannot be invoked without 'new'
// // // here we get an error, because we didn't use "new" keyword for making object.
// // //  So here we come to know that to create an object of a class in JS, new keyword is always used.

// const userOne = new User("manav", "hello@fb.com", "123")
// console.log(userOne.encryptPassword()); // output: sjfklS!123k2j3sdfhk // working fine

// // ek aur funciton banate hai class ke andar username ko change karne ke liye,
// console.log(userOne.changeUsername()); // output: MANAV // working fine

//----------------------------------------------------------------------------------------------------//
//                                         behind the scene
//----------------------------------------------------------------------------------------------------//
// behind the scene kaam kese ho rha hai vo dekh lete hai, means iss code ko 'class' ka use kiye bina kese likhenge,

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `sjfklS!${this.password}k2j3sdfhk`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const userTwo = new User("karan", "hello@fb.com", "123")
console.log(userTwo.encryptPassword()); // output: sjfklS!123k2j3sdfhk // working fine
console.log(userTwo.changeUsername()); // output: KARAN // working fine


// so if class nahi hoti to kaam jaise abhi upper kiya hai na vese hi hota. nus itta hi hai.