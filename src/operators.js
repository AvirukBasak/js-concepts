// JavaScript Operators Example

// 1. Arithmetic Operators
console.log("=== Arithmetic Operators ===");
let a = 10;
let b = 5;

console.log("Addition: " + (a + b));         // 15
console.log("Subtraction: " + (a - b));      // 5
console.log("Multiplication: " + (a * b));   // 50
console.log("Division: " + (a / b));         // 2
console.log("Modulus (Remainder): " + (a % b));  // 0
console.log("Exponentiation: " + (a ** b));  // 10^5 = 100000

// 2. Assignment Operators
console.log("\n=== Assignment Operators ===");
let c = 10;
console.log("c = " + c);

c += 5; // Equivalent to c = c + 5
console.log("c += 5 => " + c);  // 15

c -= 2; // Equivalent to c = c - 2
console.log("c -= 2 => " + c);  // 13

c *= 3; // Equivalent to c = c * 3
console.log("c *= 3 => " + c);  // 39

c /= 3; // Equivalent to c = c / 3
console.log("c /= 3 => " + c);  // 13

c %= 3; // Equivalent to c = c % 3
console.log("c %= 3 => " + c);  // 1

// 3. Comparison Operators
console.log("\n=== Comparison Operators ===");
let x = 7, y = 12;

console.log("x == y: " + (x == y));    // false
console.log("x != y: " + (x != y));    // true
console.log("x === 7: " + (x === 7));  // true (strict equality)
console.log("x !== '7': " + (x !== '7'));  // true (strict inequality)

console.log("x > y: " + (x > y));      // false
console.log("x < y: " + (x < y));      // true
console.log("x >= 7: " + (x >= 7));    // true
console.log("y <= 12: " + (y <= 12));  // true

// 4. Logical Operators
console.log("\n=== Logical Operators ===");

let isTrue = true, isFalse = false;

console.log("true && false: " + (isTrue && isFalse)); // false (AND)
console.log("true || false: " + (isTrue || isFalse)); // true (OR)
console.log("!true: " + (!isTrue));                   // false (NOT)

// 5. Increment/Decrement Operators
console.log("\n=== Increment/Decrement Operators ===");

let count = 0;
console.log("Initial count: " + count); // 0

count++;
console.log("Post-increment: " + count); // 1

++count;
console.log("Pre-increment: " + count); // 2

count--;
console.log("Post-decrement: " + count); // 1

--count;
console.log("Pre-decrement: " + count); // 0

// 6. Ternary Operator
console.log("\n=== Ternary Operator ===");
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, can't vote";
console.log("Can vote? " + canVote);  // Yes, can vote

// 7. Bitwise Operators
console.log("\n=== Bitwise Operators ===");
let bitwiseA = 5;  // 0101 in binary
let bitwiseB = 3;  // 0011 in binary

console.log("5 & 3 (AND): " + (bitwiseA & bitwiseB));  // 1 (0001)
console.log("5 | 3 (OR): " + (bitwiseA | bitwiseB));   // 7 (0111)
console.log("5 ^ 3 (XOR): " + (bitwiseA ^ bitwiseB));  // 6 (0110)
console.log("~5 (NOT): " + (~bitwiseA));               // -6

// 8. Typeof Operator
console.log("\n=== Typeof Operator ===");
let stringVal = "Hello";
let numberVal = 123;
let booleanVal = true;

console.log("typeof stringVal: " + typeof stringVal);   // string
console.log("typeof numberVal: " + typeof numberVal);   // number
console.log("typeof booleanVal: " + typeof booleanVal); // boolean

// 9. Nullish Coalescing Operator (ES2020)
console.log("\n=== Nullish Coalescing Operator ===");
let undefinedVar = undefined;
let nullVar = null;
let definedVar = "I am defined";

console.log(undefinedVar ?? "Default Value"); // "Default Value"
console.log(nullVar ?? "Default Value");      // "Default Value"
console.log(definedVar ?? "Default Value");   // "I am defined"
