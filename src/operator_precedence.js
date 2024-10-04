// JavaScript Operator Precedence Example

console.log("=== Operator Precedence Demonstration ===");

// 1. Multiplication has higher precedence than Addition
let result1 = 10 + 5 * 2;  
console.log("10 + 5 * 2 = " + result1);  // 10 + (5 * 2) = 10 + 10 = 20

// 2. Parentheses have the highest precedence
let result2 = (10 + 5) * 2;
console.log("(10 + 5) * 2 = " + result2);  // (10 + 5) * 2 = 15 * 2 = 30

// 3. Division has higher precedence than Subtraction
let result3 = 100 - 50 / 5;
console.log("100 - 50 / 5 = " + result3);  // 100 - (50 / 5) = 100 - 10 = 90

// 4. Unary negation (right-to-left) has higher precedence than addition
let result4 = -10 + 5;
console.log("-10 + 5 = " + result4);  // -10 + 5 = -5

// 5. Logical AND (&&) has higher precedence than Logical OR (||)
let result5 = true || false && false;
console.log("true || false && false = " + result5);  // true || (false && false) = true || false = true

// 6. Assignment operators (right-to-left)
let x = 10;
let y = 20;
x = y = 50;  // Assignment is right-to-left, y = 50, then x = y
console.log("x = y = 50 => x: " + x + ", y: " + y);  // x: 50, y: 50

// 7. Conditional (Ternary) Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote (age >= 18)? " + canVote);  // Output: Yes

// 8. Precedence of Increment (++) and Multiplication (*)
let a = 5;
let result6 = ++a * 2;  // Pre-increment is applied first
console.log("++5 * 2 = " + result6);  // (++5) * 2 = 6 * 2 = 12

let b = 5;
let result7 = b++ * 2;  // Post-increment is applied after multiplication
console.log("5++ * 2 = " + result7);  // (5 * 2) = 10, then b becomes 6

// 9. Precedence of Comparison Operators and Logical NOT (!)
let result8 = !(5 > 3);
console.log("!(5 > 3) = " + result8);  // !(true) = false

// 10. Precedence of Addition (+) and String Concatenation
let result9 = 10 + 5 + " apples";
console.log("10 + 5 + ' apples' = " + result9);  // 15 + " apples" = "15 apples"
