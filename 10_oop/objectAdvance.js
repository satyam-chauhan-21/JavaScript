// in this document:
// Math.PI is changeable or not and why
// why we can't actualy change value of PI
// creating custom property descriptor
// object: iterable or not?
// sotping object's iteration power forcefully
// Property Getter ans Property Setter functions
// chatGPT link

//----------------------------------------------------------------------------------------------------//
//                              Math.PI is changeable or not and why
//----------------------------------------------------------------------------------------------------//
// for more info: https://chatgpt.com/share/6797c7ba-fdb8-800c-9eb8-f65cdfa52699

// console.log(Math.PI);
// Math.PI = 2.35345
// console.log(Math.PI);
// yaha per dono baar PI ki same value jo pehle se hi hai 3.141592653589793 hi print huyi hai kyuki PI JS me ek constant value hai jise ham change nahi kar skte.
/**
 * kyki, PI ek,
 * 
 * Read-Only Property:
 * Math.PI ek read-only property hai, iska matlab hai ki aap iski value ko overwrite nahi kar sakte.
 * JavaScript me Math.PI ko non-writable aur non-configurable flag ke sath define kiya gaya hai. Is wajah se yeh immutable (unchangeable) hoti hai.
 * Design Choice:
 * JavaScript me Math.PI ek mathematical constant hai, aur constants ka purpose hi yeh hota hai ki unki value change nahi ki jaye. Isliye isko change karne ki permission nahi di gayi.
 * 
 * 
 * and if ham usse change karne ki koshish karenge to,
 * Agar Math.PI ki value ko change karne ki koshish karte hain, toh JavaScript silently ignore karega ya strict mode me error throw karega.
 * joki usne abhi ignore hi kar diya jab hamne usse change karne ki koshish kari.
 * 
 * 
 * and if hame usse change hi karni hai to usse dure variable me store karke usse variable ki value change kar skte hai like this,
 * const myPI = 3.14; // Custom constant
 * console.log(myPI); // Output: 3.14
 * 
 */


//----------------------------------------------------------------------------------------------------//
//                              why we can't actualy change value of PI
//----------------------------------------------------------------------------------------------------//
// chalo ab uske andar bhi ja kar dekhte hai ki actual me ham usse change kyu nahi kar skte hai,
// ab uske liye ham Object ke "getOwnPropertyDescriptor()" ka use karnge jiske first argument me module ya fir uss Object ka name likhna pdta hai hai jiski propety ka description chahiye.
// for example yaha hame Math module ki PI property ka description chahiye to first argument me Math and second argument me PI likhna hoga.
// Object.getOwnPropertyDescriptor(Math, "PI") // ye likh kar hame kisi me store karna padta hai.
// const piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI") 
// console.log(piDescriptor);
/**
 * output: 
 * {
 *   value: 3.141592653589793,
 *   writable: false,
 *   enumerable: false,       
 *   configurable: false      
 * }
 * 
 * ab dekho iske output me hame ye 4 chije milti hai. ab vo chaaro property hame smjh skte hai to uske description nahi likh rha hu.
 * but ye janna bhi jaruri hai ki inme se first to PI kii jo value hoti hai vahi hai lekin jo second property hai "writable" usse false kar rakha hai bas issi vajah se PI ki value ko ham change nahi kar skte hai.
 * 
 * 
 * 
 * but ye sab se hame ye sikhna tha ki iss tarah ki properties bhi JS me hoti hai and ham bhi ese property bana skte hai kisi ke liye.
 */


//----------------------------------------------------------------------------------------------------//
//                              creating custom property descriptor
//----------------------------------------------------------------------------------------------------//
// chalo ham bhi upper jese getOwnPropertyDescriptor() me properties mili thi vese apne Object ke liye bhi banate hai.
// uske liye sabse pehle ek object bana lete hai. and object banane ke different ways hai,
// like object factory function: const myObj = Object.create(null) // jiski default value hi null hoti hai.
// but ham direct hi banayenge,
// const emp = {
//     name: 'manav',
//     salary: '2000000',
//     empID: '231'
// }

