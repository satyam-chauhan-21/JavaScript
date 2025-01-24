// in this document:
// JS behaviour
// function: Object or ?
// add properties in prototype
// thinking
// new keword
// Prototype
// making custom Prototype
// hierarchy problem
// Inheritance
// setPrototypeOf(x,y)

//-------------------------------------------------------------------------------------------------------//
//                                              JS behaviour
//-------------------------------------------------------------------------------------------------------//
// JS ka prototype behaviour vo hamesha upper hi upper jata rehta hai jab tak usko "null" value nahi mil jaati.
// isi behaviour ko JS ka prototyple inheritence bhi bolte hai.
/** 
 * internally JS me har chij ese work hoti hai: kyoki JS me har koi Object hai.
 * Array --> Object --> Null
 * String --> Object --> Null
 * so kya ham function ke liye bhi same bol skte hai?
*/


//-------------------------------------------------------------------------------------------------------//
//                                         function: Object or ?
//-------------------------------------------------------------------------------------------------------//
// // kya ham function ke baare me ese likh skte hai kya,
// // function --> Object --> Null
// // chalo ek example se dekhte hai,

// function multiplyBy5(num){
//     return num*5
// }
// // multiplyBy5(5)// ab normally ham function ko call ese karte hai
// // but hame ese nahi kisi or type se call karna ho to like,

// multiplyBy5.power = 2 // yaha per dekhne vali baat ye hai ki declare & create function kiya hai and ese dot(.) laga kar to object ki properties ko use kiya jata hai. to kya function bhi Object hai? savaal to hai ab javaab dekhte hai,

// console.log(multiplyBy5(4)); // normal function call ese hi karte hai so, output: 20
// console.log(multiplyBy5.power); // output: 2 // yaha per 2 isliye mila kyoki ye ".power" hamne jo likha hai vo function ki property ya ham keh skte hai variable ban gaya.
// console.log(multiplyBy5.prototype); // output : {} // and ye hame isliye mila kyuki function ka parent bhi object hi hai.
// // so isse hame pata chalta hai ki function, object & function dono hai. to ham ese likh skte hai,
// // function --> Object --> Null

//-------------------------------------------------------------------------------------------------------//
//                                      add properties in prototype
//-------------------------------------------------------------------------------------------------------//
// // hame pata hai ki Array me ".length", ".map" jaisi properties hoti hai.
// // so ham bhi esi properties bana kar add kar skte hai
// // ek example se smjhte hai,

// function createChai(userName, price) {
//     this.userName = userName // ab yaha per pata hai na ye "this" kyu laga hai, dono variable ko alag dikhane ke liye,
//     this.price = price // ek function ka variable(ya fir function ke current context ka variable) & dusara parameter vale varibale me difference pata chale iss liye
// }

// // ese ham different properties add kar skte hai.
// createChai.prototype.increase = function() {
//     this.price++ // ye increase property ya fir method ban chuka hai "createChai" ka, usme hamne ye jo price liye hai usse vo "createChai" se milega. 
// }

// createChai.prototype.printPrice = function(){
//     console.log(`price of ${this.userName} is ${this.price}`)
// } // yaha "this" lagane se ye property jiske bhii liye call kari jayegi only ussi ke "userName" and "price" ko affect karegi and print karegi.


// // console.log(createChai("Lemon Tea", 49).printPrice()) // output=> TypeError: Cannot read properties of undefined (reading 'printPrice')
// // // yaha par ye property add to ho gayi hai(ham uske prototype me dekh skte hai) but work nahi kar rahi hai.
// // // dekho yaha hamne iss funciton per property add kari hai & jab bhi ham iss function ko run karenge tab function khud ke paas jo property hogi unko and global Object ke pass jo properties hogi unko inherite karega. 
// // // and ye kaam pehle se hi ho gaya hoga, baad me property add huyi hogi. to uss time function ke uss instance ko pata hi nahi hoga ki esi bhi koi new property hai uske paas. 
// // // to iss problem ko solve karne ke liye hame uss funciton ka new instance create karna padega with new memory space jisme function ki properties, Object se jo properties inherite kari hai vo and jo new properties usme add huyi hai vo sab uss instance ke pass tab hogi.

