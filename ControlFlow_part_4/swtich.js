// in this file I've learn about Switch statement.

//------------------------------------------------------------//
//                      Switch Statement
//------------------------------------------------------------//
// const month = 2;
// const month = 4;
const month = 6;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log(`Month ${month} does not match.`);
        break;
}