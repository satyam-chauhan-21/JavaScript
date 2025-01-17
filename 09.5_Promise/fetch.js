// in this document
// fetch()
// fetch() syntax
// working

//-------------------------------------------------------------------------------------------------------//
//                                                 fetch()
//-------------------------------------------------------------------------------------------------------//
// "fetch()" pehle only browser me tha, ese ham usse direct use nahi kar skte the. but, after 2022 "fetch()" ko browser ke bahar bhi use karne ke liye set kar diya gaya. uske pehle XHR hi use ho rha tha.
// for more details: https://blog.logrocket.com/fetch-api-node-js/

/**
 * event loop ke baar eme hame pata hai uske execution ke baate me bhi hame pata hai ki koi line ya function execute hona hota hai to vo call stack me jata hai & uska bhi execution bhi pata hai.
 * but ussi call stack me jab asynchronous line ya fir function aate hai to vo alag se execute hone chale jaate hai fir jab vo execute ho jate hai tab vo "callback" queue me aate hai.
 * but ese hi aasynchronous function me kuch special function hi hote hai like "fetch()" jinke liye alag se queue hoti hai like "priority queue". iss priority queue me aane wale ka result normal queue se jaldi show kar diya jata hai.
 */

// ----------------------------------------------------------------------------------------------------- //
//                                            fetch() syntax
// ----------------------------------------------------------------------------------------------------- //
// fetch() ke syntax me ham URL then uske baad object ko pass kar skte hai.
// fetch('google.com', {username: "karan", password: '123'})


// ----------------------------------------------------------------------------------------------------- //
//                                           working of fetch()
// ----------------------------------------------------------------------------------------------------- //
// The fetch() method starts the process of fetching a resource from a server.
// The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.
// The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. You can then check the request status and extract the body of the response in various formats, including text and JSON, by calling the appropriate method on the response.

// yaha per ek baat notice karne waali hai ki "fetch()" ek "promise" return karta hai.
// The fetch() method returns a Promise that resolves to a Response object.

/**
 * fetch() ko ja bhi ham call karte hai tab vo 2 part me divide ho kar kaam karta hai.
 * first part uska golobal memory me space allocation karvata hai. jisme 2 kaam ke array hote hai,
 *      onFulfilled[]: ye promise ka resolve hai.
 *      onRejection[]: ye promise ka rejection hai.
 *  inn dono array me ham directly values ko push nahi kar skte hai, kyoki ye private hote hai.
 * means pura ye jo first part hai vo private hota hai usko ham access nahi kar skte hai.
 * 
 * second part jo hai vo either browser ki api access karega or node ki api access karega. then yaha se jaati hai network request joki ham send nahi kar skte uske liye either browser or node hame koi resource provide karta hai.
 *      ab network request ke 2 result ho skte hai either send hogi or send hi nahi ho payi. so if request successfull send hogi to vo jo bhi data aaya hoga vo jayega "onFulfilled[]" ke andar else request nahi send ho payi or fail ho hai or bich me hi stop ho gayi to fir "onRejection[]" me jayega.
 *  but yaha dhyan dene vali baat hai ki jitne bhi error hai like "404: file not found" vo sab bhi "onFulfilled[]" ke andar hi jayenge kyoki ye request send huyi hai na isiliye to server se response mila hai, means ye ek type ka successfull response hai.
 * 
 * so network request se onFulfilled[] aur onRejection[] me data jata hai(ek network request se koi ek ke andar value fill hogi kyoki request ek time par success and failure dono to nahi de skti na.). and in dono ke andar hote hai kuch function joki memory me jobhi variable ke naam se space allocate huyi hai usme data fill karte hai. now ab jobhi variable bana hoga uski reponsibility hai ki hamne jiss variable me "fatch()" ko call kiya hai usme data bhar de ya fill kare.(and if hamne directly fetch() ko call kiya hai& fetch() ke baad ".then()" lagaya hai to usme jobhi variable hamne banaya ho fetch() ke data ho hold karne ke liye usme value fill kar de. ya fir variable nahi banaya ho to ".then()" me data ko pass kar de.)
 */