// descriptor property dekhne-sikhne se pehle ek baar per dhyan do ki har type ke Object ke pass khudki properties hoti hai joki ham console me ja kar Prototype ke andar dekh skte hai. but utni hi property sikh kar kaam nahi chalega.

// now ab emp object ki descriptor property dekhte hai,
// console.log(Object.getOwnPropertyDescriptor(emp)); // output: undefined
// yaha hame output me "undefined" mil raha hai. kyo ki ye function property ka description deta hai but hamne uske argument me sidhe-sidhe object hi daal diya, jabki hame uss object ki kis property ka description chahiye vo specify karna hoga.

// console.log(Object.getOwnPropertyDescriptor(emp, 'name'));
/**
 * ab mila sahi se output,
 * {
 *   value: 'manav',   
 *   writable: true,   
 *   enumerable: true, 
 *   configurable: true
 * }
 * 
 * ye to only emp object ke name property ka hi description tha. ese hi ham baaki dono property ka bhi description dekh skte hai.
 * 
 */
// yaha per hame jo property mil rahi hai na like writable, enumerable, configurable isko ham set bhi kar skte hai means define kar skte hai.

// ab properties set ya fir achhe se kahe to define karne ke liye "defineProperty()" ka use hota hai. jisme hame 3 argument likhne hote hai.
// first 2 to same hi hai ki jis object ki property hai uska name, second me jo property hai uska name, and last me 3rd argument me ek object likhna hai jisme jo-jo property ham change karna chahte hai vo likhna hoga. ek example dekhte hai fir smjh me aa jayega.

// Object.defineProperty(emp, 'name', {
//     writable: false,
//     enumerable: false
// })
// // now ab firse dekhte hai ki property change huyi ke nahi,
// console.log(Object.getOwnPropertyDescriptor(emp,'name'));
/**
 * so output me hamne jo set kiya hai vahi aa raha hai, pehle ka output upper likha hai usse compare karke dekh skte hai,
 * {
 *   value: 'manav',   
 *   writable: false,  
 *   enumerable: false,
 *   configurable: true
 * }
 */


//----------------------------------------------------------------------------------------------------//
//                                      object: iterable or not?
//----------------------------------------------------------------------------------------------------//
/**
 * 1. By Default: Plain Objects are NOT Iterable:
 * JavaScript me iterability ka matlab hai ki ek object ko for...of loop ke through traverse kar sakein.
 * for...of loop sirf un objects ke liye kaam karta hai jo iterable protocol ko follow karte hain.
 * Plain objects {} iterable protocol ko follow nahi karte, isliye wo iterable nahi hote.
 * 
 * example:
 * const obj = { a: 1, b: 2, c: 3 };
 * for (let item of obj) {
 *    console.log(item); // ❌ TypeError: obj is not iterable
 * }
 * 
 * 
 * Why Objects are Not Iterable?
 * Objects are key-value pairs, aur JavaScript me objects ko ek "unordered collection" maana jata hai.
 * Iterability un objects ke liye hoti hai jo ordered collections hote hain, jaise arrays, strings, maps, ya sets.
 * 
 * 
 * 2. Iterable Protocol
 * Koi bhi object tab iterable hota hai jab:
 * Usme [Symbol.iterator] method ho.
 * Ye method ek iterator object return kare jo next() method ko implement karta ho.
 * 
 * 
 * 3. Making an Object Iterable
 * ham plain object ko iterable bana sakte hai [Symbol.iterator] method define karke.
 * 
 * Example: Custom Iterable Object
 * const obj = {
 *    a: 1,
 *    b: 2,
 *    c: 3,
 *  
 *    // Defining Symbol.iterator
 *    [Symbol.iterator]: function () {
 *      const keys = Object.keys(this); // Get object keys
 *      let index = 0;
 *
 *      return {
 *        next: () => {
 *          if (index < keys.length) {
 *            return { value: this[keys[index++]], done: false };
 *          } else {
 *            return { value: undefined, done: true };
 *          }
 *        }
 *      };
 *    }
 *  };
 *
 *  // Now we can use for...of
 *  for (const value of obj) {
 *      console.log(value); // Output: 1, 2, 3
 *  }
 * 
 * 
 * 4. Use Object.entries, Object.keys, or Object.values:
 * Although plain objects are not iterable, aap inko indirectly iterable bana sakte ho by converting them into arrays using Object.entries(), Object.keys(), or Object.values().
 * 
 * Example:
 * const obj = { a: 1, b: 2, c: 3 };
 *  // Using Object.keys
 *  for (const key of Object.keys(obj)) {
 *    console.log(key); // Output: a, b, c
 *  }
 *  // Using Object.values
 *  for (const value of Object.values(obj)) {
 *    console.log(value); // Output: 1, 2, 3
 *  }
 *  // Using Object.entries
 *  for (const [key, value] of Object.entries(obj)) {
 *    console.log(key, value); // Output: a 1, b 2, c 3
 *  }
 * 
 * 
 * 
 * 5. Summary
 *  Plain objects {} are not iterable by default.
 *  Objects are not iterable because they are unordered collections of key-value pairs.
 *  To make an object iterable:
 *  Define a [Symbol.iterator] method.
 *  Or convert it into arrays using Object.keys(), Object.values(), or Object.entries().
 * 
 * 
*/

