// JSON
// Date
// Set & Map
// Error Handling
// Promises
// Async/Await
// DOM Basics
// Closures
// Hoisting
// Event Loop
// Prototype & Inheritance
// Modules (import/export)
// Playwright APIs

// 5. OBJECT OPERATIONS
// Create Object

const user = {
    name: "Anil",
    age: 30
};

// Access Properties
user.name
user["name"]

// Add Property
user.city = "Delhi"

// Delete Property
delete user.city

// Keys
Object.keys()

// Values
Object.values()

// Entries
Object.entries()

// Merge Objects
// {...obj1, ...obj2}

// Clone Object
// {...obj}

// Common Interview Questions:
// - Deep Copy
// - Shallow Copy
// - Object Comparison
// - Nested Object Search


// 6. JSON OPERATIONS
// Object → JSON
JSON.stringify()

// JSON → Object
JSON.parse()

// Important For:
// - API Testing
// - Playwright
// - REST APIs


// 7. DATE OPERATIONS
// ------------------

// Current Date
new Date()

// Get Values
getDate()
getMonth()
getFullYear()

// Time
getHours()
getMinutes()
getSeconds()

// Format
toISOString()



//
const add = function(a,b) {};


const add = (a,b) => a+b;

Callback Function

setTimeout(() => {}, 1000);

// Higher Order Functions
map()
filter()
reduce()


11. ES6 FEATURES
----------------

Template Literals

`Hello ${name}`

Destructuring

const {name} = user;
const [a,b] = arr;

Spread Operator

const newArr = [...arr];

Rest Operator

function sum(...nums){}

Default Parameters

function test(name="Guest"){}

Optional Chaining

user?.address?.city

Nullish Coalescing

value ?? "default"

====================================================

12. PROMISES
------------

Create

new Promise((resolve,reject)=>{})

Methods

then()
catch()
finally()

Promise Utilities

Promise.all()
Promise.race()
Promise.allSettled()

====================================================

13. ASYNC / AWAIT
-----------------

async function getData() {
   const result = await apiCall();
}

Important Topics:
- await
- async
- Promise chaining
- Error handling

====================================================

14. ERROR HANDLING
------------------

try {
   // code
}
catch(error) {
   console.log(error);
}
finally {
   // cleanup
}

Throw Error

throw new Error("Something went wrong");

====================================================

15. REGULAR EXPRESSIONS (REGEX)
-------------------------------

Create Regex

const regex = /abc/;

Validate Email

/^[^\s@]+@[^\s@]+\.[^\s@]+$/

Methods

test()
match()
replace()

Common Interview Questions:
- Email Validation
- Phone Validation
- Password Validation

====================================================

16. DOM OPERATIONS
------------------

Find Elements

document.getElementById()
document.querySelector()
document.querySelectorAll()

Read Text

element.textContent

Read Value

element.value

Update Text

element.textContent = "Hello"

Attributes

getAttribute()
setAttribute()

Events

click
change
submit

====================================================

17. EVENT LOOP (IMPORTANT)
--------------------------

Understand:

Call Stack
Web APIs
Callback Queue
Microtask Queue
Event Loop

Interview Favorite:
- setTimeout
- Promise
- Execution Order

====================================================

18. CLOSURES (IMPORTANT)
------------------------

function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    }
}

Interview Favorite Topic

====================================================

19. HOISTING (IMPORTANT)
------------------------

var hoisting
function hoisting

Difference Between:
- var
- let
- const

====================================================

20. PROTOTYPE & INHERITANCE
---------------------------

Prototype Chain

Object.create()

class

extends

super

====================================================

21. MODULES
-----------

Export

export function add(){}

Import

import {add} from './utils.js'

====================================================

22. PLAYWRIGHT-SPECIFIC JAVASCRIPT
----------------------------------

Async/Await

await page.goto()
await page.click()

Destructuring

test('test', async ({ page }) => {})

Array Methods

map()
filter()
find()

Promise Utilities

Promise.all()

JSON Handling

API responses

Error Handling

try/catch

====================================================

TOP 20 INTERVIEW PROGRAMS
=========================

1. Reverse String
2. Palindrome String
3. Anagram Check
4. Count Vowels
5. Character Frequency
6. Reverse Number
7. Prime Number
8. Factorial
9. Fibonacci
10. Armstrong Number
11. Palindrome Number
12. Largest Array Element
13. Second Largest Element
14. Remove Duplicates
15. Move Zeros To End
16. Missing Number In Array
17. Array Rotation
18. Flatten Nested Array
19. Object Deep Copy
20. Debounce / Throttle Function

====================================================
SENIOR SDET MUST KNOW
====================================================

✓ Closures
✓ Hoisting
✓ Event Loop
✓ Promises
✓ Async/Await
✓ Prototype Chain
✓ ES6 Features
✓ JSON Handling
✓ Error Handling
✓ Array Methods (map/filter/reduce)
✓ API Handling
✓ Playwright Fixtures
✓ Promise.all()
✓ Modules (import/export)

====================================================