// in this document:
// V8 engine
// miltiple types of array depending on it's elements
// why not use holey array
// types of array based on optimization


//-------------------------------------------------------------------------------------//
//                                      V8 engine
//-------------------------------------------------------------------------------------//
// video ke staring me JS ka v8 engine ke andar ek d8 folder hai uske through kuch advance properties dekhi.
// d8 vahi folder hai jiske through ham JS ke andar "console" ko use kar skte hai. joki hamne pehle bhi dekha tha.
// now aur bhi advance me jaan_ne ke liye ham use karenge JSVU(JS Versiion Updater).
// but abhi hame uska esa kuch khaas kaam nahi hai and ham windows par hai to usse download nahi karnge.
// abhi video dekh kar hi samjh lete hai: from 7min https://youtu.be/ZRS485LxX0s?si=AA0kydeSceHGBd2_

// so jab bhi ham JSVU install kare tab hame uss time konsa os  use kar rahe hai and kon kon se engine download karna hai vo specify karna hota hai.
// after installation, ham .jsvu ke andar dekhenge to bin, engines, status.json ye kuch chije hoti hai.
// and if ham engines ke andar dekhenge to hamne jo jo engines download kiye honge vo mil jayenge.
// then after if ham bin ke andar dekhenge to hame aur bhi kaam ki chije mil jayengi but unme se ek bohot kaam ki chij hai "v8-debug".
// and bin se hi sab files run hoti hai. (may be)
// and video me jo %DebugPrint() dikhata hai vo isi v8-debug me hai.
/**
 * so now if ham below vaali command likhenge,
 *   .jsvu/bin/v8-debug --allow-natives-syntax   
 *    // yaha par "--allow-natives-syntax" ek flag hai joki d8 ke andar jaane ki access deta hai.
 * to ham "d8" ke andar chale jayenge. jaha per if ham video me dikhaye gaye array vale code ko likh kar %DebugPrint(arrayName) likh kar execute karvayenge to hame bohot hi sari kaam ki properties milengi memory se related bhi.(joki abhi kaam ki nahi hai jab me sikh raha hu)
 * 
 * ek jarooori baat ki ye %DebugPrint() function vscode me normally use and run nahi kiya ja skta hai.
 */





//-------------------------------------------------------------------------------------//
//                  miltiple types of array depending on it's elements
//-------------------------------------------------------------------------------------//
/**
 * yaha ham array ke baare me thodi advance information add karte hai.
 * 
 * array ke elements ke base par two type hote hai joki hamne .jsvu/bin/v8-debug => d8 ke andar dekha
 * 
 * 1) continuous
 * 2) holey 
 *  
 * 
 * SMI(small interger): iss type ke array me only numbers elements hote hai.
 * Packed Elements: iss type ke array me koi hole nahi hota hai. saari coplete values hoti ha.
 * Double: iss type ke array me string, float, function ese miltiple type ke elements hote hai.
 * 
 *  
 */

// const arr = [1,2,3,4,5] // ye ek PACKED_SMI_ELEMENTS vala array hai.
// // if ham isme ko float value ko push kar de to ye,
// arr.push(9.3) // now ye array PACKED_DOUBLE_ELEMENTS vala array ban gaya hai. 
// // now if ham isme se ye float eali value remove ya delete bhi kar de fir bhi ye PACKED_DOUBLE_ELEMENTS array hi rahega.
// // so if ek baar uska type change ho gaya to vo hierarchy me niche nahi jaa sakta hai.
// arr.push('hary') // bow ye PACKED_ELEMENTS vala array ho gaya.
// // so ese defferent defferent type ke element vale array ko execution ke time per alag type se optimize kiya jata hai.

// const arr1 = [1,2,,4,2,,6] // ye holey type ka array hai jisme kuch value ke liye memory me jagah to bana di gayi hai but vo value hi nahi hai. empty space chhod hi hai.

// // now if ham iss array ki length dekhe to vo complete hi aayegi jitni memory me space create huyi utni hi.
// console.log(arr1.length); // output: 7 joki sahi hai


//-------------------------------------------------------------------------------------//
//                             why not use holey array
//-------------------------------------------------------------------------------------//
//
// const arr2 = [1,2,,4,2,,6]
// // hame iss type ke array nahi banane chaiye ye optimize nahi hote hai and execution bhi bohot slow kar dete hai.
// // uska reason hai let suppose yaha hamare pass array me 7 elements hai means ham 0-6 tak ki index ko access kar skte hai but if ham 6 se badi index ko access karenge to hamne direct undefined output me mil jata hai.
// // kyuki array index check karne se pehle length property check karta hai if index length se badi hai to vo direct hame undefined de deta hai.
// // means yaha ek iss array ki ek boundary ban jayegi and if koi index uss boundary se bahar ki hogi to vo direct undefined de dega.
// // console.log(arr2[17]); // output: undefined

