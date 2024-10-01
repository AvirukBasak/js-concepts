function applyOperation(x, operation) {
    return operation(x);
  }
  
  const double = (n) => n * 2;
  const square = (n) => n * n;
  
  console.log(applyOperation(5, double)); // Output: 10
  console.log(applyOperation(5, square)); // Output: 25
  