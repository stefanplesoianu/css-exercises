/*
MAP
- an object that allows any type of keys , not just strings / symbols like usual objects
- new Map()
- map.set(key, value)
- map.get(key)
- map.has(key)
- map.delete(key)
- map.clear()
- map.size  => element count
- looping: map.keys() / map.vales() / map.entries() => [key, value]
- let recipe = new Map([
                    ['garlic, 200],
                    [2, { key: 'value' }],
                    [ 'onion', 'tasty']
                ])
        for(let key of recipe.keys()) { console.log(key) }  // 'garlic', 2, 'onion'
        for(let [key, value] of recipe.entries()) { console.log([key, value]) } // ['garlic', 200] etc
    recipe.forEach((key, value) => console.log(`${key}: ${value}`) )
- creating a map from an object: Object.entries(obj) / [ [key1, val1], [key2, val2] ...]
- creating object from a map : Object.fromEntries(map)  / only works when the keys are strings / symbols

WEAK MAP
- unlike maps, keys must be objects; they cannot be primitive values
- weak maps CAN BE GARBAGE COLLECTED ; arrays / maps , CANNOT
- ONLY METHODS : set(key, value) ; get(key); delete(key) ; has(key)
- used for additional data storage, caching

*/