// Arrays are one of the most important topics in JavaScript interviews. Here's a practical cheat sheet of the major array operations with examples.

// 1. Create an Array
let fruits = ["Apple", "Banana", "Mango"];
let numbers = new Array(1, 2, 3, 4);
// 2. Access Elements
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[2]);

// Output:

// Apple
// Mango
// 3. Find Array Length
console.log(fruits.length);

// Output:

// 3
// 4. Add Elements
// push() - Add at End
fruits.push("Orange");

// Result:

// ["Apple", "Banana", "Mango", "Orange"]
// unshift() - Add at Beginning
fruits.unshift("Grapes");

// Result:

// ["Grapes", "Apple", "Banana", "Mango"]
// 5. Remove Elements
// pop() - Remove Last
fruits.pop();
// shift() - Remove First
fruits.shift();
// 6. Check Element Exists
// includes()
fruits.includes("Banana");

// Output:

// true
// 7. Find Array Length
// indexOf()
fruits.indexOf("Mango");

// Output:

// 2
// 8. Convert Array to String
// join()
fruits.join(", ");

// Output:

// Apple, Banana, Mango
// 9. Convert String to Array
// split()
let str = "Apple,Banana,Mango";

let arr = str.split(",");
// 10. Reverse Array
fruits.reverse();
// 11. Sort Array
// String Sort
fruits.sort();
// Number Sort

// ❌ Wrong

[100, 2, 50].sort();

// Output:

// [100, 2, 50]

// ✅ Correct

[100, 2, 50].sort((a, b) => a - b);

// Output:

// [2, 50, 100]
// 12. Iterate Through Array
// for Loop
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// for...of
for(let fruit of fruits) {
    console.log(fruit);
}
// forEach()
fruits.forEach(fruit => {
    console.log(fruit);
});
// 13. Map

// Transform each element.

let nums = [1,2,3];

let result = nums.map(num => num * 2);

console.log(result);

// Output:

// [2,4,6]
// 14. Filter

// Return matching elements.

let nums = [1,2,3,4,5,6];

let even = nums.filter(num => num % 2 === 0);

console.log(even);

// Output:

// [2,4,6]
// 15. Find

// Returns first matching element.

let nums = [10,20,30,40];

let result = nums.find(num => num > 25);

console.log(result);

// Output:

// 30
// 16. Find Index
let nums = [10,20,30,40];

let index = nums.findIndex(num => num > 25);

console.log(index);

// Output:

// 2
// 17. Reduce

// Sum array elements.

let nums = [1,2,3,4];

let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// Output:

// 10
// 18. Some

// Checks if at least one element matches.

let nums = [1,2,3,4];

console.log(nums.some(num => num > 3));

// Output:

// true
// 19. Every

// Checks if all elements match.

console.log(nums.every(num => num > 0));

// Output:

// true
// 20. Slice

// Returns portion of array.

let nums = [1,2,3,4,5];

console.log(nums.slice(1,4));

// Output:

// [2,3,4]
// 21. Splice

// Add/remove elements.

let nums = [1,2,3,4];

nums.splice(2,1);

// Result:

// [1,2,4]
// 22. Concatenate Arrays
let a = [1,2];
let b = [3,4];

let c = a.concat(b);

// Or

let c = [...a, ...b];
// 23. Remove Duplicates
let nums = [1,2,2,3,3,4];

let unique = [...new Set(nums)];

console.log(unique);

// Output:

// [1,2,3,4]
// 24. Flatten Nested Array
let arr = [1, [2,3], [4,[5]]];

console.log(arr.flat(2));

// Output:

// [1,2,3,4,5]
// 25. Check Array Type
Array.isArray([1,2,3]);

// Output:

// true
// 26. Largest Number
let nums = [10,40,5,100];

let max = Math.max(...nums);

console.log(max);
// 27. Smallest Number
let min = Math.min(...nums);
// 28. Second Largest Number
let nums = [10,40,5,100];

let secondLargest =
    [...new Set(nums)]
        .sort((a,b) => b-a)[1];

console.log(secondLargest);

// Output:

// 40
// 29. Merge and Sort
let a = [5,1];
let b = [4,2];

let result = [...a, ...b]
    .sort((x,y) => x-y);

console.log(result);

// Output:

// [1,2,4,5]
// 30. Array Destructuring
let nums = [10,20,30];

let [a,b,c] = nums;

console.log(a,b,c);

// Output:

// 10 20 30
// Most Common Array Interview Questions
// Reverse an Array
// Find Largest Element
// Find Smallest Element
// Find Second Largest Element
// Remove Duplicates
// Merge Two Arrays
// Sort Numbers
// Find Missing Number
// Move Zeros to End
// Rotate Array
// Find Frequency of Elements
// Find Duplicate Elements
// Find Intersection of Arrays
// Find Union of Arrays
// Flatten Nested Arrays
// Sum of Array Elements
// Find Max/Min Using Reduce
// Chunk Array into Groups
// Remove Specific Element
// Check if Array is Sorted