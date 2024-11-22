/*
SET  (is an object, not array!)
- special type collection - 'set of values' without keys, where values may occur only once
- new Set()
- set.add(val)
- set.delete(val)
- set.has(val)
- set.clear()
- set.size
- set.forEach(value, valueAgain, set)
- for...of   set.keys(), set.values(), set.entries()
- method structure meant to resemble that of map
- console.log(new Set()) // {}
- console.log(Array.from(new Set())) // []

WEAK SET
- only objects (not primitives) can be added here
- can use weak set to keep track of who visited a website
- cannot be iterated!
 */