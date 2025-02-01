// in this document:
// getter and setter
// getter-setter using class
// creating private property in class
// Call Stack Overflow
// code ki error ka reason
// getter-setter using defineProperty()
// getter-setter inside an object (rarely used)


//----------------------------------------------------------------------------------------------------//
//                                        getter and setter
//----------------------------------------------------------------------------------------------------//

/**
 * 
 * JavaScript me getter aur setter functions ka use  
Getter aur Setter functions ka use JavaScript me object properties ko access aur modify karne ke liye hota hai. Yeh encapsulation aur data validation me madad karte hain.  

🔹 **Getter (`get`)**:  
Getter function **property ki value ko access** karne ke liye use hota hai bina method call kare.  

🔹 **Setter (`set`)**:  
Setter function **property ki value ko modify** karne ke liye use hota hai aur yeh validation bhi add kar sakta hai.

---

🛠 **Example: Getter aur Setter ka use**  
```javascript
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;  // Private variable ki tarah treat karne ke liye "_" lagaya hai
    }

    // Getter function
    get name() {
        return this._name;
    }

    // Setter function
    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Name cannot be empty!");
        }
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be positive!");
        }
    }
}

// ✅ Object create karte hain
let person = new Person("Rahul", 25);

// 🎯 Getter ka use
console.log(person.name); // Rahul

// 🎯 Setter ka use
person.name = "Amit";  
console.log(person.name); // Amit

person.age = -5; // Invalid age, message print hoga
```

---

## 🎯 **Getter aur Setter Functions ka Benefit**  
1. **Encapsulation**: Directly data access hone se roka jata hai.  
2. **Validation**: Koi invalid value set hone se roki ja sakti hai.  
3. **Custom Logic**: Getter aur setter me kuch extra logic apply kiya ja sakta hai.  
4. **Code Readability**: `.name` ya `.age` likhne se **method call** ki zaroorat nahi hoti (`obj.getName()` ke jagah `obj.name` likh sakte hain). 🚀
 */


// so getter setter ke baare me itna hamne dekh liya hai. ab kuch or examples likhte hai.



//----------------------------------------------------------------------------------------------------//
//                                    getter-setter using class
//----------------------------------------------------------------------------------------------------//
// so ek class ke andar getter and setter banate hai.

// class User{
//     constructor( email, password){
//         this.email = email
//         this.password = password
//     }
// }

// const userOne = new User('karan@fb.com', 'sfiej')
// console.log(userOne.email); // output: karan@fb.com
// itna to ab hame aata hi hai joki sahi se chal bhi raha hai.

//---------------------------------------------------------------------------------//
//                      creating private property in class
//---------------------------------------------------------------------------------//
// now ye check karte hai.
// so maybe kuch time pehle object ki private property batane ke liye property ke aage '_' laga diya jata tha,
// but abhi ke time me '#' lagaya jata hai.
// class User{
//     #number = 12 // so ese "#" ka use karke private property banayi jaati hai. and private property class ke hi andar bana skte hai, constructor ke andar nahi.
//     constructor( email, password){
//         this.email = email
//         this._password = password
//     }
// }

// const userOne = new User('karan@fb.com', 'sfiej')
// console.log(userOne.number); // output: undefined

//--------------------------------------------------------------------------------//
//                              Call Stack Overflow
//--------------------------------------------------------------------------------//
// back to work: getter and setter lagana hai hame 

// class User{
//     constructor( email, password){
//         this.email = email
//         this.password = password
//     }

//     get password(){
//         return this.password.toUpperCase()
//     }
//     // if ham only getter likh ke code run karenge to hame error milta hai,
//     // TypeError: Cannot set property password of #<User> which has only a getter
//     // so isiliye hame setter bhi getter ke sath me hi likhna padta hai.

//     set password(value){
//         // ab dekho hamne is method me ek bhi parameter nahi likha hai to bhi error milta hai,
//         // kyuki ham setter likh rahe hai to hame, kamsekam jis property ka setter likh rahe hai uss ki value(joki hame object creation ke time par milegi) to parameter me pass karna padta hai.
//         this.password = value
//     }
// }

// const userOne = new User('karan@fb.com', 'sfiej')
// console.log(userOne.password);
// yaha per hame output me error mil rahi hai: RangeError: Maximum call stack size exceeded

