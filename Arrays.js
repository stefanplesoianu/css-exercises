/* 
ARRAY
- objects ; data structures that store ordered collections
- arr[-1] => last element of the array
- arr.toString()
- arr.push(), pop() // arr.shift(), unshift()
- the engine has array-specific optimisation
        - cannot add non-numeric props to arrays
        - cannot make holes (arr[0] ... arr[100])
- loop: for(let x of arr){ ... }
- can also use for... in , the objects method, but it is much slower, not good idea
- clearing an array: arr.length = 0
- arr.splice(pos, nr of el's, ...args)
    let arr = ['how' ,'are', 'you?']  /  arr.splice(2, 1, 'they')  / ['how', 'are', 'they']
- arr.slice() => creates copy of array, otherwise same method as for string
- arr.concat()  . let arr = [1,2]   let newArr = arr.concat([3,4], 5, 6) // [1,2,3,4,5,6]
- arr.forEach(function(element, index, array))   const numbers = [1,2,3]  let sum = 0  
                                                  numbers.forEach(num => { sum += num } )
- indexOf(item, from)
- lastIndexOf(item)
- includes(item)
- find(item, index, arr)      arr.find(element => element.length = 5)
- filter()          let newArr = arr.filter(el => el == 3)
- findIndex()       arr.findIndex(num => num == 3)
- findLastIndex()   arr.findLastIndex(num => typeOf(num) == 'number' )
- map()             arr.map(num => num++)
- sort()            function compare(a, b) { if(a>b) return 1 ; if(a==b) return 0 ; if(a<b) return -1 }
    arr.sort(compare)
    //  arr.sort((a, b) => a-b)
- reverse()
- join()       // SPLIT IS ONLY FOR STRINGS
- reduce()  const sum = arr.reduce((acc, currentVal) => {
                RETURN acc + currentVal    
            }, 0)  ////  no need to return in arrow functions, it is done automatically
- Array.isArray(arr)
- arr.fill(value, start, end)
- arr.some(x => ...)
- arr.every(x => ...)
- Array.from(obj / map / arg)  let str = 'abc'   let chars = Array.from(str) ; chars[0] == 'a'
- ITERABLES : STRINGS, ARRAYS, MAPS, SETS, ETC.

METHODS THAT MUTATE: push , pop , shift, unshift, splice, sort, reverse, copyWithin, fill, flat

METHODS THAT DO NOT MUTATE: map, filter, slice, concat, reduce, join, find, findIndex, some, every,
        forEach, toString
        => these either return a new array or a value. forEach does not return anything

*/