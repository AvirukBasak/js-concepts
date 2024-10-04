// JavaScript Loop Examples

// 1. for loop
console.log("=== For Loop ===");
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
// Output: Iteration 0, Iteration 1, Iteration 2, Iteration 3, Iteration 4


// 2. while loop
console.log("\n=== While Loop ===");
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}
// Output: Count 0, Count 1, Count 2, Count 3, Count 4


// 3. do-while loop
console.log("\n=== Do-While Loop ===");
let num = 5;
do {
    console.log("Number: " + num);
    num--;
} while (num > 0);
// Output: Number 5, Number 4, Number 3, Number 2, Number 1


// 4. for...of loop (for arrays and iterable objects)
console.log("\n=== For...of Loop ===");
const array = [10, 20, 30, 40];
for (let value of array) {
    console.log("Value: " + value);
}
// Output: Value 10, Value 20, Value 30, Value 40


// 5. for...in loop (for object properties)
console.log("\n=== For...in Loop ===");
const person = {
    name: "John",
    age: 25,
    profession: "Developer"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output: name: John, age: 25, profession: Developer


// 6. forEach loop (for arrays)
console.log("\n=== Array.forEach Loop ===");
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num, index) {
    console.log("Index: " + index + ", Value: " + num);
});
// Output: Index 0, Value 1; Index 1, Value 2; Index 2, Value 3; ...


/* 7. break statement (Exit loop early) */
console.log("\n=== Break in a Loop ===");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at i = " + i);
        break;
    }
    console.log("i = " + i);
}
// Output: i = 0, i = 1, ..., Breaking at i = 5


/* 8. continue statement (Skip current iteration) */
console.log("\n=== Continue in a Loop ===");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping i = " + i);
        continue;
    }
    console.log("i = " + i);
}
// Output: i = 0, i = 1, Skipping i = 2, i = 3, i = 4
