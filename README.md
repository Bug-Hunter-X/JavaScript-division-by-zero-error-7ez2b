# JavaScript Division by Zero Bug

This repository demonstrates a common error in JavaScript: division by zero. The `bug.js` file contains code that throws an error because of an attempt to divide by zero.  The `bugSolution.js` file shows how to handle such cases using input validation.

## Problem

In JavaScript, dividing a number by zero results in `Infinity` or throws an error depending on the context. This can cause unexpected behavior in applications.

## Solution

The best solution is to implement input validation and error handling before performing any divisions.  The `bugSolution.js` demonstrates this using `if` conditions to ensure the divisor is not zero.