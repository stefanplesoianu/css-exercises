/*
CLOSURE = function that remembers the outer variables and can access them (almost all functions in JS)
        = a function created in another function remembers the environment in which it was created
        including outer variables
- lexical environment : all global variables can be used anywhere
                        inner environments cannot be accessed from the outside
    e.g.  let name = 'John'
          function x() { alert name }  / will alert Pete
          name = 'Pete'  
- a function will look to use its lexical variables first, then look outside if needed

        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        function createGreater(nr){
                return function(x){
                        return x > nr
                }
        }

        const isGreaterThan5 = createGreater(5)

        function multiplicator(nr){
                return function(x){
                        return x * nr
                }
        }

        const multiplyBy2 = multiplicator(2)

        const result = filterAndTransform(array, isGreaterThan5, multiplyBy2);

        function filterAndTransform(arr, func1, func2){
                return arr.filter(func1).map(func2)
        }

- VAR / LET / CONST
    SCOPE : -VAR = function-scoped; it is visible throughout the entire function in which it's declared.
                    If declared outside of any function, it's global.
            -LET = block-scoped; only accessible within its block ({})
            -CONST = also block-scoped
    HOISTING: VAR - hoisted to the top of their scope. Can be used before declaration, but has to
                    be declared somewhere down below, else it is undefined
              LET - not accessible before the line where it is declared
              CONST - temporal dead-zone, exactly like LET
    REASSIGNMENT / REDECLARATION: VAR - can reassign and redeclare within the same scope
                                  LET - can reassign, but cannot redeclare within the same scope
                                  CONST - cannot be reassigned, cannot be redeclared

    e.g. function functionScope() { if(true) { var x = 10, let y = 10, const z = 10 }
                                console.log  // x = 10, y, z = undefined            
                            }
         function blockScope() { let b = 1 ,  
                                if(true) { let b = 2, console.log(b) // outputs 2 }
                                console.log(b) // outputs 1
                                } 
                                
ANOTHER EXAMPLE    
        function createTemperatureConverter(){
                return {
                toFahrenheit(C){
                return F = C * 9 / 5 +32
                },
                toCelsius(F){
                return C = (F - 32) * 9 / 5
                }
        }

GLOBAL OBJECT - holds variables that should be available everywhere
- includes JS built-ins (objects, strings, etc)
- globalThis
- name => returns the name of a function
- length => nr of params
- 
*/