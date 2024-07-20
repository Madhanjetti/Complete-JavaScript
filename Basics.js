1.Find the Second Largest Number in an Array:

function findSecondLargestNumber(arr) {
  arr.sort((a, b) => b - a);
  return arr[1];
}

console.log(findSecondLargestNumber([3, 8, 1, 5, 10])); // Output: 8

2.Check for Anagrams:

function areAnagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(areAnagrams("listen", "silent")); // Output: true
3.Capitalize the First Letter of Each Word in a Sentence:

function capitalizeSentence(sentence) {
  return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeSentence("hello world")); // Output: "Hello World"
4.Find the Intersection of Two Arrays:

function findIntersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
5.Check if a Number is a Power of Two:

function isPowerOfTwo(num) {
  return (num & (num - 1)) === 0;
}

console.log(isPowerOfTwo(16)); // Output: true
6.Calculate Factorial of a Number:

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5)); // Output: 120
7.Rotate an Array to the Right by a Given Number of Steps:

function rotateArray(arr, steps) {
  steps %= arr.length;
  const rotatedPart = arr.splice(-steps);
  return rotatedPart.concat(arr);
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
8.Find the Longest Word in a Sentence:

function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
9.Convert Celsius to Fahrenheit:

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(25)); // Output: 77
10.Find the Missing Number in an Array:

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return totalSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8])); // Output: 5
11.Reverse Words in a Sentence:

function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWords("Hello world")); // Output: "world Hello"
12.Check if Two Strings are Rotations of Each Other:

function areRotations(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}

console.log(areRotations("abcde", "cdeab")); // Output: true
13.Remove Even Numbers from an Array:

function removeEvenNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

console.log(removeEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]
14.Implement a Queue using an Array:

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
15.Find the Prime Factors of a Number:

function primeFactors(num) {
  const factors = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  return factors;
}

console.log(primeFactors(24)); // Output: [2, 2, 2, 3]
16.Flatten an Array of Nested Arrays:

function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
17.Remove Duplicates from an Object Array based on a Property:

function removeDuplicates(arr, prop) {
  const uniqueMap = new Map();
  for (const item of arr) {
    if (!uniqueMap.has(item[prop])) {
      uniqueMap.set(item[prop], item);
    }
  }
  return Array.from(uniqueMap.values());
}

const people = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
  { id: 3, name: "Alice" }
];

console.log(removeDuplicates(people, 'id'));
/* Output:
[
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alice" }
]
*/
18.Find the Median of an Array:

function findMedian(arr) {
  arr.sort((a, b) => a - b);
  const midIndex = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? (arr[midIndex] + arr[midIndex - 1]) / 2 : arr[midIndex];
}

console.log(findMedian([5, 2, 1, 6, 3, 4])); // Output: 3.5
19.removeDuplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
20.fibonacci series
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // Output: 13

Recurison

Factorial using Recursion:

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
Fibonacci Sequence using Recursion:

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // Output: 13
Sum of Digits using Recursion:

function sumOfDigits(num) {
  if (num < 10) {
    return num;
  }
  return num % 10 + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(12345)); // Output: 15
Power of a Number using Recursion:

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 3)); // Output: 8
Calculate GCD (Greatest Common Divisor) using Recursion:

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

console.log(gcd(24, 36)); // Output: 12
Print Numbers from 1 to N using Recursion:

function printNumbers(n) {
  if (n <= 0) {
    return;
  }
  printNumbers(n - 1);
  console.log(n);
}

printNumbers(5);
/* Output:
1
2
3
4
5
*/
Check if a String is Palindrome using Recursion:

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome("racecar")); // Output: true
Tower of Hanoi using Recursion:

function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }
  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

towerOfHanoi(3, 'A', 'B', 'C');
/* Output:
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
*/
Generate All Subsets of a Set using Recursion:

function generateSubsets(set, index = 0, subset = [], subsets = []) {
  subsets.push(subset.slice());
  for (let i = index; i < set.length; i++) {
    subset.push(set[i]);
    generateSubsets(set, i + 1, subset, subsets);
    subset.pop();
  }
  return subsets;
}

console.log(generateSubsets([1, 2, 3]));
/* Output:
[ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]
*/
Reverse a String using Recursion:

function reverseString(str) {
  if (str === '') {
    return '';
  }
  return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(reverseString("hello")); // Output: "olleh"

Advance  recursion prgms :
Generate All Permutations of a String:

function permutations(str) {
  if (str.length <= 1) {
    return [str];
  }

  const char = str[0];
  const restStr = str.slice(1);
  const restPerms = permutations(restStr);
  const result = [];

  for (const perm of restPerms) {
    for (let i = 0; i <= perm.length; i++) {
      result.push(perm.slice(0, i) + char + perm.slice(i));
    }
  }

  return result;
}

console.log(permutations("abc"));
/* Output:
[
  'abc', 'bac', 'bca',
  'acb', 'cab', 'cba'
]
*/
Count Possible Paths in a Grid:

function countPathsInGrid(rows, cols) {
  if (rows === 1 || cols === 1) {
    return 1;
  }
  return countPathsInGrid(rows - 1, cols) + countPathsInGrid(rows, cols - 1);
}

console.log(countPathsInGrid(3, 3)); // Output: 6
Subset Sum Problem:

function subsetSum(arr, target, index = 0, sum = 0) {
  if (sum === target) {
    return true;
  }

  if (index >= arr.length) {
    return false;
  }

  return (
    subsetSum(arr, target, index + 1, sum + arr[index]) ||
    subsetSum(arr, target, index + 1, sum)
  );
}

console.log(subsetSum([2, 4, 6, 8], 10)); // Output: true
Josephus Problem:

function josephus(n, k) {
  if (n === 1) {
    return 0;
  }
  return (josephus(n - 1, k) + k) % n;
}

console.log(josephus(7, 3)); // Output: 3
Generate Parentheses:

function generateParentheses(n) {
  const result = [];

  function backtrack(open, close, current) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(open + 1, close, current + '(');
    }

    if (close < open) {
      backtrack(open, close + 1, current + ')');
    }
  }

  backtrack(0, 0, '');
  return result;
}

console.log(generateParentheses(3));
/* Output:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/
N-Queens Problem:

function nQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
      const diff = row - i;
      if (col - diff >= 0 && board[i][col - diff] === 'Q') return false;
      if (col + diff < n && board[i][col + diff] === 'Q') return false;
    }
    return true;
  }

  function solveNQueens(row) {
    if (row === n) {
      result.push(board.map(row => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';
        solveNQueens(row + 1);
        board[row][col] = '.';
      }
    }
  }

  solveNQueens(0);
  return result;
}

console.log(nQueens(4));
/* Output:
[
 [ ".Q..",
   "...Q",
   "Q...",
   "..Q."],

 [ "..Q.",
   "Q...",
   "...Q",
   ".Q.."]
]
*/
