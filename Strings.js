/* 
STRINGS (methods)
- alert str[0] / str.at(0) / str[-2] => undefined / str.at(-2) => character
- strings are immutable
- str[0].toUpperCase() + str.slice(1, str.length)
- indexOf()     str.indexOf('with') => returns first position where 'with' is found, otherwise -1
                str.indexOf('sth', 2) => starting from position 2
                looping over indexOf : let target, str, index = str.indexOf(target)
                                        while(index !== -1) {
                                            console.log(`found ${target} at index ${index}`)
                                            index = str.indexOf(target, index + 1)
                                        }
- str.includes()
- str.startsWith()
- str.endsWith()
- str.trim()
- str.repeat(n)
- str.slice(start[optional], end)
- localCompare to compare strings, order by character codes
- split()   // JOIN IS ONLY FOR ARRAYS
                                        
*/