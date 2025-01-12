// in this document:
// API
// Use of API
// Working of API
// Types of API
// XMLHttpRequest()
// object of XMLHttpRequest()
// method of XMLHttpRequest()
// readyState
// The main and importan thig of XHR
// sending XHR request and getting the data from that API
// Instance method: open()
// Instance method: send()
// Event: readystatechange
// got the data
// Extracting the meaning full data



//-----------------------------------------------------------------------------------------------------------//
//                                                    API
//-----------------------------------------------------------------------------------------------------------//

/**
 * API kya ek interface hai jo data ke lenden karta hai.
 * 
 * API stands for Application Programming Interface, and it's a set of rules and protocols that allow different software applications to communicate with each other.
 * APIs are used to share data, features, and functionality between applications.
 * 
 * APIs work by using a request-response model:
 * => The client, or application sending the request, sends a request to the API.
 * => The API processes the request and returns a response.
 * 
 * //-------------------------------------------------------------------------//
 * //                               Use of API
 * //-------------------------------------------------------------------------//
 * Uses: 
 * APIs are involved in many online actions and transactions, such as making mobile payments or browsing an ecommerce site. They are also used to enable cloud services, mobile application development, and the integration of web-based services.
 * the weather bureau's software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.
 * 
 * 
 * //------------------------------------------------------------------------//
 * //                           Working of API
 * //------------------------------------------------------------------------//
 * Here are some ways that APIs work:
 * SOAP APIs: Use XML (Extensible Markup Language) to encode messages. SOAP APIs are designed to be extensible and neutral, for building web services that are interoperable between different programming languages and platforms. 
 * RPC APIs: Also known as Remote Procedure Calls, these APIs allow the client to complete a function on the server, and the server sends the output back to the client. 
 * Websocket APIs: Use JSON objects to pass data.
 * 
 * 
 * //------------------------------------------------------------------------//
 * //                           Types of API
 * //------------------------------------------------------------------------//
 * There are several types of APIs, including:
 * Public APIs:
 *  Also known as open APIs, these are published for general use, allowing anyone to request data from companies that use them. They are a key component of mobile apps and are used to integrate with major services for websites. 
 * Partner APIs:
 *  These APIs often provide access to sensitive data, such as customer data or medical data, and are characterized by strong security features. 
 * Internal APIs:
 *  These APIs are used to connect systems and data within a business, such as payroll and HR systems. They are considered secure, efficient, and traceable. 
 * Composite APIs:
 *  These APIs combine multiple API requests into one API call, which can save on data usage and make apps more efficient. 
 * REST APIs:
 *  This is a popular API architecture used to design client-server applications. It's not a protocol or standard, so developers have flexibility in how they implement it. 
 * SOAP APIs:
 *  This API architecture uses XML format to transfer data and has a tighter security structure. It's more difficult to configure than REST APIs. 
 * JSON-RPC:
 *  This is a lightweight protocol that allows remote procedure calls. It uses simple syntax to invoke procedures or methods on a server.
 * GraphQL:
 * for more type search for: APIs Types
 * 
 * and kuch APIs 2 languages ke bich me baat karane ke liye bhiuse hoti hai, like V8 engine C++ se bana hai means JS ke backend me C++ hai so JS bhi C++ se kuch APIs ke through baat karegi.
 */


/**  ye XHR old technique hai abhi fetch() ka use hota hai.
 * //------------------------------------------------------------------------//
 * //                          XMLHttpRequest()
 * //------------------------------------------------------------------------//
 * pehle kya hota tha ki log "XMLHttpRequest()" object ka use kart the and nowadays mostly sab "fetch()" use karne lage hai.
 * so is lecture me ham "XMLHttpRequest()" means XHR ke baare me thodi information lenge.
 * 
 * XHR means XMLHttpRequest, to isme se hum Http and Request ke baare me jante hai so XML ke baare me thodi knowledge lete hai,
 * form : https://www.w3schools.com/xml/xml_whatis.asp
 *      : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 * 
 * 
 * //------------------------------------------------------------------------//
 * //                     object of XMLHttpRequest()
 * //------------------------------------------------------------------------//
// // XHR ka sabe pehle ek object banana padta hai
// const xhr = new XMLHttpRequest() 
// // now ye object ki different-different methods ka use karke ham request send, receive kar skte hai.

 * //------------------------------------------------------------------------//
 * //                      method of XMLHttpRequest()
 * //------------------------------------------------------------------------//
 * // below sab "xhr" object jo hane banaya hai na uski means instance ki methods hai.
 * The primary methods used in an XMLHttpRequest (XHR) request are: 
 * "open()" to configure the request details like the HTTP method and URL, and 
 * "send()" to initiate the request and send data to the server; other important methods include 
 * "setRequestHeader()" to add custom headers to the request and various event listeners to handle different stages of the request lifecycle.
 * 
 * Key points about XHR methods:
 *  "open(method, url, async, username, password)":
 *      method: The HTTP method like "GET", "POST", "PUT", "DELETE". 
 *      url: The target server URL. 
 *      async: Boolean indicating whether the request is asynchronous (true) or synchronous (false). 
 *      username (optional): Username for authentication. 
 *      password (optional): Password for authentication. 
 *  "send(data)": 
 *      Sends the request to the server. 
 *      data: Optional data to be sent with the request, usually used for POST requests. 
 *  "setRequestHeader(headerName, headerValue)": 
 *      Sets a custom HTTP header for the request.
 * 
 * 
 * Important XHR events:
 *  "onload": Fired when the request is successful and the response is ready.
 *  "onerror": Fired when there is an error during the request.
 *  "onprogress": Fired periodically as the request progresses.
 */


