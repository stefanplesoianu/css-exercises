/*
PROMISES, ASYNC, AWAIT
- asynchronous = action that starts now and finishes later
- callback = function passed as argument to another function 
        => synchronous - executed immediately after the operation, same function call stack
        => async - executer after the completion of an operation
- promise = object that represents teh eventual completion or failure of an async operation
    and its resulting value
    let promise = new Promise(function(resolve, reject) { executor })
    state => pending (fulfilled(val) / failure(error))
    consumers => then, catch
    - the promise links executors to consumers
    finally => does generic cleanup regardless of resolve / reject
- only one resolve / reject per promise
- CATCH handles errors in all sorts of promises
- can also use THEN to catch some errors then throw unhandleable ones to the CATCH
- all synchronous errors are handled
e.g. new Promise(function(resolve, reject) {
            setTimeout(() => { throw new Error }, 1000)    
        }).catch(console.log(...))
        CATCH WILL NOT TRIGGER, ONLY SYNCHRONOUS ERRORS CAN BE CAUGHT
- METHODS: 
    Promise.all()
            let urls = [....]
            let requests = urls.map(url => fetch(url))
            Promise.all(requests).then(response => response.forEach ...)
            - rejects everything at first error
    Promise.allSettled() => returns [{ status: 'fulfilled', value..., response...},
                                    { status: 'rejected', value..., response...}]
    Promise.race() => returns first promise to be fulfilled / rejected
    Promise.any() => only waits for the first primise to be fulfilled
- PROMISIFICATION = conversion of a function that takes a callback into one that returns a promise

EVENT LOOP: MACROTASKS, MICROTASKS, PROMISE QUEUE
        1. call stack
        2. microtasks / promise queue / promise callback
        3. timer queue, timer callbacks

        4 steps it keeps repeating : dequeue oldest task from macrotask /
                                     execute microtasks /
                                     render changes if any /
                                     wait until it repeats task 1

The Role of the Event Loop
Web APIs: When asynchronous functions (like setTimeout, fetch, or event listeners) are called, 
they are handed off to the browser’s Web APIs. These APIs handle the operations while the main 
JavaScript thread continues executing.

Callback Queue: Once an asynchronous operation completes, its callback function is placed in the 
callback queue (or task queue).

Event Loop Mechanism: The event loop constantly checks the call stack and the callback queue:

If the call stack is empty (meaning all synchronous code has finished executing), the event loop takes 
the first callback from the callback queue and pushes it onto the call stack.
This process continues, allowing JavaScript to process asynchronous operations seamlessly without 
blocking the main thread.

ASYNC / AWAIT 
- async => returns promise 
- await => ensures the promise settles before the result is returned 
- async()  { let result = await Promise.all([ ... ]) }
- makes async code look and behave more like synchronous code; easire to understand and debug
- helps avoid the complexity of chaining promises and potential callback hell

THEN VS ASYNC/AWAIT
- THEN - better for simpler promises ; also does not block the event loop, or chains or promises
- ASYNC/AWAIT - largely preferred, good for all other scenarios, better error handling

TRY / CATCH + ASYNC / AWAIT
- good for API calls, or multiple async operations under the same error handler
- can also use TRY/CATCH with old school promises
- can also combine try/catch with catch()
async function fetchData() {
    try {
        await fetch('https://api.example.com/data')
            .then(response => response.json())
            .catch(err => { throw new Error('Error in .then(): ' + err) }); // local catch
    } catch (error) {
        console.error('Caught in outer try/catch:', error); // outer catch
    }
}

fetchData() 


Callbacks: Initially used to handle asynchronous code, but can lead to callback hell, poor error 
    handling, and inversion of control issues.
Promises: Introduced to handle asynchronous operations in a more manageable way, with support for 
    chaining, better error handling, and greater control.
Callbacks in Promises: Some older APIs still rely on callbacks, but you can wrap these in promises 
    for better handling.
Async/Await: Further simplifies the handling of promises by allowing asynchronous code to be written 
    in a more synchronous style.
*/ 