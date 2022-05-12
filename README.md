# DSA
Algorithm: A well-defined sequence of steps for solving a computational problem

computational problem:  is a problem that a computer might be able to solve, Problems must be well specified. That is, the statement of the problem must specify the inputs, outputs, and the relationship between the inputs and outputs.

the sequence of steps must be well defined. In other words, the steps must be unambiguous and complete. Here, unambiguous means that the instruction for a particular step can only mean one thing. And complete means that no steps are left out.

Pseudocode:  is a form of structured English used for describing algorithms.  It resembles programming code but isn't concerned with details such as semicolons. The exact syntax of pseudocode is not important as long as it is unambiguous and clear.

The properties of an algorithm are as follows:
Correctness: The output produced by the algorithm is correct for all valid input.
Efficiency: The algorithm minimizes the use of the available computing resources.
Determinism: The result of each step of the algorithm is determined only by the inputs and the results of the preceding steps.
Finiteness: The algorithm must stop. It may take many steps, but eventually, it must terminate.
Generality: The algorithm applies to a set of inputs.
Efficiency includes :

Time complexity of an algorithm: The number of instructions (or steps) needed to execute the algorithm
Space complexity of an algorithm: The amount of memory used by the algorithm

Algorithms real life examples:

Google's PageRank algorithm: This algorithm attempts to measure the importance of a web page and its relevance to your search query.
Internet routing: routing algorithms that attempt to find the fastest route from your computer to any other computer that you are connected to on the internet.
Cryptography: Encryption is the process of obscuring a message so that third parties may not access the content of the message. Encryption is used to secure communication on the internet.
Ride-sharing: optimize the use of its drivers and minimize idle time as well as wait times for its customers. Tracking numerous drivers on the move and numerous customers waiting for rides is a complex task that requires sophisticated algorithms.
GPS: involves several complex systems all working together to find your position as you buy your coffee. GPS works by synchronizing atomic clocks on a constellation of satellites orbiting the Earth with a ground-based control system and your phone.
The hardware that makes up your computer implements many algorithms that enable the tasks that you do on your computer. The operating system is made up of a series of advanced algorithms for file management, CPU usage, networking, security, and a host of other services within the computer. Your browser uses many algorithms just to display a web page. And games that you play are possible because of sophisticated algorithms.

-to calculate the time an algorithm would take:


-to measure the performance of a function: 
const NUMBER_OF_REPETITIONS = 10; // Number of times to repeat const N = 100;
let sumOfRunningTime = 0n;
for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {
  const start = process.hrtime.bigint();
  const answer = sumIntegers(N);
  const end = process.hrtime.bigint();
  sumOfRunningTime += end - start;}
const averageTime = sumOfRunningTime / BigInt(NUMBER_OF_REPETITIONS);
console.log(`Summing ${N} numbers took an average of  ${averageTime} nanoseconds`);







Linear growth: the length of the running time changes proportionally to the size of the input.



-constant growth rate: When the running time of a function doesn't change with changes to the input size

function sumIntegers2(n) {
2  return (n * (n + 1)) / 2;
3}


Rate of growth: Also called the order of growth, the rate at which the running time of an algorithm increases as a function of the input size

Big O notation: A notation commonly used to describe the order of growth of an algorithm,  Specifically, it describes the upper bound, or worst-case running time of the algorithm.

The logarithmic function: This growth rate, where the number of steps needed increases by 1 every time that the input size doubles
The log-linear function:  a growth rate that grows slightly faster than linear. f(n)=nlogn

The quadratic function:  a growth rate that grows at the square of the size of the input. This is significantly faster than any of the other functions so far. f(n)=n
Cubic and higher-order polynomials: f(n)=n


Polynomials: 
Exponential functions:Functions of the form shown below, where c is some constant, are called exponential functions.
f(n) = c^n


 
Auxiliary space: The temporary or extra space used by the algorithm while it is being executed




Searching algorithms: Algorithms that iterate through data to retrieve specific data

Sorting algorithms: Algorithms that bring order to data, making it easier to search, display, and understand the data


Types of search:
-linear search -for unsorted and sorted items -brute force -O(n)
-binary search - has to be sorted -O(log n)
-recursion?

Types of sort:
-bubble sort
-merge sort
-quick sort

Linear search algorithm: Also known as the sequential search algorithm, an algorithm that checks every element in an array, starting from the leftmost element, and continues until the desired element is found



Brute-force algorithm: Any algorithm that doesn't use any logic to try to do its job quickly or somehow reduce the number of elements that it searches for a matching value

Binary search algorithm: Also known as a half-interval search algorithm, an algorithm to find a specific element located in a sorted array.



