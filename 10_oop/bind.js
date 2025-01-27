// in this document:
// bind
// the main problem
// description of bind()
// solution of React() class problem

//----------------------------------------------------------------------------------------------------//
//                                             bind
//----------------------------------------------------------------------------------------------------//
// bind ko iss exapmle se smjhte hai, jiske liye ham reate ji ek class bana lete hai,
// class React{
//     constructor(){
//         this.library = "React"
//         this.server = "http://localhost:3000"
//     }
// }

// ab ham kya chahte hai ki jaise hi ye page loead ho vese hi iss class ka ek instance(object) create ho jaye.
// to uske liye ek instance bana lete hai,
// const app = new React()

//--------------------------------------------------------------------//
// ye to hamne object bana liya ab ham ye chahte hai ki button ka reference hame mil jaye and then uss button per click karne se kuch event ho jaye uske liye method banana hai,

// class React{
//     constructor(){
//         this.library = "React"
//         this.server = "http://localhost:3000"

//         // page load hote hi button kar reference mil jaye uske liye button ko yaha hi pkd lete hai,
//         // uske liye ham jo "document" ka use karte hai vo C++ ka hai.
//         document.querySelector('button').addEventListener('click',this.handleClick)
//         // addEventListener me first to event name then callback funciton dena padta hai but hamne to funciton bana rakha hai so uska only reference hi dena padega. lekin vo reference dene ke liye bhi "this" ka use karna padega.
//         // yaha per hamne ese bbutton liya hai na React me usse "nodeList" se select karna padta hai.
//     }

//     // so vo method bana dete hai,
//     handleClick(){
//         console.log("button clicked")
//         // console.log(this.server)
//         console.log(this)
//     }
// }

// const app = new React()
// // itna code karke hame  console.log("button licked") ka output to mil raha hai but console.log(this.server) ke output me undefined aa raha hai.
// // to check karte hai ki hame click karne par uska reference mil raha hai ki nahi and if mil raha hai to kya mil raha hai and nahi mil raha hai to kyu nahi mil raha hai.
// // console.log(this.server) ko console.log(this) me change kar dete hai.
// // console.log(this) ka output me <button>Click Here</button> mil raha hai. means buton ka reference to hame mil gaya. but React class ka nahi nahi mila.

// upper vale ka solution last me hai

//--------------------------------------------------------------------------------------------------------------------//
// yaha situation pehle jese ho gayi, jab ek funciton se dusre funciton ko reference ke through call kar rahe the but fir values ko hold nahi kar paa rahe the. means "call()" ki baat kar raha hu. vaha jis funciton se dusre funciton ko call kar rahe the, uss dusre funciton me call karvane vaale funciton ka current context hi nahi mil raha tha.
//--------------------------------------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------------------------------------------//
//                                                the main problem
//--------------------------------------------------------------------------------------------------------------------//

