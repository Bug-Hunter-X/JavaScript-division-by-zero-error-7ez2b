function foo(a, b) {
  if (b === 0) {
    return "Division by zero is not allowed"; // Handle error explicitly
  } else if (a === 0) {
    return 0;
  }
  return a / b;
}
console.log(foo(10, 0)); // Returns error message
console.log(foo(10, 2)); // Returns 5