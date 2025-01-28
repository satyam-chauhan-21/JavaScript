// in this document:
// Math.PI is changeable or not and why
// why we can't actualy change value of PI
// creating custom property descriptor

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
const emp = {
    name: 'manav',
    salary: '2000000',
    empID: '231'
}

// descriptor property dekhne-sikhne se pehle ek baar per dhyan do ki har type ke Object ke pass khudki properties hoti hai joki ham console me ja kar Prototype ke andar dekh skte hai. but utni hi property sikh kar kaam nahi chalega.

// now ab emp object ki descriptor property dekhte hai,
// console.log(Object.getOwnPropertyDescriptor(emp)); // output: undefined
// yaha hame output me "undefined" mil raha hai. kyo ki ye function property ka description deta hai but hamne uske argument me sidhe-sidhe object hi daal diya, jabki hame uss object ki kis property ka description chahiye vo specify karna hoga.

console.log(Object.getOwnPropertyDescriptor(emp, 'name'));
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

Object.defineProperty(emp, 'name', {
    writable: false,
    enumerable: false
})
// now ab firse dekhte hai ki property change huyi ke nahi,
console.log(Object.getOwnPropertyDescriptor(emp,'name'));
/**
 * so output me hamne jo set kiya hai vahi aa raha hai, pehle ka output upper likha hai usse compare karke dekh skte hai,
 * {
 *   value: 'manav',   
 *   writable: false,  
 *   enumerable: false,
 *   configurable: true
 * }
 */