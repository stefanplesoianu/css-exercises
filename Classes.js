/*
PROTOTYPAL INHERITANCE 
- let animal = { eats:true, walk() {...} }
let rabbit = { jumps: true, _proto_ : animal}
rabbit.eats // true

- modern use or prototypes : Object.getPrototypeOf(obj)
                             Object.setPrototypeOf(obj, proto)
                             Object.create(proto, [descriptors])
        let animal = { eats: true }
        let rabbit = Object.create(animal, { jumps: { value: true } })

CLASSES = extensible template for creating objects

        class User {
                constructor(name) { this.name = name }
                sayHi() { ... }
        }

        typeof User == 'function'
        typeof sayHi == 'User.prototype'

 - sayHi will lose THIS if used on its own; a few ways to prevent that
        ARROW FUNCTIONS (no own this, inheriting it from the lexical scope)
                const myObject = {
                        name: 'whatve',
                        printName: function(){
                                setTimeout(() => { console.log(this.name) }, 1000)
                        }
                }
                myObject.printName()  // works, but it would not otherwise

        BIND  same myObject as above.....setTimeout(function() {...}.bind(this), 1000)

        class{....this.printName = this.printName.bind(this)}

STATIC METHOD = a function available to a class as a whole, but not to individuals 
SUPER = used to tweak / build on existing constructors 
        let Rabbit { constructor(name) { super(name), this.created = Date.now() }}
- instanceof  /// let arr = [] ; arr instanceof Array // true

*/