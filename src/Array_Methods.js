const numbers = [1, 2, 3, 4, 5];

// Map: Apply a function to each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Filter: Select elements that satisfy a condition
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Reduce: Reduce the array to a single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // Output: 15

// Find: Return the first element that satisfies a condition
const firstGreaterThanThree = numbers.find(n => n > 3);
console.log(firstGreaterThanThree); // Output: 4

// FindIndex: Return the index of the first element that satisfies a condition
const indexOfThree = numbers.findIndex(n => n === 3);
console.log(indexOfThree); // Output: 2

// Some: Check if at least one element satisfies a condition
const hasNegative = numbers.some(n => n < 0);
console.log(hasNegative); // Output: false

// Every: Check if all elements satisfy a condition
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // Output: true

// Slice: Create a new array by slicing the original array
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // Output: [2, 3, 4]

// Splice: Modify the original array by removing or adding elements
const removedNumbers = numbers.splice(1, 2); // Removes [2, 3]
console.log(removedNumbers); // Output: [2, 3]
console.log(numbers); // Output: [1, 4, 5]

// Sort: Sort the array in ascending order
const sortedNumbers = [...numbers].sort((a, b) => a - b); // Spread to avoid modifying original
console.log(sortedNumbers); // Output: [1, 4, 5]

// Reverse: Reverse the elements of the array
const reversedNumbers = [...numbers].reverse(); // Spread to avoid modifying original
console.log(reversedNumbers); // Output: [5, 4, 1]

// Join: Convert the array to a string
const joinedNumbers = numbers.join(", ");
console.log(joinedNumbers); // Output: "1, 4, 5"