Recursion A problem-solving method that involves a function calling itself, In each call, it breaks down the problem into smaller and smaller subproblems until it reaches a problem small enough that it can be solved trivially.  recursion itself isn't a data structure or an algorithm—it is a concept.

The efficiency of recursive functions:
In JavaScript, a loop is essentially always more efficient than a recursive function call. Allocating memory for the next function call takes time and memory that isn't required in a loop. However, recursion is almost never used for performance reasons; it's used to make the problem simpler and the code easier to understand.


Top-down recursive function A function that calculates the solutions to each subproblem in the forward phase, passing the results of the calculation to the recursive call

Bottom-up recursive function A function that breaks down the problem into increasingly smaller problems until the base case is encountered, and then combines the solutions in the backward phase

Stack overflow error A runtime error where the call stack gets too big and runs out of space

Forward phase Also called the recursive phase, the phase that happens when the function is calling itself and continues until the base case is satisfied

Backward phase Also called the back-out phase, the phase that starts when a function call satisfies the base case, then returns a value to the function that called it, and continues until a value is returned to the initial function call

A recursive algorithm is broken down into two parts:

The base case (or base cases), which indicates when to stop, It ensures that you don't infinitely recurse: it provides a terminating condition for the recursive case.
The recursive case (or recursive cases), which is where the function calls itself, Where you call the same function to solve increasingly simple versions of the problem

Forward Phase —> Base Case —> Backward Phase


Bubble sort algorithm:  Also called sinking sort, a comparison sorting algorithm that repeatedly steps through the elements in an array, compares two adjacent elements, and swaps them if they are in the wrong order, The algorithm is named for the way that smaller or larger elements "bubble" to the top of the array.

-Bubble sort is the classic "terrible" sorting algorithm. This algorithm isn't suitable for large datasets because its average-case complexity is O(n²).




Merge sort algorithm: A divide-and-conquer (Similar to binary search) algorithm that continuously splits arrays in half until every element is alone in its own array, then merges each subarray in order
Typical compare function:
compare: A function that compares two elements, so it takes two parameters: left and right. It returns one of the following:
0 if the left element is equal to the right element
A positive value if the left element is greater than the right element by the ordering criterion
A negative value if the left element is less than the right element by the ordering criterion



Quicksort algorithm: Also called a partition exchange sort, an algorithm that works by partitioning an array into two parts, then sorting the parts independently

-Quicksort is very efficient at sorting smaller sets of data. But keep in mind that with very large datasets that won't fit in your computer's memory, merge sort works better than quicksort.

-Quicksort's average-case and best-case time complexity is O(n log n). This occurs when the array is rearranged into two same-length subarrays in every partition step (similar to merge sort).



Stability: Whether or not a sort preserves the order of elements with equal values, Stability isn't an issue if all values are different; to check for stability, focus on elements with equal values. If these elements appear in the same order both in the sorted output and in the input array to be sorted, then the algorithm is stable. Most simple sorts are stable, but some sorts are not.

If you have an unstable sorting algorithm, you can make it stable by changing the comparison operation so that it considers position as a factor for two equal values.
Some algorithms, such as quicksort, perform exceptionally well for some inputs, but are very slow for others. And other algorithms, such as merge sort, have the same runtime regardless of the input data's order.

The ideal sorting algorithm would have the following properties:
Stable, meaning that elements with equal values aren't reordered.
Operates in place, requiring O(1) extra space
O(n log n) comparisons in the worst case
O(n) swaps in the worst case
Adaptive, with speeds up to O(n) when data is nearly sorted or when there are few unique values.
Data structure: A way to organize data in a computer's memory, facilitating efficient access to and modification of the data
-Because the elements of the array can be accessed directly by their index, it is said that an array is a random-access structure. If the index of an element is known, then accessing that element takes O(1) time.
-The unshift() method adds one or more elements to the beginning of an array. Unlike the push() method, this does affect every other element in the array. To make room for this new element at the beginning of the array, every other element in the array needs to be moved.
-The shift() method removes the first element of the array. And similarly to the unshift(), it needs to move each element over by one. This once again results in a running time of O(n)
-The splice() method is used to delete or insert elements at arbitrary positions in an array. removing an element from some position in the array requires moving the elements that follow to fill the gap. This running time is O(n).
 




Set: A collection of unique values, One common use of Sets is to remove duplicates from a collection of values. 

const mySet = new Set(); 
mySet.add(value);
mySet.delete(value);
mySet.has(value);
mySet.clear();
mySet.forEach((value) => iterate)
Values = mySet.values()
Let arrayFromSet = [...mySet];
Let setFromArray = new Set(myArray);
for (let item of mySet.values()) {...}





Map: A collection of key-value pairs that remembers the insertion order of the keys, The keys in a Map are unique. Maps are used when you need a very fast lookup table.
Attempting to add a second entry with the same key results in replacing the original value. The keys are never duplicated.

