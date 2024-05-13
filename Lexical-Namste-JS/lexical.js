// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         },i * 1000)
//     }
// }

// x();
// var counter = 0;

// var c = counter++;
// console.log(c);

// c = ++counter;
// console.log(c);

// function currying
// turn f(a, b, c) into f(a)(b)(c)

function curry(func){
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args);
        }
        else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(6)(5)(6));