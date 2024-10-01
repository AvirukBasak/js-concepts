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
