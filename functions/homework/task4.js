function divide(numerator, denominator) {
    try {
      if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Division cannot be performed due to the invalid input data");
      }
      if (denominator === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return numerator / denominator;
    } catch (err) {
      console.error(err.message);
    } finally {
      console.log("Operation finished");
    }
  }
  
  // Використання функції
  let result = divide(10, 5);
  console.log("Result:", result);
  
  result = divide(20, "text");
  console.log("Result:", result);
  
  result = divide(50, 0);
  console.log("Result:", result);