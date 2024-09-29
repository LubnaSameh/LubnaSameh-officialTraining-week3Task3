
// Exercise 1: Filtering an Array
function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6]

// Exercise 2: Find the Largest Number
function findLargestNumber(arr) {
    return Math.max(...arr);
}

// Example usage
const largestNumber = findLargestNumber([10, 20, 30, 5, 15]);
console.log(largestNumber); // Output: 30

// Exercise 3: Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
const reversedText = reverseString("hello");
console.log(reversedText); // Output: "olleh"

// Exercise 4: Remove Duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage
const uniqueNumbers = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
