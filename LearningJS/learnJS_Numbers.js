
///////////////////////////////////// NUMBER PROBLEMS /////////////////////////////////////
// Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));

// Find the largest number in an array
function findLargest(arr) {
  if (arr.length === 0) return null;
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findLargest([3, 5, 7, 2, 8])); // Output: 8
console.log(findLargest([])); // Output: null


// Merge two sorted arrays into one sorted array
function margearray() {
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  // Merges and sorts numerically
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(merged);
}
margearray()

// Generate Fibonacci sequence up to a certain number
function fibonacci(n) {
  const sequence = [];
  let a = 0, b = 1;
  while (a <= n) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8]


// Sort an array of numbers in ascending order
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortArray([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]


// Find the factorial of a number
function factorial(n) {
  if (n < 0) return null; // Factorial is not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // Output: 120
console.log(factorial(-3)); // Output: null 


// Check if a number is a perfect square
function isPerfectSquare(num) {
  if (num < 0) return false; // Perfect squares are non-negative
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}
console.log(isPerfectSquare(16)); // Output: true
console.log(isPerfectSquare(20)); // Output: false



// Calculate the sum of all numbers in an array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10  


// Find the second largest number in an array
function secondLargest(arr) {
  if (arr.length < 2) return null; // Not enough elements for second largest
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
}
console.log(secondLargest([3, 5, 7, 2, 8])); // Output: 7
console.log(secondLargest([5])); // Output: null


// Calculate the average of an array of numbers
function averageArray(arr) {
  if (arr.length === 0) return null;
  const sum = sumArray(arr);
  return sum / arr.length;
}
console.log(averageArray([1, 2, 3, 4])); // Output: 2.5 


// Check if a number is a power of two
function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(18)); // Output: false


// Calculate the sum of digits in a number
function sumOfDigits(n) {
  n = Math.abs(n); // Handle negative numbers
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(sumOfDigits(123)); // Output: 6


// Calculate the sum of all even numbers in an array
function sumOfEvens(arr) {
  return arr.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);
}
console.log(sumOfEvens([1, 2, 3, 4, 5, 6])); // Output: 12


// Calculate the sum of all odd numbers in an array
function sumOfOdds(arr) {
  return arr.filter(n => n % 2 !== 0).reduce((sum, n) => sum + n, 0);
}
console.log(sumOfOdds([1, 2, 3, 4, 5, 6])); // Output: 9

// Calculate the product of all numbers in an array
function productArray(arr) {
  return arr.reduce((product, n) => product * n, 1);
}
console.log(productArray([1, 2, 3, 4])); // Output: 24


// find the missing number from array

function findMissingNumber(num, n) {

	const expectedTotal = n * (n + 1) / 2;
	const actualTotal = num.reduce((sum, num) =>sum+num, 0);
	return expectedTotal - actualTotal;
}

const myArray = [2, 1, 5, 4]; 
const n = 5;

console.log(findMissingNumber(myArray, n));


// Array with Multiple Missing Numbers
function findMultipleMissing(arr, n) {
    const numSet = new Set(arr);
    const missingNumbers = [];
    
    // Check every number that should be in the sequence
    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}

// Example: Sequence 1 to 6, missing 2 and 5
console.log(findMultipleMissing([1, 4, 3, 6], 6)); // Output: [2, 5]

// Sequence Starting at Any Random Number
function findMissingRandomStart(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    // Sum formula for a range between 'min' and 'max'
    const count = max - min + 1;
    const expectedSum = (count * (min + max)) / 2;
    
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Example: Sequence 10 to 14, missing 12
console.log(findMissingRandomStart([14, 11, 10, 13])); // Output: 12


// Reverse a Number
function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        const digit = num % 10;          // Get last digit
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);      // Remove last digit
    }
    return reversed;
}
console.log(reverseNumber(12345)); // 54321

// Check Prime Number
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
console.log(isPrime(2));   // true
console.log(isPrime(1));   // false

// Check Palindrome Number
function isPalindrome(num) {
    // Negative numbers are not palindromes
    if (num < 0) {
        return false;
    }
    const original = num;
    let reversed = 0;
    while (num > 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return original === reversed;
}
console.log(isPalindrome(121));    // true
console.log(isPalindrome(12321));  // true
console.log(isPalindrome(123));    // false
console.log(isPalindrome(-121));   // false

// Factorial
function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers";
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1

// Fibonacci Series
function fibonacci(n) {
    let first = 0;
    let second = 1;
    for (let i = 0; i < n; i++) {
        console.log(first);
        const next = first + second;
        first = second;
        second = next;
    }
}
fibonacci(10);

// Even/Odd Number
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(10)); // Even
console.log(checkEvenOdd(7));  // Odd

// Sum of Digits
function sumOfDigits(num) {
    num = Math.abs(num); // Handle negative numbers
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;      // Get last digit
        sum += digit;
        num = Math.floor(num / 10);  // Remove last digit
    }
    return sum;
}
console.log(sumOfDigits(1234));  // 10
console.log(sumOfDigits(567));   // 18
console.log(sumOfDigits(-987));  // 24
console.log(sumOfDigits(0));     // 0

// Count Digits
function countDigits(num) {
    num = Math.abs(num); // Handle negative numbers
    // Special case for 0
    if (num === 0) {
        return 1;
    }
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(countDigits(12345)); // 5
console.log(countDigits(7));     // 1
console.log(countDigits(0));     // 1
console.log(countDigits(-9876)); // 4

// Find Largest Number
function findLargest(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargest([10, 25, 7, 89, 34])); // 89

// Find Second Largest Number
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "No second largest element";
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (
            num > secondLargest &&
            num !== largest
        ) {
            secondLargest = num;
        }
    }
    return secondLargest === -Infinity
        ? "No second largest element"
        : secondLargest;
}
console.log(findSecondLargest([10, 25, 89, 34, 67])); // 67
console.log(findSecondLargest([5, 1, 3, 5, 4]));      // 4
console.log(findSecondLargest([7, 7, 7]));            // No second largest element

// Generate Random Number
function generateRandomNumber(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}
console.log(generateRandomNumber(50, 100));

// Swap Two Numbers
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return { a, b };
}
console.log(swap(10, 20));

// Number Frequency Count
function frequencyCount(arr) {
    const frequency = {};
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    return frequency;
}
console.log(
    frequencyCount([1, 2, 2, 3, 1, 4, 2])
);

// Convert Each Digit to Its Word Representation
function digitToAlphabet(num) {
    const words = [
        "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
    ];
    return num
        .toString()
        .split('')
        .map(digit => words[Number(digit)])
        .join(' ');
}
console.log(digitToAlphabet(123)); // One Two Three
console.log(digitToAlphabet(507)); // Five Zero Seven