// console.log(new createChai("Lemon Tea", 49).printPrice())
// // output: price of Lemon Tea is 49 // ye to sahi aa raha hai but iske baad me ek "undefined" bhi mil raha hai.
// /**
//  * got the solution:
//  * so yaha par "printPrice" to sahi se kaam kar raha hai but ye "undifined" isliye aa raha kyo ki "printPrice" kuch return nahi kar raha hai. 
//  * vo only "console.log()" karva raha jisme kuch return nahi milta hai. to "console.log()" "undifined" return kar raha hai. 
//  * joki hamre upper vale "console.log()" ko mil raha hai and vo vesa ka vesa hi print karva raha hai.
//  * 
//  * and if we want that it don't print any "undefined" so we can simply return the string like this:
//  *      createChai.prototype.printPrice = function(){
//  *          return `price of ${this.userName} is ${this.price}`
//  *      }
//  * 
//  * for more info read this chat: https://chatgpt.com/share/6793742b-2444-8010-ac53-043deaa58481
//  */


// // console.log(new createChai("Lemon Tea", 49).increase().printPrice()) // output: TypeError: Cannot read properties of undefined (reading 'printPrice')
// // // i think upper vale me chaining nahi kar skte hai. iske solution baad me find kar lenge.

//----------------------------------------------------------------------//
// // upper vale ko ham ese bhi likh sakte hai:

// function createChannel(port, address) {
//     this.port = port
//     this.address = address
// }

// createChannel.prototype.addIP = function(){
//     return "192.0.0.1." + this.address
// }

// // const channelOne = createChannel(22,168) // sahi output ke liye new keyword likhna jaruri hai.
// const channelOne = new createChannel(22,168)

// console.log(channelOne()) // output: TypeError: channelOne is not a function
// console.log(channelOne) // output: createChannel { port: 22, address: 168 }
// console.log(channelOne.addIP()) // output: 192.0.0.1.168
// // sahi se kaam ho raha hai.
//--------------------------------------------------------------------------------------------------------------------//
//                                                     thinking
//--------------------------------------------------------------------------------------------------------------------//
// yaha if upper ka example considr kiya jaye to ye object cunstructor ke jaisa nahi lag raha!
// jese object constructor ke through hamne object create kiya tha vese hi "channelOne" object create kiya hai. 
// and jaise ki hame pata hai new kewword ke baare me ki vo ek naya hi instance create karta hai to yaha par jab hamne new keyword use kiya tab naya instance means naya Object create hua "anything -> Object -> null" iss quotation me jo object hai na vahi wala. jisme fir se saari properties add ho gayi but iss baar ye nayi "addIP()" vali property bhi add ho gayi. 
//--------------------------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------------------------------------//
//                                              new keyword
//-------------------------------------------------------------------------------------------------------//
/**
 * Here's what happens behind the scenes when the new keyword is used:
 * A new object is created: The new keyword initiates the creation of a new JavaScript object.
 * A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that  it has access to properties and methods defined on the constructor's prototype.
 * The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
 * The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
 */



