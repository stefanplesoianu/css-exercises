/*

- parameter = variabe listed in the paranthesis in the function declaration
- argument = value passed to the function when called
- a function is a value representing an action

function showOK() { alert('you agreed') }
function cancel() { alert('you cancelled') }

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no()    
}

ask("do you agree?", showOK, showCancel)

in the case above, showOK and showCancel are called callbacks

1) function declaration : 
                - declares a function with a specific name ; 
                - can be called at any point in the code if hoisted (even before the declaration)
                - typically standalone functions
                - functions must have a name
                function Name()
                function functionName(parameters) { ... }

2) function expression : 
                - creates a function and assigns it to a variable
                - these cannot be hoisted, so they can only be called once defined
                - often used for when you want to pass them as callbacks
                - function does not need a name
                const greet = function() { ... }  // the function assigned to greet is anonymous
                greet()
- good for brevity ; used in callbacks (map(), filter(), etc)
- also used as event handlers, or a single-use functions

3) NFE (named function expression)
- benefits : recursive, avoids collision with outer names, event handling
- an NFE is a function expression that has a name. can be used within the function's own scope
- not accessible outside of the function
        let factorial = function fact(n) { ...(see example below) }
        
- more flexible than anonymous FUNCTION EXPRESSION; used for recursion, debugging, stack traces


- RECURSION  = a function that calls itself
- e.g. pow => function (x,n) { if(n == 1) return x
                                else return x * pow(x, n-1) }
- there is a limit to how many recursive calls can be made
- eats up more memory than loops
- good for RECURSIVE TRAVERSAL ; linked lists
        linked list: let list = { value: 1 }
                     list.next = { value: 2 }
                     list.next.next = { value: 3 }
        to prepend a value : list = { value: 'new item', next: list }
        to remove value from middle : list.next = list.next.next
    print all values: while(list) { print(list.value), list = list.next }


*/