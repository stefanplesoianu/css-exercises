/*
DESTRUCTURING
- for arrays or objects - a way of unpacking information
- let arr = [1,2]  // let [sth1, sth2] = arr
- let user = { name: ... , age: ...}
    for(let [key, value] of Object.entries(user)) ...
    for(let [key, value] of map) ...
- let array = [1,2,3,4,5] ; let [sth1, sth2] = arr  / sth1 == 1, sth2 == 2. rest of elements are ignored
        let [sth1, sth2, ...] = array
- let options = { title: 'x', width: 10, height: 100 }
        let { title, width, height } = options
        let { title: t, width: w, height:h} = options
        let { title } = options // extracts only title

Function params: 
            let options = { title: 'Menu', items: [1,2] }

            function showMenu({
            title:'untitled',
            width: 100,
            height: h = 20,
            items: [item1, item2]
            })

            showMenu(options)   // title => 'Menu'; takes the options title
            showMenu()    // error
            showMenu({})  // gives default values

REST PARAMETERS, SPREAD SYNTAX
- function showName(first, last...titles) { ... }
- showName(Julius, Cesar, Consul, Imperator, Awesome)
                Consul == titles[0], Imperator == titles[1], Awesome == titles[3]
        let arr1 = [1,2,3]
        let arr2 = [4,5,6]
        Math.max(...arr1, ...arr2)
        let merged = [0,...arr1, ...arr2, 90]
- IMPORTANT : let copy = [...obj] / [...arr] / [...str] == ['a', 'b', 'c']
                this method can be used to iterate over anything or serve as function arguments
 */