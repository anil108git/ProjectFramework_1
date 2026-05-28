
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

