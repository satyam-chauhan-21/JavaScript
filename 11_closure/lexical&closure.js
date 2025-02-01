// in this document:
// lexical scoping
// closure
// closure: using AI

// if ham variable ko var, let, const se declare nahi karenge to vo global scop me hi count hoga.
//----------------------------------------------------------------------------------------------------//
//                                        lexical scoping
//----------------------------------------------------------------------------------------------------//
// so closure samjhne se pehle lexical scoping samjhte hai.
// lexical scop means, function ke khud ka and khud ke parent ka scop (parent scop another function ka bhi ho skta hai.)
// Lexical Scope: Yeh define karta hai ki kaunsa function kaunsa variable access kar sakta hai based on function ke likhne ka location (not execution time).

// function parentFunction() {
//     let name = 'manva'
//     function childFunction() {
//         console.log(name)
//         // yaha hamne koi name variable create nahi kya hai fir bhi yaha hame name me jo likha hai vo mil raha hai kyuki childfunction apne parent function ki properties use kar skte hai and yaha name parent function se hi aa raha hai.
//     }
//     childFunction()
// }
// parentFunction()



//----------------------------------------------------------------------------------------------------//
//                                            closure
//----------------------------------------------------------------------------------------------------//
// upper hamne lexical scop dekha
// now uss lexical scop ka ek magic dekhte hai joki samjhne me thoda muskil to hai means uska execution kis flow me ho raha hai ye sochne ki baat hai.
// Closure: Jab ek function apne parent function ke variables ko uske execute hone ke baad bhi yaad rakhta hai, to usse closure kehte hain.
// for example,
// function outer() {
//     let name = 'karan'
//     function inner() {
//         console.log(name);
//     }
//     return inner
// }

// const counterPlus = outer() // ab yaha per notice karne vali ye baat hai ki jab iss line ka execution hua to outer call stack se chala gaya and inner ka reference return me pass kar gaya but closure ki vajah se inner function outer() ke call stack se hat jaane ke baad bhi uske(outer) variables ko yaad rakhta hai and unko user bhi kar skta hai.
// counterPlus(); // output: karan

// har function creation ke time par uska closure jarur banata hai.

//----------------------------------------------------------------------------------------------------//
//                                        closure: using AI
//----------------------------------------------------------------------------------------------------//
// closure ke baare me memory level per samjhna ho to khud ke chatGPT ko login karke "JS Advance" me padh lena.
/**
 * Bilkul! Closure JavaScript mein ek bahut hi powerful concept hai. Aaiye samjhte hain step-by-step:

### **Closure kya hai?**
Closure ek aisa function hota hai jo apne "lexical environment" (yaani uske surrounding scope) ko remember karta hai, chahe wo function us scope se bahar execute kyun na ho.

### **Example se samjhte hain:**
```javascript
function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable); // innerFunction outerVariable ko access kar raha hai
    }

    return innerFunction;
}

const closureExample = outerFunction(); // outerFunction ne innerFunction return kiya
closureExample(); // Output: "I'm outside!"
```

### **Kya hua yahan?**
1. `outerFunction` ne ek variable `outerVariable` declare kiya.
2. `innerFunction` ne `outerVariable` ko access kiya, jo uske surrounding scope mein hai.
3. `outerFunction` ne `innerFunction` return kiya, aur usko `closureExample` mein store kar diya.
4. Jab `closureExample()` call hua, toh `innerFunction` ne `outerVariable` ko access kiya, **chahe `outerFunction` ka execution khatam ho chuka tha**.

### **Closure ka use kahan hota hai?**
1. **Data Encapsulation:** Private variables banane ke liye.
2. **Callback Functions:** Event listeners ya asynchronous programming mein.
3. **Currying:** Functions ko sequence mein execute karne ke liye.

### **Ek aur example:**
```javascript
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
console.log(increment()); // Output: 3
```
Yahan `counter` function ek closure return karta hai jo `count` variable ko remember rakhta hai.

### **Closure ka magic:**
Closure ka magic yeh hai ki yeh function apne surrounding scope ko "remember" karta hai, chahe wo scope khatam ho chuka ho. Isi wajah se JavaScript mein yeh concept bahut useful hai.

*/



// closure JS me Encapsulation ke liye bhi use hota hai.
/**
 * Encapsulation:
 * Closures encapsulate data within functions, allowing for controlled access to that data. 
 * 
 * Private variables:
 * Closures can be used to create private variables that are not accessible from outside the function. 
 */