// so abhi hamne dekha ki object itrable nahi hote hai but ham objects ko iterable bana skte hai,
// to ek bana hi dete hai.
// const emp = {
//     name: 'manav',
//     salary: '2000000',
//     empID: '231'
// }

// for (const [key, value] of emp) {
//     console.log(`${key} : ${value}`);
// } // ye valie loop hame error de rahi hai. "TypeError: emp is not iterable" kyo hamne direct object hi likh diya hai iterate karke ko joki nahi hoga.
// so ab isse iterable banana padega to uske liye ham Object.entries(objectName) ka use karenge

// for (const [key, value] of Object.entries(emp)) {
//     console.log(`${key} : ${value}`);
// }// now it's works fine.
/**
 * output:
 * name : manav
 * salary : 2000000
 * empID : 231
 */
// but hame ese hi code nahi likh dena chaiye usse har consdition me sahi se work kare esa banana chahiye means let suppose yaha par abhi to sab simple key-value pairs hai but what if usme ek function bhi hota, fir jo output aata vo sahi nahi rehta.
// se ye sab chije dhyan me rakh ke hame code likhna chahiye.


// to uske pehle object me ek function likh hi dete hai.
// const emp = {
//     name: 'manav',
//     salary: '2000000',
//     empID: '231',
//     changeUser: function(){
//         console.log("user changed")
//     }
// }

// for (const [key, value] of Object.entries(emp)) {
//     console.log(`${key} : ${value}`)
// }
/**
 * output:
 * name : manav
 * salary : 2000000
 * empID : 231
 * changeUser : function(){
        console.log("user changed")
    }
*/

// // so is loop ko ham fir se likhte hai.
// for (const [key, value] of Object.entries(emp)) {
//     if(typeof value != 'function'){
//         console.log(`${key} : ${value}`)
//     }
// } // yaha per iss baat par jyada dhyan dena ki hamne if me condition kese likhi hai.


//----------------------------------------------------------------------------------------------------//
//                            sotping object's iteration power forcefully
//----------------------------------------------------------------------------------------------------//
// so yaha tak to ham object ke kese bhi iterable bana kar kaam kar rahe the but what if ham isse iterable hone se complete rok hi de.

const emp = {
    name: 'manav',
    salary: '2000000',
    empID: '231',
    changeUser: function(){
        console.log("user changed")
    }
}

