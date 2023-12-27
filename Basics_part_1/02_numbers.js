
// explore JS Number Methods <=> https://www.w3schools.com/js/js_number_methods.asp
// explore JS Number Reference <=> https://www.w3schools.com/jsref/jsref_obj_number.asp

// toString() => Returns a number as a string
// toExponential() => Returns a number written in exponential notation
// toFixed() => Returns a number written with a number of decimals
// toPrecision() => Returns a number written with a specified length
// toLocaleString() => returns a number as a string, using local language format.
// ValueOf() => Returns a number as a number


// const num=10
// const bal= new Number(499)

// console.log(num);
// console.log(bal);


// toString() => Returns a number as a string
const num2 = 56
let num3 = toString(58)
// console.log(typeof num3); // O/P => string

num3 = new Number(500)
// console.log(typeof num3); // O/P => object
// console.log(num3.toString().length);
// console.log(num3.toFixed(3));


const num4 = 232.05892

// toFixed() => Returns a number written with a number of decimals
// console.log(num4.toFixed(2)); // O/P => 232.06
// console.log(num4.toFixed(3)); // O/P => 232.059

// toPrecision() => Returns a number written with a specified length
// console.log(num4.toPrecision(2)); // O/P => 2.3e+2
// console.log(num4.toPrecision(3)); // O/P => 232
// console.log(num4.toPrecision(4)); // O/P => 232.1
// console.log(num4.toPrecision(5)); // O/P => 232.1

// toLocaleString() => returns a number as a string, using local language format.
const num5 = 10000000

console.log(num5.toLocaleString()); // O/P => 10,000,000
console.log(num5.toLocaleString('en-IN')); // O/P => 1,00,00,000
