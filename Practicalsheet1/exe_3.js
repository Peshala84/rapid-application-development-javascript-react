function findLargeNumber(num1, num2, num3) {
    let largest;

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
    return largest;
}
let num1 = parasefloat(prompt("Enter the first number:"));
let num2 = parasefloat(prompt("Enter the second number:"));
let num3 = parasefloat(prompt("Enter the third number:"));

let result = findLargeNumber(num1, num2, num3);
console.log(result);