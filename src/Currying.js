function multiply(a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      };
    };
  }
  
  console.log(multiply(2)(3)(4)); // Output: 24
  