//-------------------------------------------------------------------------------------------------------//
//                                              Prototype
//-------------------------------------------------------------------------------------------------------//
// i think hamne prototype ko thoda sa samjh liya hai.
// fir bhi dekhte hai,
/**
 * Prototype: In JavaScript, a prototype is a mechanism by which objects inherit properties and methods from one another. It's a fundamental concept for understanding how inheritance works in JavaScript.
 * 
 * Every object has a prototype: Every object in JavaScript has a built-in property called prototype. This property is a reference to another object, which is the prototype of the object.
 * 
 * prototype ko ham ek type ke "sanche" ki tarah dekh skte hai. like jaise ki koi project banane se pehle ham uska ek "prototype" banane hai na, ki actual jo hamara end result hoga vo iss prototype jesa hi dekhega.
 * 
 * Inheritance: When you try to access a property or method on an object, JavaScript first checks if the object itself has that property or method. If not, it looks up the prototype chain until it finds the property or method, or until it reaches the end of the chain (which is null). ye to ham jante hi the ki in JS (anything -> Object -> null)
 * 
 * Constructor functions: When you create a function in JavaScript, it automatically gets a prototype property. This property is used to define the properties and methods that will be inherited by all objects created using that function as a constructor (with the new keyword).
 * 
 * Adding properties to the prototype: You can add properties and methods to the prototype of a function, which will then be available to all objects created using that function. This is a way to define shared behavior for objects.
 * 
 * Key Points to Remember:
 *  Prototypal inheritance is a powerful feature in JavaScript.
 *  It allows you to create objects that share properties and methods.
 *  It's a more flexible way to implement inheritance compared to classical inheritance in other languages.
 *  Understanding prototypes is essential for writing efficient and well-structured JavaScript code.
 * 
 * 
 * Read Later:
 * https://www.w3schools.com/js/js_object_prototypes.asp
 * https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
 */


//-------------------------------------------------------------------------------------------------------//
//                                         making custom Prototype
//-------------------------------------------------------------------------------------------------------//
// ek custom prototype banana hai: "trueLength()" jo string ki actual legth bataye.
// means "manva" ki length = 5 hai, but "manva      " ki length = 11 hai joki uski actual length keh skte hai but vo kaam ki nahi hai. ab uski actual length ke liye hame "string.trim().length" karna padega har baar new string ke liye ye itne saare words likhne padege to usko short karne ke liye "trueLength()" property bana kar prototype me add karenge.
// ye problem last me solve kari hai.

// yaha per ek baat dhyan dene vali hai ki abhi tak ham koi bhi new property ko,
//  "anything.prototype.newProperty = anything" karke likh rahe the joki sirf uske hi instances ke liye tha but ab ham usse direct sabke liye available karna ho to usse direct Object ke sath hi create karenge.

// Object.prototype.sayHello = function(){
//     console.log("Hello Everyone! I am from the Global Object.")
// }

// // chalo isse ab test karte hai ki sab me available hai ki nahi
// mySong = ['manva', 'lage!', 'lage', 're', 'sanvare!', 'lage', 're', 'sanvare!']
// myGrocery = {
//     'aata': '10kg',
//     'paua': '2kg',
//     'sing': '250g',
//     'chana': '500g',
//     'rava': '1kg',
// }

// mySong.sayHello() // output: Hello Everyone! I am from the Global Object.
// myGrocery.sayHello() // output: Hello Everyone! I am from the Global Object.
// // so till here everything working fine.
//-------------------------------------------------------------------------------------------------------------------//
// so yaha par ye "sayHello()" array and object sab ko mil raha hai kyoki hamne hierarchy me sabse upper vale ko(jo hai "Object" the ultimate legend) hi pakad ke usse hi property de di to vo property sab ko mil gayi.
// lekin ye ulta nahi ho skta ki hamne koi niche vaale ko property de di and usko hamne fir upper vali hierarchy se access kar rahe ho. like property "Array" object ko di ho and usse ham "Object" joki global hai uss se access kare.
//-------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------//
//                                             hierarchy problem
//------------------------------------------------------------------------------------------------------------//


// mySong = ['manva', 'lage!', 'lage', 're', 'sanvare!', 'lage', 're', 'sanvare!']
// // mySong.sayHello() //output: TypeError: mySong.sayHello is not a function
// // ye yaha nahi funciton defination ke baad hi likhana hota hai. nahi to ese hi error aa jati hai.

// myGrocery = {
//     'aata': '10kg',
//     'paua': '2kg',
//     'sing': '250g',
//     'chana': '500g',
//     'rava': '1kg',
// }

