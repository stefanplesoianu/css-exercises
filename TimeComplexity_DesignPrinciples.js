/*
COMPLEXITY
=> time complexity = how long it takes a program to process a given input
    - number of times an instruction set is executed
=> space complexity = total memory required for input execution

            ACCESS      SEARCH      INSERTION       DELETION
Array       O(1)        O(n)        O(n)            O(n)

Stack       O(n)        O(n)        O(1)            O(1)

Queue       O(n)        O(n)        O(1)            O(1)

Single List O(n)        O(n)        O(1)            O(1)

Double List                 same

Hash Table  O(1)        O(1)        O(1)            O(1)

String      O(1)        O(n)        O(n)            O(n)            concatenation => O(n)

O(1) = constant, instant
O(log n) = logarithmic time; algorithms that keep splitting the input in halves
O(n) linear => scales with the size of input
O(n log n) => Linearithmic => sort // quick sort
O(n**2) => quadratic => nested loops, bubble / selection sort
O(n!) => factorial => permutations

Bubble sort => comparison-based, adjacent elements ; O(n) if already sorted, O(n**2) otherwise
Selection sort => repeatedly find hte smallest / largest element of an unsorted path of a list, then swapping
    with the first unsorted element. Repeated for entire list => O(n**2)
Merge sort => divides in half, sorts, then merges. Efficient for large datasets => O(n log n) 

DESIGN PRINCIPLES = best practices to create effcient, scalable, maintainable, flexible software
        SEPARATION OF CONCERNS  
        SINGLE RESPONSIBILITY PRINCIPLE
        DONT REPEAT YOURSELF
        KEEP IT SIMPLE
        INTERFACE SEGREGATION
        DEPENDENCY INVERSION(high level modules should not depend on low level modules)
        LEAST KNOWLEDGE BETWEEN CLASSES
        MODULARITY
        ASSUME CHANGES WILL HAPPEN
        CODE READABILITY
        TESTABILITY
*/