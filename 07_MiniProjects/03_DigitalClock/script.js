const clock = document.getElementById('clock')


setInterval(function() {
    let myDate = new Date()
    clock.innerHTML = myDate.toLocaleTimeString(); // output : 2:33:23 PM
    // clock.innerHTML = myDate.toLocaleString(); // output : 10/29/2024, 2:32:21 PM
    // clock.innerHTML = myDate.toISOString(); // output : 2024-10-29T09:01:32.415Z
    // clock.innerHTML = myDate.toUTCString(); // output : Tue, 29 Oct 2024 09:01:49 GMT
},1000);


// setInterval(displayHello,1000);

// function displayHello() {
//     let myDate = new Date()
//     clock.innerHTML = myDate.toLocaleTimeString();
// }