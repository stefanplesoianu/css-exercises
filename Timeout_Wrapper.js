/*
TIMEOUT / INTERVALS
 function sayHi(phrase, who) { alert phrase + who }
 setTimeout(sayHi, 1000, 'Hello', 'John') // sayHi, not sayHi! needs a reference to a function, not call it
 setTimeout(() => alert('Hello'), 1000)
 setTimeout(() => doSth, delay)  // doSth retains its lexical scope, does not lose THIS
 setTimeout(doSth, delay)  // doSth loses THIS, needs to be rebound (doSth.bind(initialTHIS))

 let timer = setTimeout(function tick() {
               alert('tick')
               timer = setTimeout(tick, 2000)
             }, 2000)

WRAPPERS / FORWARDING / DECORATING = techniquesused to enhance / modify behavior of function/objects
- wrapper = a function that wraps around another function
- decorator = a wrapper that alters a functions behavior
    let worker = {
                    someMethod() { return ... }

                    slow(x) { return x * this.someMethod }
                }
    function Add(x, y) { return x + y }
    const Logger = function(func) { return function(x, y) {
                                          console.log(x, y)
                                          return func(x, y)
                                    }}
            Add = Logger(Add)
- func.call(context, ...args) // allows iterable args   // gree.call(person)
- func.apply(context, args)  // only array-like args    // greet.apply(person, ['hi'])

=> WRAPPING 
  function original Function(a,b) { return a + b }
  function wrapperFunction(...args) { 
      console.log(args)
      const result = originalFunction(...args)
      return result
  }
      wrapperFunction(3,4)
=> FORWARDING
  function originalFunction(a,b) { return a+b }
  function forwarder(a,b) { return originalFunction(a * 2, b * 2) }
=> DECORATING 
  function add(a, b) { return a + b }
  function loggingDecorator(func) {
    return function(...args) {
      console.log('fmm')
      return func(...args)
    }
  }
  const decoratedAdd = loggingDecorator(add)

- all decorators are wrappers, but not all wrappers are decorators
*/