//-------------------------------------------------------------------------------------------------------//
//                                  upper vale code ki error ka reason
//-------------------------------------------------------------------------------------------------------//
/**
 * Tumhare code me **infinite recursion** ho rahi hai, jiski wajah se `"RangeError: Maximum call stack size exceeded"` aa raha hai. Yeh error **getter aur setter dono me `this.password` ka use karne** ki wajah se ho raha hai.  

## 🔴 **Issue: Infinite Recursion**
```javascript
get password(){
    return this.password.toUpperCase()  // ❌ Yeh `get password()` ko phir se call karega
}

set password(value){
    this.password = value  // ❌ Yeh `set password()` ko phir se call karega
}
```
- Jab **getter `password`** call hota hai, to `this.password` likhne par phir se wahi getter call hota hai → **Infinite loop**  
- Jab **setter `password`** me `this.password = value` likhte ho, to phir se wahi setter call hota hai → **Infinite loop**  

---

## ✅ **Solution: Private Property Use Karo**
Setter aur Getter ke andar **`this._password` (ya `#password` ES6 me)** jaisi **private property** use karo, taaki loop na bane:

```javascript
class User {
    constructor(email, password) {
        this.email = email;
        this._password = password;  // ✅ Private variable use kar rahe hain
    }

    get password() {
        return this._password.toUpperCase();  // ✅ `_password` ka use
    }

    set password(value) {
        this._password = value;  // ✅ `_password` me value set kar rahe hain
    }
}

const userOne = new User('karan@fb.com', 'sfiej');
console.log(userOne.password);  // SFIEJ
```

---

## 🎯 **Alternative: ES6 Private Fields (`#password`)**
Agar tum **modern JavaScript** use kar rahe ho to **true private field** `#password` use kar sakte ho:

```javascript
class User {
    #password;

    constructor(email, password) {
        this.email = email;
        this.#password = password;
    }

    get password() {
        return this.#password.toUpperCase();
    }

    set password(value) {
        this.#password = value;
    }
}

const userOne = new User('karan@fb.com', 'sfiej');
console.log(userOne.password);  // SFIEJ
```
⚠️ **Note:** `#password` **directly class ke bahar access nahi ho sakta** (`userOne.#password` error dega).

---

### 🎯 **Summary**
1. **`this.password` ka use getter aur setter ke andar na karo**, warna infinite recursion ho jayegi.  
2. **Instead, ek private variable (`_password` ya `#password`) use karo**.  
3. **ES6 private fields (`#password`) recommended hain**, lekin purane browsers me kaam nahi karenge. 🚀
 */



// class User{
//     constructor(email, password){
//         this._email = email
//         this._password = password
//         //dono same hi work kar rahe hai but acchi code practice ke liye upper vala best hai.
//         // this.email = email
//         // this.password = password
//     }

//     get password(){
//         return this._password.toUpperCase()
//     }

//     set password(value){
//         this._password = value
//     }

//     get email(){
//         return this._email
//     }

//     set email(value){
//         this._email = value
//     }
// }

// const userOne = new User('karan@fb.com', 'kiran')
// console.log(userOne.password); // output: KIRAN // works fine
// // now ab email ke liye bhi likh dete hai.
// console.log(userOne.email); // output: karan@fb.com // works fine


//------------------------------------------------------------------------------------------//
//                           getter-setter using defineProperty()
//------------------------------------------------------------------------------------------//
// pehle kya class nahi hoti thi tab object constructor ka use karte the tab bhi getter setter ka use hota tha.
// yaha pehle hamne jo defineProperty() ke baare me padha tha uske through bhi getter-setter ko banaya jata tha.

// function User(email, password) {
//     this._email = email
//     this._password = password

//     //yaha function 2 type se behave karta hai, function and object both
//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
    
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }

// const userTwo = new User('manava@fb.com', 'manva34')
// console.log(userTwo.email); // output: MANAVA@FB.COM
// console.log(userTwo.password); // output: MANVA34
// // works fine


//----------------------------------------------------------------------------------------------------//
//                             getter-setter inside an object (rarely used)
//----------------------------------------------------------------------------------------------------//
// yaha ham getter setter ek object ke ander banayenge.
// ye rarely hi kahi kabhi kabhi use hota hai.

const User = {
    _email: 'hit@fb.com',
    _password: 'hit123',


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// ab iss type se getter-setter banane ka advantage ye hota hai ki isse ham factory function(Object.creat()) ke through dusre object ke easily de skte hai.
// below line ka mtlb hai ki User ke base per ek object ko create kar do and usko userThree ke andar refer kar do. 
const userThree = Object.create(User)
console.log(userThree.email); // output: HIT@FB.COM  // works fine



//array.length ke pichhe bhi length property ke getter and setter work kar rahe hote hai.