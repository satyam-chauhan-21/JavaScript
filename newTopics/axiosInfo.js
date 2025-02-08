// in this document:
//axios


//----------------------------------------------------------------------------------------//
//                                      axios
//----------------------------------------------------------------------------------------//
//isme axios ke baar me initial info hai joki chatGPT se likhi hai.
// abhi mujhe axios ko use karna nahi aata hai.

/**
 * ## **🔥 Axios in JavaScript: Complete Deep Dive** 🚀  

### **📌 Axios Kya Hai?**
Axios **JavaScript ka ek popular HTTP client library** hai jo **browser aur Node.js dono me work karta hai**. Iska use **APIs se data fetch karne ya server ko request bhejne ke liye hota hai**. Yeh **Promises-based** hota hai, isliye **async/await ya `.then().catch()` se easily handle hota hai**.  

---

## **🔹 Axios vs Fetch API**
JavaScript me built-in `fetch()` bhi hota hai jo HTTP requests bhejne ke liye use hota hai. **To phir Axios kyun?**  
| Feature  | Fetch API | Axios |
|----------|----------|-------|
| Syntax  | Complex (Response `.json()` call karna padta hai) | Simple (Directly data mil jata hai) |
| Error Handling  | `catch()` sirf **network errors** handle karta hai | Properly **server errors (4xx, 5xx)** handle karta hai |
| Request Cancellation  | Default support nahi | **Cancel Tokens** ka use kar sakte ho |
| Interceptors  | Nahi hai | Haan, request-response modify kar sakte ho |
| Automatic JSON Parsing  | Nahi (Manually `res.json()`) | Haan (Data direct milta hai) |
| Timeout Support  | Nahi | Haan, timeout set kar sakte ho |

👉 **Axios fetch API se zyada powerful aur flexible hai**, isliye **backend APIs ke saath kaam karte waqt Axios kaafi useful hota hai**.  

---

## **🔹 Axios Install Kaise Kare?**  
Agar **CDN se use karna ho** (Browser ke liye):  
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
Agar **Node.js me use karna ho** (Backend ke liye):  
```sh
npm install axios
```
Aur fir **import karna hoga**:  
```js
const axios = require('axios');  // Node.js me
```
Ya  
```js
import axios from 'axios';  // ES6 Module Support
```

---

## **🔹 Basic Axios Request Examples**

### **1️⃣ GET Request (API se Data Fetch Karna)**
```js
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);  // JSON data direct milta hai
  })
  .catch(error => {
    console.error('Error:', error);
  });
```
✅ **`response.data` me API ka data direct milta hai** (Fetch API me `res.json()` call karna padta hai).  

---

### **2️⃣ POST Request (Server ko Data Send Karna)**
```js
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'New Post',
    body: 'This is a test post',
    userId: 1
})
.then(response => console.log('Success:', response.data))
.catch(error => console.error('Error:', error));
```
✅ **JSON body directly bhej sakte ho** (Fetch me manually `JSON.stringify()` karna padta hai).  

---

### **3️⃣ PUT Request (Existing Data Update Karna)**
```js
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Updated Post',
    body: 'This is an updated post'
})
.then(response => console.log('Updated:', response.data))
.catch(error => console.error('Error:', error));
```
✅ **PUT request existing record update karne ke liye use hota hai**.  

---

### **4️⃣ DELETE Request (Data Delete Karna)**
```js
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(response => console.log('Deleted:', response.data))
.catch(error => console.error('Error:', error));
```
✅ **Data delete hone ke baad server confirmation return karega**.  

---

## **🔹 Axios ko Advanced Tarike se Use Karna**  

### **5️⃣ Async/Await ke Saath Axios**
```js
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
```
✅ **Async/Await code ko zyada readable aur maintainable banata hai**.  

---

### **6️⃣ Axios me Headers Add Karna (Authentication ke Liye)**
```js
axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json'
    }
})
.then(response => console.log(response.data))
.catch(error => console.error('Error:', error));
```
✅ **Headers authentication ke liye kaafi useful hote hain, jaise JWT Tokens ya API Keys.**  

---

### **7️⃣ Axios ka Timeout Set Karna (Slow Network Handle Karne ke Liye)**
```js
axios.get('https://jsonplaceholder.typicode.com/posts', { timeout: 5000 })  // 5 seconds timeout
  .then(response => console.log(response.data))
  .catch(error => console.error('Request timed out or failed:', error));
```
✅ **Agar request 5 seconds se zyada time leti hai, to timeout error throw hoga.**  

---

### **8️⃣ Axios Interceptors (Request ya Response Modify Karna)**
👉 **Request Interceptor** (Jaise API calls se pehle `Authorization` header lagana)
```js
axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer YOUR_ACCESS_TOKEN`;
    return config;
}, error => Promise.reject(error));
```
👉 **Response Interceptor** (Jaise error handling automate karna)
```js
axios.interceptors.response.use(response => {
    return response;
}, error => {
    console.error('Error:', error.response?.data || error.message);
    return Promise.reject(error);
});
```
✅ **Interceptors kaafi useful hote hain error handling aur authentication ke liye**.  

---

### **9️⃣ Multiple Requests ek Saath Send Karna (`axios.all`)**
Agar **ek se zyada API calls ek saath bhejni ho**, to `axios.all()` use kar sakte ho:
```js
axios.all([
    axios.get('https://jsonplaceholder.typicode.com/posts/1'),
    axios.get('https://jsonplaceholder.typicode.com/posts/2')
])
.then(axios.spread((post1, post2) => {
    console.log('Post 1:', post1.data);
    console.log('Post 2:', post2.data);
}))
.catch(error => console.error('Error:', error));
```
✅ **Isme multiple requests parallel execute hote hain, jo performance improve karta hai.**  

---

## **🔹 Conclusion: Axios Kyu Best Hai?**  
🚀 **Axios `fetch()` se better hai kyunki:**  
✅ **Auto JSON parsing** (Fetch me `res.json()` likhna padta hai)  
✅ **Better Error Handling** (Fetch sirf network errors handle karta hai)  
✅ **Timeout Support** (Fetch me timeout default nahi hota)  
✅ **Interceptors** (Request/Response modify kar sakte ho)  
✅ **Request Cancellation** (`CancelToken` ka support)  
✅ **Automatic Headers Management**  

### **🚀 Final Words:**  
Agar **server-side ya frontend me API calls karni hai**, to **Axios best choice hai**. Yeh **faster, reliable aur easy-to-use** hai.  

Agar **koi aur Axios ka specific use case ya problem ho to batao, aur deep dive karenge!** 😎🔥
 */