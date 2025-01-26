// in this document:
// call

//-------------------------------------------------------------------------------------------------------//
//                                            call
//-------------------------------------------------------------------------------------------------------//
// call samjhne se pehle ek problem samjhte hai.

// function setUsername(username){
//     this.username = username
// }

// function createUser(username, email, password){
//     setUsername(username)

//     // yaha per hamne only 2 varibale le kar unki value set karva di hai. lekin username set karne ke liye "setUsername" ka user karte hai. joki ham upper likhenge.
//     this.email = email
//     this.password = password
// }

// const userOne = new createUser('manav', 'abc@gmail.com', '123') // yaha per bhi if dhyan se dekha jaye to hamne ek object hi banaya hai object cunstructor ka use karke. and usse hamne achhe se banaya hai "new" ka use karke.
// // to chalo dekhte hai usme kya hai

// console.log(userOne) // output: createUser { email: 'abc@gmail.com', password: '123' }
// // output hame mil to raha hai but usme "username" nahi hai lekin vo hamne pass kiya tha fir bhi nahi aaya. so kahi kuch dikkat ho gayi hai.
// // output dekh ke hame pata chalta hai ki "createUser" ki property to sahi se work kar rahi hai but ab question ye hai ki hamne usme jo "setUsername" call kiya hai vo call bhi ho raha hai ya nhi and if call ho raha hai work kyu nahi kar raha else call hi nahi ho raha hai to call kyu bahi ho raha hai.

//----------------------------------------------------------------------//
// ek console.log dal dete hai iss function me and dekhte hai ki call ho raha hai ki nahi,
// function setUsername(username){
//     this.username = username
//     console.log('haa! me call ho raha hu!');
    
// }

// function createUser(username, email, password){
//     setUsername(username)

//     this.email = email
//     this.password = password
// }

// const userOne = new createUser('manav', 'abc@gmail.com', '123')
// console.log(userOne) // ye run karne par hame pata chal raha hai ki ye call ho raha but value set nahi kar paa raha hai.
// // so ye problem iss liye aa rahi hai kyo ki if ham kisi function ke andar dusre function ko call karte hai to uska only reference hi pass hota hai. ye to ham jante hi hai.
// // but yaha per jab "setUsername" call ho raha hai to usme value "manav" pass ho raha hai and vo uske means "setUsername" ke username me store ho raha then jab "setUsername" ka kaam done ho jata hai tab uska execution contex call stack se hat jata hai so "setUsername" ke "username" me store "manava" bhi memory se free ho jata hai. 
// // so iss tarah vo "manav" "createUser" ke username me kabhi assign ho hi nahi raha hai.
// // esa isliye ho raha hai kyuki "setUsername", "createUser" ka "username" access hi nahi kar pa raha hai. vo jo "manav" usse mil raha hai usse khud ke username me assign kar raha hai jo ki baad me executio karne clean bhi ho jaa raha hai memory se.
// // to "createUser" ke username ka access dene ke liye hame "call()" ka use karna padega. 
// // call() ka use "setUsername" reference ke baad karna padega and iss call() me hame "username" ke sath first argument me "this" ko pass karna padega jo ki "setUsernname" ke "this" ke place par set ho jayega and usko "createUser" ke username ka access de dega.
// // so ab jab bhi usrname me koi value pass hogi vo direct "createUser" ka username me hi store hogi and "setUsername" ke execution contex khatan hone ke baad bhi nahi hategi.

// extra info: yaha setUsername ka this hai vo may be global execution contex ko point karta hai.

//---------------------------------------------------------//
// so final solution:

function setUsername(username){
    this.username = username
    console.log('haa! me call ho raha hu!');
    
}

function createUser(username, email, password){
    setUsername.call(this, username) // now ye this "setUsername" ke this ke place per set ho jayega internally and "createUser" ke username ko point karega. and kaam ho jayega apna.
    // yaha per ek or baat dhyan rakhna ki only call() se kaam nhi chalega uske andar "this" ko bhi pass karna padega.
    // ye call() execution ko hold karke rakhta hai, return values ko bhi store karvane me help karta hai and or bhi kaam karta hoga.
    this.email = email
    this.password = password
}

const userOne = new createUser('manav', 'abc@gmail.com', '123')
console.log(userOne)