// pure object ka enumerate hone se rokne ke pehle ham uski property ko object ke enumeration me aane se rok skte hai vo dekhte hai.
// so yaha per ham object ki first property ko object enumeration me aane se rokte hai
Object.defineProperty(emp, 'name', {
    enumerable: false
})
// yaha per ham ye jo 3 property change karte hai na uske object ki property ke attributes bolte hai.

// ab ham firse object per loop lagate hai then dekhte hai kya output aata hai.
for (const [key, value] of Object.entries(emp)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`)
    }
}
/** so yaha per hame output me obly
 * salary : 2000000
 * empID : 231
 * hi mile hai jisse hame pata chalta hai ki name property enumeration se alag hat gayi hai.
 */



// yaha par object ko enumerate hone se kese roke uska code ayega.
/**
 * pure object ko enumerate hone se rokne ke liye iss link per jaa kar padh lo
 https://chatgpt.com/share/67991993-4108-800c-b15e-a11e10881a92
 */




//----------------------------------------------------------------------------------------------------//
//                           Property Getter ans Property Setter functions
//----------------------------------------------------------------------------------------------------//
// Property Getter Functions
// Object.getOwnPropertyDescriptor(objectName, 'propertyName')
/**
 * 1. Object.getOwnPropertyDescriptor():
 * Ye method ek single property ka descriptor return karta hai. Agar aap kisi specific property ka descriptor chahte hain, to is method ka use karte hain.
 * 
 * Syntax:
 * Object.getOwnPropertyDescriptor(obj, prop);
 * obj: Object jisme property ko inspect karna hai.
 * prop: Property ka naam jiska descriptor aapko chahiye.
 * 
 * What it returns:
 * Ye method ek property ka descriptor object return karta hai. Agar property exist nahi karti, to ye undefined return karega.
 * 
 * Descriptor Object:
 * {
 *   value: <property value>,
 *   writable: <true/false>,
 *   enumerable: <true/false>,
 *   configurable: <true/false>
 * }
 * 
 * Example:
 *      const obj = {
 *        name: 'John'
 *      };
 *      
 *      // Getting descriptor for 'name' property
 *      const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
 *      
 *      console.log(descriptor);
 *      output:
 *      {
 *        value: 'John',
 *        writable: true,
 *        enumerable: true,
 *        configurable: true
 *      }
 * Is example me Object.getOwnPropertyDescriptor() "name" property ka descriptor return karega.
 * 
 */

//------------------------------------------------------------------------------//

// Object.getOwnPropertyDescriptors()
/**
 * 2. Object.getOwnPropertyDescriptors():
 * Ye method pure object ka saare properties ke descriptors return karta hai ek object ke form mein. Matlab ye aapko poore object ke properties ka descriptor object deta hai, na ki ek single property ka.
 * 
 * Syntax:
 * Object.getOwnPropertyDescriptors(obj);
 * obj: Object jiske saare properties ke descriptors chahiye.
 * 
 * What it returns:
 * Ye method object ke saare properties ka descriptors ka ek object return karta hai, jisme har property ka naam key hota hai aur uska descriptor value hota hai.
 * 
 * Example:
 *      const obj = {
 *        name: 'John',
 *        age: 30
 *      };
 *      
 *      // Getting descriptors for all properties in the object
 *      const descriptors = Object.getOwnPropertyDescriptors(obj);
 *      
 *      console.log(descriptors);
 *      // output:
 *      {
 *        name: {
 *          value: 'John',
 *          writable: true,
 *          enumerable: true,
 *          configurable: true
 *        },
 *        age: {
 *          value: 30,
 *          writable: true,
 *          enumerable: true,
 *          configurable: true
 *        }
 *      }
 * Is example me Object.getOwnPropertyDescriptors() poore object ke name aur age properties ke descriptors return karega.
 * 
 * 
 * 
 * 
*/

//---------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------//

// Property Setter Functions
// Object.defineProperty(objectName, 'propertyName', {iss object me perperty ke jo attributes change karne ho vo likhte hai})
// Object.defineProperties()

/**
 * Object.defineProperty() aur Object.defineProperties() dono JavaScript methods hain jo object properties ko define karne ke liye use hote hain. Dono methods kaam karte hain properties ke behavior ko fine-tune karne ke liye, jaise ki writable, configurable, enumerable, aur accessor properties set karna.
 * 
 * 1. Object.defineProperty():
 * Object.defineProperty() ka use ek single property ko define ya modify karne ke liye hota hai. Ye aapko ek property ke behavior ko fine-tune karne ki flexibility deta hai.
 * Ye method ek single property ko define ya modify karne ke liye use hota hai.
 * Syntax:
 * Object.defineProperty(object, propertyName, descriptor)
 *  object: Jis object par property define karni hai.
 *  propertyName: Property ka naam.
 *  descriptor: Ek object jo property ke behavior ko define karta hai.
 * 
 * Descriptor Options:
 * value: Property ka value set karega.
 * writable: Boolean value (default: false). Agar true hai, to property ka value update ho sakta hai.
 * configurable: Boolean value (default: false). Agar true hai, to property delete ho sakti hai ya descriptors modify ho sakte hain.
 * enumerable: Boolean value (default: false). Agar true hai, to property for...in loop aur Object.keys() me dikhai degi.
 * get: Getter function.
 * set: Setter function.
 * 
 * Example: Define a Single Property
 * const person = {};
 * 
 * Object.defineProperty(person, 'name', {
 *   value: 'John',           // Set the property value
 *   writable: false,         // Can't change the value
 *   enumerable: true,        // Will show up in Object.keys or for...in
 *   configurable: false      // Can't delete or redefine this property
 * });
 * 
 * console.log(person.name); // Output: John
 * 
 * person.name = 'Doe';      // Ignored, because writable: false
 * console.log(person.name); // Output: John
 * 
 * delete person.name;       // Ignored, because configurable: false
 * console.log(person.name); // Output: John
 * 
 * Property Descriptor Default Values:
 * Agar aap kisi descriptor ko define nahi karte, to uski default value ye hoti hai:
 * ---------------------------
 * Descriptor    Default Value
 * ---------------------------
 * value         undefined
 * writable      false
 * enumerable    false
 * configurable  false
 * 
 * 
 * 2. Object.defineProperties():
 * Object.defineProperties() ek saath multiple properties ko define karne ke liye use hota hai. Har property ka apna descriptor hota hai.
 * Syntax:
 *      Object.defineProperties(obj, {
 *        property1: descriptor1,
 *        property2: descriptor2,
 *        // More properties...
 *      });
 * 
 * Example: Define Multiple Properties
 *      const person = {};
 *      
 *      Object.defineProperties(person, {
 *        name: {
 *          value: 'John',
 *          writable: true,        // Can change the value
 *          enumerable: true,      // Will show up in Object.keys or for...in
 *          configurable: true     // Can delete or redefine this property
 *        },
 *        age: {
 *          value: 30,
 *          writable: false,       // Can't change the value
 *          enumerable: true,      // Will show up in Object.keys or for...in
 *          configurable: false    // Can't delete or redefine this property
 *        }
 *      });
 *      
 *      console.log(person.name); // Output: John
 *      console.log(person.age);  // Output: 30
 *      
 *      person.name = 'Doe';      // Works, because writable: true
 *      console.log(person.name); // Output: Doe
 *      
 *      person.age = 35;          // Ignored, because writable: false
 *      console.log(person.age);  // Output: 30
 * 
 * 
 * 
 */


//------------------------------------------------------------------------------//
// dono Property getter an setter function ke baare me more info:
// https://chatgpt.com/share/67991993-4108-800c-b15e-a11e10881a92
//------------------------------------------------------------------------------//
