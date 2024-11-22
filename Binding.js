/*
BINDING
-   let user = { firstName: 'John' }
    function func() { alert(this.firstName) }
    let funcUser = func.bind(user)  // John
- func.bind(context, ...args)
- ONCE A FUNCTION IS BOUND, IT CANNOT BE UNBOUND OR BOUND TO STH ELSE
- function askPassword(ok, fail) { ... }
    let user = { name: 'x', loginOK() {...}, loginFail() {...} }
    askPassword(user.loginOK.bind(user), user.loginFailed.bind(user))

    otherwise it would not work because it would DROP THIS

    askPassword(user.login.bind(user, true), user.login.bind(user, false))
- can also do partial binding : function multiply(a, b) { return a * b }
                                const double = multiply.bind(null, 2)
                                double(5) = 2 * 5

TYPES OF BINDING : default / implicit / explicit / arrow functions / new Object
- default => refers to the global object
            function showName() {console.log(this.name)}
            const name = 'Alice'
            showName() // 'Alice'
- implicit => value of this is set to the object that owns the function
            const person = { ..., showName() { ... }, ... }
            person.showName()
            - implicit binding can be lost if a reference to the method is assigned to another variable
- explicit => call(), apply() invoke the function immediately with a specific value for this
              bind() returns a new function without invoking right away

              const pers1 = { name: 'david' }
              const pers2 = { name: 'alice' }
              showName.call(pers1) // david
              showName.call(pers2) // alice

              function greet(greeting, punctuation) {
                console.log(`${greeting}, ${this.name}${punctuation}`)
              }

              gree.apply(pers1, ['Hello', '!'])

              const boundShowName = showName.bind(pers1)
              boundShowName()  // David
*/