/**
 * //------------------------------------------------------------------------//
 * //                             readyState
 * //------------------------------------------------------------------------//
 * 
 * The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:
 * ab ye jo request karna or data ke len-den ye sab state ke through hota hai
 * more for info: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
 * abi ke liye bas itna hi dhyan me rakh lo,
 * |-------------------------------------------------------------------------------------------------------|
 * |    Value   |  State	           |  Description                                                      |
 * |-------------------------------------------------------------------------------------------------------|
 * |     0	    |  UNSENT	           |  Client has been created. open() not called yet.                  |
 * |     1	    |  OPENED	           |  open() has been called.                                          |
 * |     2	    |  HEADERS_RECEIVED    |  send() has been called, and headers and status are available.    |
 * |     3	    |  LOADING	           |  Downloading; responseText holds partial data.                    |
 * |     4	    |  DONE	               |  The operation is complete.                                       |
 * |-------------------------------------------------------------------------------------------------------|
 * 
 * interface XMLHttpRequest
 *         var XMLHttpRequest: {
 *             new (): XMLHttpRequest;
 *             prototype: XMLHttpRequest;
 *             readonly UNSENT: 0;
 *             readonly OPENED: 1;
 *             readonly HEADERS_RECEIVED: 2;
 *             readonly LOADING: 3;
 *             readonly DONE: 4;
 *         } 
*/

//------------------------------------------------------------------------------------------------------//
//                               The main and importan thig of XHR
//------------------------------------------------------------------------------------------------------//
// Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.


// hum ye jo XML ki request send kar rahe hai usse AJAX request kehte hai but ye jyada kaam me nahi lenge only for knowlege ke liye hai.

//------------------------------------------------------------------------------------------------------------//
//                          sending XHR request and getting the data from that API
//------------------------------------------------------------------------------------------------------------//
// // ab ek XHR request send karke usse bata mangvate hai and uska use kuch create karne ke liye karte hai

// // request send karne ke liye XMLHttpRequest class mese ek object banana padta hai,
// const xhr = new XMLHttpRequest()


//----------------------------------------------------------//
//                 Instance method: open()
//----------------------------------------------------------//
// // ab ye object me "open()" method hota hai jo ki actually me request send karta hai ye wrong likha tha i think vo actually me communication initialize karta hai. 
// // The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.
// // ye "open()" method me 2 parameter hote hai,
// //      first parameter me method batana padta hai means kis type ki request bhejna chahte hai, it can be "GET", "POST", "PUT", "DELETE".
// //      second parameter me "URL" batana hota hai. ya fir esi "string" deni padti hai jisme 'URL' store kar rakhi ho.

// const requestURL = 'https://api.github.com/users/hiteshchoudhary'
// xhr.open('GET', requestURL)

// // so yaha per connection initialize ho gaya hai aage kaa kaam vo jo table upper hai uke hisab se hoga.


//----------------------------------------------------------//
//                 Instance method: send()
//----------------------------------------------------------//
// // ab hame "send()" method ko call karna padega jo ki actually me request bhejegi. and hame ye batayegi ki headers and status available hai.
// // ab ye sab jo process chal rahi hai uska pata hame "readyState" ke bheje gaye number means "state value" se pata chalta tha lekin, ab new method "fetch()" me vo band ho gaya hai ab only "state" se kaam chal jata hai.

// //The XMLHttpRequest method send() sends the request to the server.
// // If the request is asynchronous (which is the default), this method returns as soon as the request is sent and the result is delivered using events. If the request is synchronous, this method doesn't return until the response has arrived.
// // for more info: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send
// // so ab "send()" call karte hai,
// xhr.send()



// so ab tak hame open() and send() dekh liya jisse hame pata chala ki request initialized huyi and send kar di gayi but state kese change hua and response aaya ki nahi ye ham kese pata karenge?

// // to changing state ko notice karne ke liye hamerw paas "readyState" property hai na us se pata chal jayega.
// //to usek liye code kuch esa hoga,
// const xhr = new XMLHttpRequest()
// const requestURL = 'https://api.github.com/users/hiteshchoudhary'
// xhr.open('GET', requestURL)
// console.log(xhr.readyState); // output : 1
// xhr.send()
// console.log(xhr.readyState); // output : 1
// // yaha per hame output 1 hi mil raha hai but state to continuously change ho raha hai to hame baaki ke bhi state values milni chahiye thi, so ye problem iss liye ho rahi hai kyoki ham jab state change ho raha hai usse continuously track nahi kar rahe.

