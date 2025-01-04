// in this document:
// JS is asynchronous or synchronous?
// Things to learn by self



//----------------------------------------------------------------------------------//
//                         JS is asynchronous or synchronous?
//----------------------------------------------------------------------------------//
/*
=> Javascript, at its core, is a synchronous, single-threaded language. This means it executes code line by line, in the order it appears, and can only do one thing at a time. If a function takes a long time to execute, it will block the execution of any code that comes after it until it finishes running. 
=> However, Javascript also has mechanisms that allow it to behave asynchronously. This is important because some operations, like fetching data from a server or setting a timer, can take a long time to complete. If Javascript were purely synchronous, these operations would freeze the entire program until they finished.
=> To handle these situations, Javascript uses:
    Callbacks:
        Functions that are passed as arguments to other functions and are executed when the first function completes.
    Promises:
        Objects that represent the eventual result of an asynchronous operation. They allow you to write cleaner code than callbacks, especially when dealing with multiple asynchronous operations.
    Async/await:
        Syntax that makes asynchronous code look and behave more like synchronous code. It's built on top of promises and makes it easier to read and write asynchronous code.
=> These mechanisms allow Javascript to perform non-blocking operations. When an asynchronous operation is started, the Javascript engine doesn't wait for it to complete. Instead, it continues executing the rest of the code. When the asynchronous operation finishes, its callback function is added to a queue, and the Javascript engine will execute it when it has finished executing the current code.
=> It's important to note that even with these mechanisms, Javascript is still single-threaded. It doesn't create new threads to handle asynchronous operations. Instead, it uses an event loop to manage them. The event loop constantly checks the queue for new tasks and executes them when it's their turn.
=> In summary, Javascript is synchronous by nature, but it uses asynchronous programming techniques to handle long-running operations without blocking the main thread. This allows it to be responsive and efficient, even when dealing with complex tasks. 
*/

//----------------------------------------------------------------------------------//
//                              Things to learn by self
//----------------------------------------------------------------------------------//

// what is Execution Contex
// what is JS Engine, inside of JS Engine
// what is Event Loop, task queue, priority queue.
// setTimeout & clearTimeout
// setInterval & clearInterval