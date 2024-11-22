/*

- can use delete to remove prop
        delete object.prop
        delete object["prop"]

- loop : for(key in obj)
check if empty: function checkEmpty(obj){ for(let key in obj) { return true } return false}

let a = {}
let b = {}

a == b  / false

generally, objects are not values, but references to values 

to clone an object : let clone = {}
                     for (let key in obj) { clone[key] = obj[key] }

                     OR Object.assign(clone, obj.properties)

                     let user = { name: 'x' , age: 30}
                     let clone = structuredClone(user)
                     user.age == clone.age  // false! they are different objects
- objects are assigned and copied by reference. A variable stores not the 'object value' 
but a reference (address in memory) for the value.Copying a variable or passing it 
as a function argument copies the reference, not the object itself.

these are called shallow copies!

 - garbage collector = background process in JS that monitors all objects and removes the ones
 that have become unreachable ; this is performed automatically

the NEW constructor.  function User(name){
                        this.name = name
                        this.isAdmin = false
                        }
        let user = new User('Jack')

    value?.prop =>  use this in case value is undefined (OPTIONAL CHAINING)

- an object can only have 2 types of primitives as keys: strings and symbols

METHODS
- similar to array, set, map
- Object.keys(obj) => returns an array of keys
- Object.values(obj)
- Object.entries(ojb) => returns key:value pairs, in an array
- for...of
- structuredClone()  => to create a clone with all nested properties

*/