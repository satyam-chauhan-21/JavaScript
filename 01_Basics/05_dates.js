// Explore JS Dates Methods => https://www.w3schools.com/js/js_dates.asp

// let myDate = new Date() //here myDate is a variable or instance of Dateobj

// console.log(typeof myDate); // O/P => object
// console.log(typeof Date()); // O/P => string
// console.log(myDate); // O/P => 2023-11-01T08:05:40.575Z
// console.log(myDate); // O/P => Wed Nov 01 2023 13:36:51 GMT+0530 (India Standard Time)
// console.log(myDate.toString()); // O/P => Wed Nov 01 2023 13:44:27 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // O/P => Wed Nov 01 2023
// console.log(myDate.toISOString()); // O/P => 2023-11-01T08:23:04.194Z
// console.log(myDate.toJSON()); // O/P => 2023-11-01T08:23:04.194Z
// console.log(myDate.toLocaleString()); // O/P => 11/1/2023, 1:53:04 PM
// console.log(myDate.toLocaleDateString()); // O/P => 11/1/2023 (MM/DD/YYYY)
// console.log(myDate.toLocaleTimeString()); // O/P => 1:53:04 PM

// let createdDate = new Date(2023) //here createdDate is a variable or instance of Dateobj
// console.log(createdDate); // O/P => 1970-01-01T00:00:02.023Z


// let createdDate = new Date(2023, 0 , 23) // O/P => 2023-01-22T18:30:00.000Z
// console.log(createdDate); // dont use this without toDateString()
/* 
here in my pc i think third parameter of date( ,y,x) is actually printing x-1 & y+1
for example if I give date(2023, 0 , 23) so it gives O/P "2023-01-22" 
and 
if I put zero(0) in third parameter date(2023, 0 , 0) it gives O/P "2022-12-30"
BUT
if I set code like this console.log(createdDate.toDateString()); then it gives as it is as 
I write in parameter => O/P "Mon Jan 23 2023"
*/
// console.log(createdDate.toDateString());

/*
but i write this
let createdDate = new Date(2023, 0 , 23)
console.log(createdDate); // wihtout using toDateString()
in a FOR Loop with string interpoletion method it gives right Output.
*/
// for (let i = 0; i < 32; i++) {
//     createdDate = new Date(2023, 0 , i)
//     // console.log(createdDate); // dont use this without toDateString()
//     console.log(`for ${i} date is ${createdDate}`);
// }

/* We can add more parameters in Date(YYYY,MM,DD,x,x,x) and its treated as time in following formate
    Date(YYYY,MM,DD,HH,mm,ss) 
    HH => hours
    mm => minutes
    ss => seconds
and if we want to print that so we have to use 
            console.log(createdDate.toLocaleString()) //here createdDate is a variable or instance of Dateobj 
instead of  console.log(createdDate.toDateString())
*/

// let newDate1 = new Date(2023,10,23,5,3,58)
// console.log(newDate1.toLocaleString()); // O/P => 11(MM)/23(DD)/2023(YYYY), 5(HH):03(mm):58(ss) AM

// let newdate2 = new Date("2023-01-16")
// console.log(newdate2.toLocaleString()); // O/P => 1(MM)/16(DD)/2023(YYYY), 5:30:00 AM

// newdate2 = new Date("01-16-2023")
// console.log(newdate2.toLocaleString()); // O/P => 1(MM)/16(DD)/2023(YYYY), 12:00:00 AM

// let myTimeStamp = Date.now() // gives a value in milisecond
// console.log(myTimeStamp); // O/P => 1698836962323 // its a milisecond value

/* by using gatTime() we can get Date in milisecond format 
and compare it with above variable */
// console.log(newdate2.getTime()); 

/* if we want milisecond value in second so we have to divide it by 1000
   and then we get value in second
*/
// let myTimeStamp2 = Date.now() // gives a value in milisecond
// console.log(myTimeStamp2 / 1000);
// console.log(Math.floor(Date.now()/1000));

// let newDate3 = new Date()
// console.log(newDate3.getTime());
// console.log(newDate3.getHours());
// console.log(newDate3.getMonth()); // gives array month
// console.log(newDate3.getMonth() + 1); // add 1 for getting real month
// console.log(newDate3.getDate());
// console.log(newDate3.getFullYear());

/* 
 i don't understand this code or method so I'll try to understand That later 
let newdate4 = new Date()

newdate4.toLocaleString('default',{
    weekday:"long"
})

console.log(newdate4.toLocaleDateString());
*/


/*
Measuring time elapsed:
You can use Date.now() to get the current time in milliseconds, then subtract a previous time to find out how much time elapsed between the two calls.

const start = Date.now();
doSomeLongRunningProcess();
console.log(`Time elapsed: ${Date.now() - start} ms`);
*/