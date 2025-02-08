// function calling ki understanding
function square(number){
    return number*number;
}

function callingSquare(number){
    let square = square(number) // this will give error: ReferenceError: Cannot access 'square' before initialization
    return square
} // this function not working because we use square() inside it. and it don't have access to call that.

// function callingSquare(number, callbackReference){
//     // let square = square(number) // this will give error: ReferenceError: Cannot access 'square' before initialization
//     let square = callbackReference(number) // works fine
//     return square
// }

const number = callingSquare(5, square)
console.log(number);

// check karo yaha funciton calling sahi se hogi ki nahi