Maps are similar to objects
With a Map, there are no keys unless you explicitly added to the Map yourself. An object may inherit keys and cause some surprising side effects.
The keys of a Map may be of any type of value, including functions and objects. The keys in an object may only be strings and Symbol objects.
A Map remembers the insertion order of the keys. When iterating the keys, they are always in order of insertion.
You can get the number of entries in a Map by its size property:
myMap.delete(value);
months.set(key, value);
myMap.get(key);
Let length = myMap.size;
for (let key of myMap.keys()) {...}
for (let value of myMap.values()) {...}
for (let [key, value] of myMap.entries()) {...}
myMap.forEach((value, key) => .. )
const myArray = [...myMap];

an array of arrays in the form [[key1, value1], [key2, value2], ... ] may be used to create a Map.


Object-oriented programming:  OOP, a programming paradigm where data is stored into objects as individual fields, attributes, or parameters, which the code manipulates through different procedures and methods

Class instance: An object built to the specifications of a given class

Constructor: A special function that defines how a new instance of a class is created

Class: A blueprint for creating objects which makes it easy to create multiple objects that all have similar properties, Classes define what properties and functionality the resulting instances will have. class names are conventionally written in PascalCase

The benefit of using OOP is that it will help you organize or encapsulate chunks of related code, such as data and functions, and make your code more reusable and readable overall.
A method is any function that can be called from another object.
Linked list: An ordered, linear data structure in which each item contains a reference to the next item


Head:A reference to the first node in a linked list

Tail: The last node in a linked list

Singly linked list: A linked list in which each node contains exactly one reference to the next node

Doubly linked list: A linked list in which each node contains two references: a reference to the next node and a reference to the previous node

Circular linked list: A linked list in which the last node points to the first node or another node before it, thereby forming a loop

linked lists use slightly more memory than arrays because of the storage needed for the reference to the next node. But unlike arrays, which store data contiguously in memory, linked lists can easily insert or remove nodes from the list without reorganizing all of the data.




 const tail = list.find((node) => !node.next);




   The history of pages visited in a web browser and the undo operation in a text editor are examples of operations made possible using stacks.
  The handling of events in web browsers often uses queues.

Event loop:  A design pattern that a program may use to prioritize certain lines of code for execution

Stack:  A vertical data structure that stores elements in a last in, first out order (LIFO), this.top

A stack has two primary functions:
push(): Places data onto the top of a stack (insertion)
pop(): Removes data from the top of the stack (deletion)
Queue: A horizontal data structure that stores data in a first in, first out order(FIFO), this.first, this.last

The main functions of a queue include the following:
enqueue(data): Adds data to a queue (insertion)
dequeue(): Removes the oldest data added to a queue (deletion)
sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");




Tree structure: A type of structure that includes a single root and multiple levels of organization

Root node: A special node with no parent, from which all other nodes descend

Leaf node: A node without any children

Binary tree: A tree with an additional limitation: each node can only have zero, one, or two children (at most)

Subtree: A mini tree within a binary tree, whose root can be any node and all of its descendants rooted at that node

BST: a binary tree with the following characteristics:
Each node has zero, one, or two children.
All of the nodes in the left-hand branch of a node are guaranteed to have lower values than the node itself.
All of the nodes in the right-hand branch of a node are guaranteed to have a higher value than the node itself.
Both the left and right subtrees are guaranteed to be BSTs themselves.
Balanced tree: A tree in which each row contains two times as many nodes as the row before

Depth-first search: DFS, a tree-traversal algorithm that starts from the root node, explores as far as possible in a subtree, and then backtracks before moving to the next subtree

In-order traversal: Traversal in which the left branch of the node is visited, then the current node is handled, and then the right branch is visited

Pre-order traversal:  Traversal in which the current node is handled first, then the left branch of the node is visited, and then the right branch is visited
Post-order traversal:  Traversal in which the left branch of the node is visited, then the right branch is visited, and then the current node is handled last

Breadth-first search:  BFS, a tree-traversal algorithm that starts at the root node and proceeds level by level


Sum of numbers from 1 to n = n(n+1)/2

array.indexOf(something) => finds the index of sth in an array

string.substring(0, 1) => starts from zero to 1

string.slice(0, 1) => returns a copy of the text from index 0-1

Array.isArray(arrayname)

array1.concat(array2) => adds array 2 to array 1

array.push(thing) => adds the thing to the end of the array

array.pop() => removes the last element in the array

array.unshift(something) => adds sth to the start of the array

array.shift() => removes the first element in an array

splice(start, deleteCount, item1)

reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

reduce((previousValue, currentValue) => { /* ... */ } )

string.split(“”) => turn a string into an array

Array.from(string) => turn a string into an array





