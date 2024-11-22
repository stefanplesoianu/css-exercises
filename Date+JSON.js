/*
DATES
- let date = new Date(year, month, day, hours, min, seconds, miliseconds)
- to get the last day of a month(x): new Date(x+1, 0 ,0)
            - one day before first day of next month(x+1)
            - last day of December: new Date(Jan, 0, 0)
- METHODS: getFullYear(), getMonth(), getDate() ....
            setFullYear(), setMonth(), ...
    - getting time difference: 
            function timeDif(date1, date2) { return date1.getTime() - date2.getTime()}
- months start from 0

JSON - JavaScript object notation = a data format 
- general format to represent values and objects
- JSON.stringify() => converts objects into JSON
- JSON.parse() => converts JSON back into objects
- JSON uses "" ; no other ticks
- supports : objects, arrays, primitives (strings, numbers, boolean, null)
 */