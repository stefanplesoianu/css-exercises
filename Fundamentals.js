/* 
- 'use strict' is to enable new JS features that normally would clash with older ES ( < 5)
- variable = named storage for data
    - names can only contain letter / digits / $ / _
    - first character cannot be a digit
    - camelcase : thisIsACamelCase
    - reserved names: let, class, return, function

DATA TYPES (8) : number, BigInt, string, Boolean, null, undefined, symbol, object
    ++ x => increments and returns new value
    x ++ => increments and returns old value

    let a = 1
    let b = ++a  /  2
    let c = a++  / 1
    a == 2

    let y = prompt(-=-)  / string
    let x = +prompt('enter number', 20) / number

    ==   type conversion
    ===  no type conversion

    "" + 1 + 0   / "10"
    "" - 1 + 0   / -1
    true + false / 1
    6 / "3"     / 2
    "2" * "3"   /6
    "4" - 2  / 2
    "-9" + 5  / " -9 5"
    "-9" - 5  /  -14

    ??   =  nullish coalescing operator

    let height = 0

    height || 100  => 100
    height ?? 100  => 0

LOOPS : do {} while ()  //  while () {} // for ( ; ; ) {} // 
        for (key in obj) {} // for (let key of obj)

    - labels : in case of nested loops, to break everything, not just the nested loop

    outer: for (let i ....) {
                for (let j...) {
                    let input ....
                    if (!input) break outer
                    }
                }

    output prime numbers: let n
                            primeNr: for (let i = 2; i < n; i++) {
                                for(let j = 2; j < i; j++) {
                                    if(i % j == 0) continue primeNr 
                                }
                                console.log(i)
                            }

    switch:   switch(x) {
                case value 1:
                    console.log('yo');
                    break;
                case value 2: 
                    variable = value 2;
                    break;
                case value 3,
                case value 4: 
                    console.log('yikes);
                    break;
                default: 
                    yep;
                    break;   
                }
*/