// Array.prototype.sayHello = function(){
//     console.log("Hello Everyone! I am from the Global Array Object.")
// }
// mySong.sayHello() // output: Hello Everyone! I am from the Global Array Object.
// myGrocery.sayHello() // output: TypeError: myGrocery.sayHello is not a function
// // so yaha par har Array ke liye "sayHello()" work kar raha hai but object ke liye work nahi kar raha hai so isse pata chalta hai ki lower hierarchy upper hierarchy vale ko access nahi kar skti and uss per property set nahi kar skti.


//------------------------------------------------------------------------------------------------------------//
//                                             Inheritance
//------------------------------------------------------------------------------------------------------------//
// Inheritance ke baare me to ham jaante hi hai.

// example dekhte hai
// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true
// }
// pehle "class" nahi hoti thi isiliye har chij ka object hi banate the. and objects to internally apni properties share nahi karte hai. so if hame objects ko interconnect karna hai to ek property hoti hai har object me,
//  "__proto__" : joki ek object ki properties ka access dusre object ko deta hai.
// now if hame "TASupport" me "TeachingSupport" ka access chahiye to "__proto__" ko "TASupport" ki property bana kar usme "TeachingSupport" ka reffernce dena hoga.

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport // here now "TASupport" can access properties of "TeachingSupport". means "TASupport" ne "TeachingSupport" ko inherite kiya hai.
// }

// // console.log(TASupport.makeAssignment); // output: JS Assignment
// // console.log(TASupport.__proto__); // output: { isAvailable: false }
// // console.log(TASupport.isAvailable); // output: false


// const user = {
//     username : "manav"
// }
// // __proto__ ko directly bhi likh skte hai.
// // Teacher.__proto__ = user // yaha "Teacher" ne "user" ko inherite kiya hai.
// // console.log(Teacher.makeVideo) // output: true
// // console.log(Teacher.username) // output: manav
// // console.log(Teacher.user) // output: undefined

/** iska use kahi nahi hota hai, only for info ke liye check kar raha tha but error aa rahi hai.
 * Teacher.prototype.__proto__ = user // TypeError: Cannot set properties of undefined (setting '__proto__')
 */

//------------------------------------------------------------------------------------------------------------//
//                                             setPrototypeOf(x,y)
//------------------------------------------------------------------------------------------------------------//
// and ye "__proto__" vaali style bhi old hai abhi new syntax me direct "Object" ko access karte hai usme hi ek property milti hai "setPrototypeOf(x,y)" jo y ki property ko x me access deta hai.

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Object.setPrototypeOf(TASupport, Teacher)
// console.log(TASupport.makeVideo) // output: ture // so ye work kar raha hai
// console.log(TASupport.isAvailable) // output: undefined // ye nahi work kar raha hai may be multiple inheritance ka support nahi hoga,
// //  ya fir ese nahi nahi hoga ki,
// //  "__proto__" se "TeachingSupport" ko "TASupport" me inherite karva ke baad me "setPrototypeOf()" se "TASupport" me  "Teacher" ko inherite kiya hai to "TeachingSupport" hat gaya hoga. ye reason sahi hai apna. vo hat hi gaya hai.
// // yaha ham jo kar rahe the na vo multiple inheritance hota hai joki diectly supported nahi hai JS but can be mimicked using mixins or "Object.assign()".

// //now yaha par ham "setPropertyOf()" ka use kar rahe hai but "class" ko inherite karne ke liye modern JS me "extends" keyword ka hi use hota hai.
// // and "setPropertyOf" ke background me bhi "__proto__" ka hi use ho raha hota hai but ye "__proto__" outdated hai isiliye iska use ab jyada nahi hota hai.

// so iss pure ko ham prototypal inheritance bhi keh skte hai.


//--------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------//
//ab aate hai apne purane trueLength() per,

let uname = "manva      "

String.prototype.trueLength = function(){
    console.log(this); // output: [String: 'manva      ']
    // console.log(this.name); // output: undefined // ab ye name vali property may be hata di gayi hai shayad
    console.log(`Ture Length is ${this.trim().length}`); // iss string ki actual length pata chal jayegi
}

uname.trueLength()
"hello     ".trueLength() //output: [String: 'hello     ']    Ture Length is 5