/** in this document
 * addEventListener('event', function(eventObject), true/false)
 * event propagation
 * event bubbling & event capturing
 * stopPropagation()
 */

// event must learn
// event types, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// for interview perspective: clientX, clientY, screenX, screenY
// to identify if specific key pressed or not : altkey, ctrlKey, shiftKey, keyCode



//----------------------------------------------------------------------------------//
//           addEventListener('event', function(eventObject), true/false)
//----------------------------------------------------------------------------------//
// attechEvent() and jQuery - on ,, ye dono tarike se old time me event use karte the

// event 2 type ke hote hai browser and environment event.

//----------------------------------------------------------------------------------//
//                                event propagation
//----------------------------------------------------------------------------------//
/*
// There are two ways of event propagation in the HTML DOM, bubbling and capturing.
=> Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, 
    and the user clicks on the <p> element, which element's "click" event should be handled first?
*/


//----------------------------------------------------------------------------------//
//                      event bubbling & event capturing
//----------------------------------------------------------------------------------//
// take reference of example in event propagetion,
// event bubbling: In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
// event capturing: In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.



//           addEventListener('event', function(eventObject), true/false)
/*
  => yaha third parameter me true/false event bubbling and event capturing ke liye hota hai.
  => by default ye false hi hota hai joki event bubbling ko enable karta hai and event capturing ko disable.
    BUT if ham use true kare,
  => to event bubbling disable ho jayega and event capturing enable ho jayega.
*/

/*  example: [try this example in ]
<style>
#myDiv1, #myDiv2 {
  background-color: coral;
  padding: 50px;
}

#myP1, #myP2 {
  background-color: white; 
  font-size: 20px;
  border: 1px solid;
  padding: 20px;
}
</style>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
</head>
<body>

<h2>JavaScript addEventListener()</h2>

<div id="myDiv1">
  <h2>Bubbling:</h2>
  <p id="myP1">Click me!</p>
</div><br>

<div id="myDiv2">
  <h2>Capturing:</h2>
  <p id="myP2">Click me!</p>
</div>

<script>
document.getElementById("myP1").addEventListener("click", function() {
  alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
  alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, true);
<script>
</body>
*/

//----------------------------------------------------------------------------------//
//                                stopPropagation()
//----------------------------------------------------------------------------------//

// used to stop propagation in DOM