// in this document:
// using external module in JS

//-----------------------------------------------------------------------------------------------------------//
//                                         using external module in JS
//-----------------------------------------------------------------------------------------------------------//
// js me koi bhi external module ko use karne ke liye "require()" ka use hota tha. but abhi new technique ka use hota hai.
// "import" and "export".
/**
 * JavaScript mein **external modules** ka use karna bahut hi common aur useful practice hai, especially jab aapka code bada ho aur usko organized rakhna ho. External modules ka use karne ke liye, aapko **ES6 Modules** (yaani `import` aur `export` statements) ka use karna hota hai.

Aaiye step-by-step samjhte hain:

---

### **1. Module Banane ka Tarika**
Ek module banane ke liye, aapko ek alag file banani hogi aur usme kuch functions, variables, ya classes ko **export** karna hoga.

#### Example: `mathModule.js`
```javascript
// mathModule.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;
```

---

### **2. Module ko Import Karne ka Tarika**
Ab aap is module ko kisi aur file mein **import** kar sakte hain.

#### Example: `main.js`
```javascript
// main.js
import { add, subtract, PI } from './mathModule.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(PI); // Output: 3.14159
```

---

### **3. Default Export**
Agar aap ek module se sirf ek hi cheez export karna chahte hain, toh aap **default export** ka use kar sakte hain.

#### Example: `greetModule.js`
```javascript
// greetModule.js
export default function greet(name) {
    return `Hello, ${name}!`;
}
```

#### Importing Default Export:
```javascript
// main.js
import greet from './greetModule.js';

console.log(greet("Alice")); // Output: Hello, Alice!
```

---

### **4. Browser mein Modules ka Use**
Browser mein modules ka use karne ke liye, aapko `<script>` tag mein `type="module"` attribute add karna hoga.

#### Example: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Modules</title>
</head>
<body>
    <script type="module" src="main.js"></script>
</body>
</html>
```

---

### **5. Node.js mein Modules ka Use**
Node.js mein bhi aap ES6 modules ka use kar sakte hain, lekin uske liye aapko ya toh:
1. File ka extension `.mjs` rakho, ya
2. `package.json` mein `"type": "module"` add karo.

#### Example: `package.json`
```json
{
  "type": "module"
}
```

#### Example: `main.js` (Node.js mein)
```javascript
import { add, subtract } from './mathModule.js';

console.log(add(2, 3)); // Output: 5
```

---

### **6. Purane Tarike (CommonJS)**
Node.js mein pehle **CommonJS** modules ka use hota tha. Agar aap purane tarike se modules use karna chahte hain, toh `require` aur `module.exports` ka use karo.

#### Example: `mathModule.js` (CommonJS)
```javascript
// mathModule.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
```

#### Example: `main.js` (CommonJS)
```javascript
// main.js
const math = require('./mathModule.js');

console.log(math.add(5, 3)); // Output: 8
```

---

### **7. Modules ka Fayda**
- **Code Organization:** Code ko alag-alag files mein organize kar sakte hain.
- **Reusability:** Ek baar likha hua code multiple jagah use kar sakte hain.
- **Avoid Naming Conflicts:** Modules ke andar ke variables/functions global scope mein nahi hote.

---
 */