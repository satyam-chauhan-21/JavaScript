// in this document:
// file handling - deepseek
// file handling - chatGPT
// opening a file


//--------------------------------------------------------------------------------------------------------//
//                                        file handling - deepseek
//--------------------------------------------------------------------------------------------------------//

/**
 * JavaScript mein kisi dusri file ko open karna ya read karna **server-side environment** (jaise Node.js) mein possible hai, lekin **client-side JavaScript** (jaise browser mein) mein yeh directly nahi ho sakta kyunki security reasons ki wajah se browsers file system ko access nahi dete.

Aaiye dono scenarios ko alag-alag samjhte hain:

---

### **1. Server-Side JavaScript (Node.js) mein File Open Karna**
Node.js mein aap **`fs` (File System) module** ka use karke files ko read/write kar sakte hain.

#### Example: File Read Karne ka Tarika
```javascript
// Node.js mein
const fs = require('fs');

// File read karne ka tarika
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("File read karne mein error:", err);
        return;
    }
    console.log("File ka content:", data);
});
```

#### Example: File Write Karne ka Tarika
```javascript
// Node.js mein
const fs = require('fs');

// File write karne ka tarika
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error("File write karne mein error:", err);
        return;
    }
    console.log("File successfully write ho gayi hai!");
});
```

---

### **2. Client-Side JavaScript (Browser) mein File Access Karna**
Browser mein aap directly file system ko access nahi kar sakte, lekin aap user se file input lekar us file ko read kar sakte hain. Iske liye **`<input type="file">** element aur **FileReader API** ka use karte hain.

#### Example: User se File Input Lena aur Read Karna
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Reader</title>
</head>
<body>
    <input type="file" id="fileInput">
    <p id="fileContent"></p>

    <script>
        const fileInput = document.getElementById('fileInput');
        const fileContent = document.getElementById('fileContent');

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0]; // User ki selected file
            const reader = new FileReader();

            reader.onload = (e) => {
                fileContent.textContent = e.target.result; // File ka content display karo
            };

            reader.readAsText(file); // File ko text ke roop mein read karo
        });
    </script>
</body>
</html>
```

#### Isme kya hua?
1. `<input type="file">` se user file select karta hai.
2. `FileReader` API ka use karke file ka content read kiya jata hai.
3. File ka content webpage par display kiya jata hai.

---

### **3. Agar Aapko Server Par File Access Karna Hai**
Agar aapko client-side se server par file access karna hai, toh aapko **AJAX** ya **Fetch API** ka use karna hoga. Iske liye server par ek API endpoint banana hoga jo file ka content return kare.

#### Example: Fetch API se Server Par File Access Karna
```javascript
fetch('/path/to/file.txt')
    .then(response => response.text())
    .then(data => {
        console.log("File ka content:", data);
    })
    .catch(error => {
        console.error("File fetch karne mein error:", error);
    });
```

---

### **4. Important Points**
- **Browser Security:** Browsers directly file system ko access nahi dete, isliye aapko user se file input lena hoga ya server se file fetch karni hogi.
- **Node.js Flexibility:** Node.js mein aap directly files ko read/write kar sakte hain kyunki yeh server-side environment hai.
- **File Types:** Aap text files, JSON files, ya binary files (jaise images) ko bhi read/write kar sakte hain.

---

 */


//--------------------------------------------------------------------------------------------------------//
//                                        file handling - chatGPT
//--------------------------------------------------------------------------------------------------------//
/**
 * JavaScript me Python ke `open()` jaisa built-in function **directly nahi hota**, kyunki **JS primarily browser-based language hai**. Lekin **Node.js** me file handle karne ke liye `fs` (File System) module hota hai.  

### **📌 Node.js me File Open Karne ke Tarike**  

### **1️⃣ Synchronous Tarika (`fs.readFileSync`)**
```js
const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf8'); // File ko read karega
console.log(data);
```
👉 **Blocking Operation** – Jab tak file read nahi ho jati, aage ka code execute nahi hoga.  

---

### **2️⃣ Asynchronous Tarika (`fs.readFile`)**
```js
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});
```
👉 **Non-Blocking Operation** – Code execution file read hone ka wait nahi karega.  

---

### **3️⃣ File Open Karna aur Handle Karna (`fs.open`)**
```js
const fs = require('fs');

fs.open('file.txt', 'r', (err, fd) => {
    if (err) {
        console.error('Error opening file:', err);
        return;
    }
    console.log('File opened successfully:', fd);
});
```
👉 Yeh method **sirf file ko open karta hai** (`fd` = file descriptor return karta hai), usko read/write nahi karta.  

---

### **📌 Browser me File Open Karna?**  
Agar **browser environment me file open karni ho**, to **HTML File Input** aur `FileReader API` ka use hota hai:  
```js
const input = document.querySelector('input[type="file"]');

input.addEventListener('change', function () {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        console.log(reader.result);
    };

    reader.readAsText(file);
});
```
👉 Yeh browser me **user-selected file ko read** karega.  

---

### **📝 Conclusion**  
- **Node.js me** `fs.readFileSync` (Sync) aur `fs.readFile` (Async) use kar sakte ho.  
- **Browser me** `FileReader API` se user-selected files read kar sakte ho.  
- Python ka `open()` **Node.js ke `fs.open()` jaisa hai**, par Python me **built-in hai, JavaScript me nahi**. 🚀
 */



//------------------------------------------------------------------------------------------------//
//                                      opening a file
//------------------------------------------------------------------------------------------------//
// so upper hamne dekha ki ham JS me file directly open nahi kar skte hai kyoki client-side file open ki permission nahi hoti hai browser ko,
// but ham Node.js ke through ye kaam kar skte hai kyoki Node.js server-side hai and servar par to hame files open karne ki permission hoti hai if nahi ye permission nahi huyi server par to vo achhe se kaam hi nahi kar payega.
// so let's add the module of Node.js,
// const fs = require('fs') // ye require() se hame "fs" module ka use kar skte hai.
// 'fs' ke andar bohot saare ese function hote hai joki file-handling me help karte hai.
// like,
// readFileSync(): ye function synchronously  file read karta hai means jab tak file read nahi kar lega program aage nahi chalega.
// readFile(): ye function file ko asynchronously read karta hai means ye file read karta rahe fir bhi execution aage badh jayega. 
// writeFile(): file write karne ke liye use hota hoga may be.
// baad me or function and unn function ke baare me or dekh lena.

// import { readFile } from 'node:fs'; ham ese bhi import karva skte the. but ye baad me use karke dekhna
const fs = require('fs')
// dekho is readFile() me 3 parameter dalne hote hai,
// first: file ka path jise ham file descriptor bhi bol skte hai.
// second: characterEncodiing (like, utf8, utf-8 etc), nahi daalenge to default kuch le lega apne hi aap se.
// third: callback function, and ye function sab kaam karne ke liye use hota hai like reading file, writing file etc.
// iss callback ke parameter me hamne do chij paas karni hoti hai "err,data"
// err: used for if any error occurs
// data: file ka actual data hai ye.
fs.readFile('function.js', 'utf8', (err, fileData) => {
    if(err){
        console.log('kuch error aa gayi hai');
        return;
    }
    console.log(`file ka data: ${fileData}`)
})

// working very very fine.

// ab writeFile() wala baad me or research ke ke likhna.