//----------------------------------------------------------//
//                 Event: readystatechange
//----------------------------------------------------------//

// so continuously state tracking ke liye ek event use hota hai, jo hai "onreadystatechange" and if ham isse "addEventListener()" ke andar likhe to only "readystatechange" hi likhna padega.

// "onreadystatechange" jab normally likhte hai tab iske function ke jaise likhna padta hai ab if eventListener ke andar likhe to eventListener ke and jo callback function hota hai usske kaam chal jata hai, same as jaise "onclick" ko HTML ke andar likh kar uski body "script" tag ya fir JS file me likhni padti hai but jab addEventListener() ke andar likhte hai tab callback function se kaam ho jata hai.
// onreadystatechange only JS me hi nahi hai but "AppWrite", "FireBase" jaise tools me bhi hote hai.
// and "readystatechange" jese or bhi event hai but vo baad me padna jab koi jarurat pade tab.
// vo sab events, instace methods, Instance properties yaha mil jayengi : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// // so now let's come to ou topic hame continuously state tracking karni hai, to uske liye code me thoda change aayega,

// const xhr = new XMLHttpRequest()
// const requestURL = 'https://api.github.com/users/hiteshchoudhary'
// console.log(xhr.readyState)
// xhr.open('GET', requestURL)
// console.log(xhr.readyState)
// xhr.onreadystatechange = function() { 
//     console.log(xhr.readyState); // now yaha par thoda dhyan dena ki iska jo output mil raha hai hame vo pehel state value: 2, then state value:3, then state value: 4 continuously mil gaya jese ki koi loop chal gayi ho but dekhen ki baat ye hai hame to kahi loop likhi hi nahi.
//     // to yaha jo loop jaisa kuch chal gaya vo actually me "EventLoop" tha jo ki "asynchronous programming" ka part hai to ye uski ek jhalak dikha raha hai ki page reload nahi hua but only page ka ek part ek hissa load hota gaya and values chage ho gayi.
//     // and hame statevalue: 2 se isliye mile kyoki open() ke baad statevalue: 1 mili hogi but hame vaha koi console.log likha hi nahi hai so if you want to check then write console.log after xhr.open() and if you want to see statevalue: 0 then put a console.log before xhr.open().
// }
// xhr.send()


//----------------------------------------------------------//
//                 got the data
//----------------------------------------------------------//
// // so ab yaha tak hamne request initialization, sending and state continuously kese change ho raha hai ye dekh liya 
// // and hamne ye bhi dekh ke last me statevalue: 4 mil rahi hai, jiska mtlb hua ki hame API se data mil raha hai.

// // so data nikalne ke liye and we can say that datamine kane ke liye ek Instance property "responceText" ka use kar skte hai. bas hame usse current context batana padega ki kis object means instance ka data chahiye hai, and current context ki baat aayi means hame "this" keyword ka use karna padega.

// // so let's write the code again,
// const xhr = new XMLHttpRequest()
// const requestURL = 'https://api.github.com/users/hiteshchoudhary'
// xhr.open('GET', requestURL)
// xhr.onreadystatechange = function(){
//     // if (xhr.readyState === 4) {
//     //     console.log(xhr.responseText);
//     // }
//     if (this.readyState === 4) {
//         console.log(this.responseText);
//     }
//     // both code working properly same and good.
// }
// xhr.send()
// so ab itna code likh kar hame "https://api.github.com/users/hiteshchoudhary" iss API ka data mil rha hai


//----------------------------------------------------------//
//             Extracting the meaning full data
//----------------------------------------------------------//
// now hame jo data mil hara 

// const xhr = new XMLHttpRequest()
// const requestURL = 'https://api.github.com/users/hiteshchoudhary'
// xhr.open('GET', requestURL)
// xhr.onreadystatechange = function(){
//     if (this.readyState === 4) {
//         const data = this.responseText
//         console.log(data.followers); // this giving output: undefined 
//     }
// }
// xhr.send()

// now yaha per hame "undefined" issliye mil raha hai kyoki hame jo "this.responseText" mila hai uska type string hai & ham uss string ko JS ka object smj kar usme se "followers" nikal rahe hai jo ki possible nahi hai.
// kyoki yaha per hame string ki format me data mila hai so usko ham pehle JSON format me convert karenge then usme se data extract karenge.

// const xhr = new XMLHttpRequest()
// const requestURL = 'https://api.github.com/users/hiteshchoudhary'
// xhr.open('GET', requestURL)
// xhr.onreadystatechange = function(){
//     if (this.readyState === 4) {
//         const data = JSON.parse(this.responseText)
//         console.log(data.name); // this giving output: Hitesh Choudhary
//     }
// }
// xhr.send()
// so problem solved.



document.getElementById('stop').addEventListener('click', function() {
    document.querySelector('div').innerHTML = "Main API Sheekh Li &#128513; &#128516; &#128522; &#128521; &#128526;"
    document.querySelector('div').style.fontSize = '30px'
}, false)