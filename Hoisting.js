/*
HOISTING is a Javascript behavior where variable and function declarations are moved to the
top of their scopre (before code execution). This means a variable or function can be used
before it is declared without causing an error. However, this does not mean a full value is
hoisted - just the declaration.

 => only declarations are hoisted, not initialization
 => function declarations are fully hoisted

 VAR 
    var x
    console.log(x) // undefined
    x = 5
    console.log(x) // 5

LET, CONST => TEMPORAL DEAD ZONE
    console.log(y) // error
    const / let y = 10
    console.log(y) // 10

    const / let z
    console.log(z) // ReferenceError
    z = 10
    console.log(z) // 10

FUNCTION
    sayHi()

    function sayHi() { ... }

FUNCTION EXPRESSION
    console.log(sayBye) // undefined
    sayBye()            // TypeError: sayBye is not a function
    VAR sayBye = function() { ... }


    console.log(sayHello) // ReferenceError
    CONST / LET sayHello = function() { ... }
*/