// //ab main baat par aate hai ki yaha index 5 par hole hai means koi value hai hhi nahi but uske liye memory me space bana di hai.
// console.log(arr2[5]); // output: undefined
// // so jab esi koi value ko ham access karte hai tab execution ese hota hai,
// // first boundary check
// // iff upper nahi mila to fir ese check hota hai hasOwnProperty(arrayName, index)
// // so yaha par hoga hasOwnProperty(arr2, 5)
// // if upper bhi nahi mila to aur deep me jaata hai array ke prototype me jata hai
// // hasOwnProperty(arr2.prototype, 5)
// // if yaha bhi nahi mila to aur deep me jayega joki last hota hai koi bhi JS element ke liye vo hai Object
// // hasOwnProperty(Object.prototype, 5)
// // and last me bhi nahi milta hai to fir vo undefined deta hai.
// // yaha deep checking JS ke prototypal inheritance properties ki vajah se ho rahi hai.

// // so yahi reason hai ki hame holey array nahi banane chaihiye. kyuki uski value holey value access se pahle outof bound vali index ka output mil jata hai.


//-------------------------------------------------------------------------------------//
//                          types of array based on optimization
//-------------------------------------------------------------------------------------//

/**
 * **JavaScript arrays** do types ke hote hain:  

1. **Packed Arrays** 🚀  
2. **Hole-y Arrays** 🕳️  

Yeh concept **JavaScript engine optimization** se related hai. JavaScript internally **arrays ko optimize** karta hai taaki execution fast ho, lekin agar array me **gaps (holes)** aa jayein, to optimization slow ho jata hai.  

---

## 🔹 **1. Packed Array (Fast & Optimized ✅)**
Agar **array continuous memory blocks me store ho raha hai aur koi hole (empty space) nahi hai**, to **packed array** kehlata hai.  

### ✅ **Example: Packed Array**
```javascript
let arr = [1, 2, 3, 4, 5];  // No holes, continuous memory allocation
```
🔹 JavaScript Engine ise **optimized storage** ke saath fast access karta hai.  

**Packed arrays ki properties:**  
✔ **Same type ke elements hote hain** (engine easily optimize kar sakta hai).  
✔ **No empty slots** (continuous memory allocation).  
✔ **Fast execution** (JavaScript engine efficiently process karta hai).  

---

## 🔹 **2. Hole-y Array (Slow & Unoptimized ❌)**
Agar **array me missing indexes (holes) hain**, to JavaScript engine ise **hole-y array** treat karta hai, jo **slow execution cause karta hai**.  

### ❌ **Example: Hole-y Array**
```javascript
let arr = [1, , 3, , 5];  // 👈 Yeh array hole-y hai, kyunki kuch elements missing hain (undefined nahi, blank hai)
console.log(arr[1]); // undefined
console.log(arr.length); // 5 (even though index 1 & 3 empty hain)
```
🔹 **JavaScript engine optimize nahi kar sakta**, kyunki **index 1 & 3 missing hain**, aur engine ko check karna padta hai ki waha kuch hai ya nahi.  

**Hole-y arrays ki problems:**  
❌ **Engine optimize nahi karta (slow execution hota hai)**  
❌ **Sparse memory allocation hoti hai**  
❌ **Unexpected bugs aa sakte hain (undefined values ki wajah se)**  

---

## 🔥 **JavaScript Engine Optimization & Deoptimization**
🔹 **Engine Packed Arrays ko optimize karta hai (fast execution ke liye).**  
🔹 **Agar ek bhi hole aa gaya, to engine usse Hole-y Array bana deta hai aur optimization hata deta hai.**  
🔹 **Hole-y array me missing values ko track karna costly hota hai (slow performance)**  

**Example:**  
```javascript
let arr = [1, 2, 3, 4, 5];  // Packed array
arr[10] = 99;  // ❌ Ab yeh Hole-y array ban gaya (index 5-9 missing hain)
```
➡ **Packed → Hole-y array ban gaya** kyunki **beech me missing indexes hain (5,6,7,8,9).**  
➡ JavaScript engine isse **deoptimize** kar dega.  

---

## 🎯 **Conclusion:**
| **Array Type**   | **Optimized?** | **Fast?** |        **Memory Allocation**        |  
|------------------|----------------|-----------|-------------------------------------|  
| **Packed Array** | ✅ Haan       | 🚀 Fast   | **Continuous memory blocks**        |  
| **Hole-y Array** | ❌ Nahi       | 🐌 Slow   | **Sparse memory allocation (gaps)** |  

**👉 Best Practice:** Hamesha **packed arrays** use karo aur **avoid karo ki arrays me unnecessary holes aayein.** 😎🚀🔥
 */