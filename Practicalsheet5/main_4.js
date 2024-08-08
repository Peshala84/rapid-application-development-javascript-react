// Define the factorial function
function factorial(n) {
    if (n < 0) {
        return "Input must be a positive integer!";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage
const num = 5;
console.log(`The factorial of ${num} is:`, factorial(num));