/**
 * now ek chij samjhte hai ki yaha par jo "this" hai vo apna reference loos kar raha hai. means "this" jisko point kar raha tha uski place par kisi or ko point kar raha hai.
 * 
 * 
 * Problem Explanation:
 * addEventListener jab callback function ko execute karta hai, tab this ka context us HTML element ke reference ki taraf hota hai jisme event trigger hua (is case me <button>).
 * Is wajah se this.server undefined return kar raha hai, kyunki this ab React class ka instance nahi raha; instead, ab ye <button> element ki taraf point kar raha hai.
 * 
 * 
 * Why does this change?
 * Jab aap this.handleClick ko directly reference ke roop me pass karte hain (this.handleClick), tab JavaScript this ka binding context khud decide karta hai.
 * DOM event listeners me, default behavior ye hota hai ki this event ko trigger karne wale element (jaise <button>) ki taraf point kare.
 * 
 * 
 * Solution:
 * Aapko this ka context manually preserve karna hoga. jiske liye kuch options hain:
 * 
 * 1. Use bind() in Constructor:
 * handleClick method ko explicitly this ke sath bind kar lein jo React class ka instance ho.
 * class React {
    constructor() {
        this.library = "React";
        this.server = "http://localhost:3000";

        // Binding `this` to the class instance
        this.handleClick = this.handleClick.bind(this);

        // Add event listener
        document.querySelector('button').addEventListener('click', this.handleClick);
    }

    handleClick() {
        console.log("button clicked");
        console.log(this.server); // This will now work
        console.log(this); // `this` now refers to the React class instance
    }
}

const app = new React();


2. Use an Arrow Function:
Arrow functions this ko lexical scope se inherit karte hain, isliye this hamesha React class ke instance ki taraf point karega.
class React {
    constructor() {
        this.library = "React";
        this.server = "http://localhost:3000";

        // Using arrow function in event listener
        document.querySelector('button').addEventListener('click', (event) => this.handleClick(event));
    }

    handleClick(event) {
        console.log("button clicked");
        console.log(this.server); // This will now work
        console.log(this); // `this` now refers to the React class instance
    }
}

const app = new React();


3. Use addEventListener with an Inline Arrow Function:
Instead of modifying the handleClick method itself, use an arrow function directly in addEventListener.
class React {
    constructor() {
        this.library = "React";
        this.server = "http://localhost:3000";

        // Using inline arrow function
        document.querySelector('button').addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        console.log("button clicked");
        console.log(this.server); // This will now work
        console.log(this); // `this` now refers to the React class instance
    }
}

const app = new React();


4. Use Class Fields Syntax (Modern Approach):
If you're using modern JavaScript (ES2022+), you can define handleClick as a class property using an arrow function.
class React {
    constructor() {
        this.library = "React";
        this.server = "http://localhost:3000";

        // Add event listener
        document.querySelector('button').addEventListener('click', this.handleClick);
    }

    // Define handleClick as a class field (arrow function)
    handleClick = () => {
        console.log("button clicked");
        console.log(this.server); // This will now work
        console.log(this); // `this` now refers to the React class instance
    };
}

const app = new React();


Summary:
Is problem ka main cause hai this ka context change hona. Aapko bind() ka use karke, arrow function ke through, ya class fields syntax ke madhyam se this ka reference preserve karna padega. Above solutions me bind() aur arrow functions dono reliable hain.

 */
// ye upper vala chaGPT ki help se likha hai

// ye me khud ki understanding ke liye likh rha hu,
/**
 * this.handleClick.bind(this);  
 *  ka matlab hai ki (yaha "this" React class ko pint kar raha hai )
 * React.handleClick ko bind() kar do React ke sath.
 * 
 * more Example:
 * const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

yaha person.fullName.bind(member); ka means hai ki person class ke fullname() funciton ko membar class ke sath bind kar do.
 */

//-------------------------------------------------------------------------------------------------------------//
//                                          description of bind()
//-------------------------------------------------------------------------------------------------------------//
// Function Borrowing
// bind() funciton borrow karne ke liye bhi use hota hai.
// With the bind() method, an object can borrow a method from another object.

/**
 * // The example below creates 2 objects (person and member).
 * // The member object borrows the fullname method from the person object:
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
 */


//-----------------------------------------------------------------------//
// Preserving this
// Sometimes the bind() method has to be used to prevent losing this.
/**
 * //   In the following example, the person object has a display method. In the display method, this refers to the person object:
 * const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

person.display();
 */


//------------------------------------------------------------------------//
// When a function is used as a callback, this is lost.
// This example will try to display the person name after 3 seconds, but it will display undefined instead:
/**
 * const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

setTimeout(person.display, 3000);
 */

// so bind() upper vali problem ko solve karta hai.


//-------------------------------------------------------------------------------------------------------------//
//
//-------------------------------------------------------------------------------------------------------------//

class React{
    constructor(){
        this.library = "React"
        this.server = "http://localhost:3000"

        document.querySelector('button').addEventListener('click',this.handleClick.bind(this)) // yaha iss line "this.handleClick.bind(this)" ka means ye hai ki React class ke handleClick funciton ko React class ke sath me jabarjasti bind() karke rakho.
    }
    
    // so vo method bana dete hai,
    handleClick(){
        console.log("button clicked")
        console.log(this.server)
        console.log(this)
    }
}

const app = new React()

/**
 * end me hame ye pata chala ki "this" reference loosse kar deta hai jab bhi callback me use hota hai, matlab upper jo hamne examples dekhe ki setTimeout and addEventListener ke callback me "this" ne reference loose kar diya tha.
 * and reference loose karke vo global object joki browser me window hota hai usse point karne lagta hai.
 * so ye rokne ke liye hamne yaha binde ka use kiya although hamare paas kuch onption aur bhi the solution ke liye. but yaha ham bind() ke baare me sikh rahe hai to usse hi use kar liya. 
 */