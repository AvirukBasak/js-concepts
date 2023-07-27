const factorial = function(n, acc = 1) {
  if (n <= 1) return acc;
  // this line is incorrect, fix it
  return factorial(n, acc * n);
}

console.log(factorial(5));
