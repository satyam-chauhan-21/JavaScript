// in this document:
// static

//----------------------------------------------------------------------------------------------------//
//                                             static
//----------------------------------------------------------------------------------------------------//

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // yaha per ham ek funciton banana chahte hai jo ki object bante hi usse ek ID se attach kar de.
    // but bohot baar ham ye ID sab objects ko nahi dena chahte hai to usse bhi rokna hoga.
    // jiske liye "static" keyword use me aata hai. if ham "static" creatID() ke aage likh de to usse koi access nahi kar payega.
    static createID(){
        return `123`
    }
}

// const userOne = new User('hitesh')
// console.log(userOne.createID()) // ab yaha userOne ko ID mil jayegi.// output: 123
// // but after putting "static" befor the createID() we get an error : TypeError: userOne.createID is not a function
// // so this "static" indicate that we can't access this fucntion directly


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacheTwo = new Teacher("hitech", 'hite@fg.com')
teacheTwo.logMe() // output: Username: hitech // works fine
teacheTwo.createID() // output: TypeError: teacheTwo.createID is not a function, ab ye isliye error mili kyoki static keyword lagane ke baas User class ka object hi uske creatID() ko access nahi kar paya to Teacher class ne to usse extend kiya hai Teacher class ka object "static" keyword vaale creatID() ko kese access kar lega.


// static ke baare me kal google par bhi search karke padhana abhi nind aa rahi hai so jao.