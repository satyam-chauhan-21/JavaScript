// in this document:
// inheritance

//----------------------------------------------------------------------------------------------------//
//                                           inheritance
//----------------------------------------------------------------------------------------------------//
// inheritance bhi hame pata hai, iss se pehle bhi hamne JS me ek prototypal iheritance dekha tha but yaha "extends" keyword ka use karke dekhenge.

class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {// yaha Teacher class User class ki properties ko inherite kar raha hai.
    constructor(username, email, password){
        super(username) // yaha per "super" keyword ka kaam hame pata hai, but call.js me ham jo majoori kar rahe the uss se bhi chhutkara milta hai "super" keyword se.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A New course was added by ${this.username}`)
        // yaha per ham ye console.log karva rahe hai to hamne last ke console.log me(jaha per koi object ke though ham iss function ko call karenge vo) undefined mil raha hai joki kyu mil raha hai ham jante hai.
        // iska ek aur solution bhi hai, ham yaha console.log hi rakhte hai but fir jab ham iss class ka koi object banaye uske baad uss object se hi iss funciton ko direct call karvaye na ki kisi console.log ke andar.like,
        /**
         * console.log(teacherOne.addCourse()) // ese call nahi karvaye 
         * instead of do this only directly
         * 
         * teacherOne.addCourse() // but if ye likhna hai to return karvane ki jagah console.log hi karvana padega.
         */
        // so uss problem ko solve karne ke liye ham usse as a string return karvate hai.
        // return `A New course was added by ${this.username}`
    }
}

const teacherOne = new Teacher("karan", 'karna@ga.com', 1234)
// console.log(teacherOne.addCourse()) // output: A New course was added by karan "/n" undefined // undefined bhi de raha hai but iss bar iska solution hame pata hai. upper dekh lo
teacherOne.addCourse() // output: A New course was added by karan
// abhi to hamne Teacher class ka object banaya but ab User class ka object banate hai.

const userOne = new User("manav")
// ab ye dekhte hai ki iske pass "addCourse()" ka access hai ki nahi.
// userOne.addCourse() // output: TypeError: userOne.addCourse is not a function
// // iss error se pata chalta hai ki userOne ke pass Teacher class ke kisi function ka access nahi hai and reason hame pata hai.
userOne.logMe() // output: Username is manav // works fine

console.log(teacherOne === userOne) // output: false, because teacherOne object ki class ne userOne object ki class ko inherite kiya hai. isiliye both are different object

console.log(teacherOne === Teacher) // output: false, because ek side object hai and other side ussi object ki class hai. so both are different.
// but uski jagah ese check karna sahi rahega,
console.log(teacherOne instanceof Teacher) // output: true, jise ham padhne se hi smjh gaye.
console.log(teacherOne instanceof User) // output: true, teacherOne object User class ka grand child hai isiliye ye true hai.