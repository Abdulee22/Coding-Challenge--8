// Task 1 - Employee Salary Calculation //
function calculateSalary(baseSalary, bonus, taxRate) { // Function
let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // Formula
return `Net Salary: $${netSalary.toFixed(2)}`;}
console.log(calculateSalary(5000, 500, 0.1)); // output 5000.00
console.log(calculateSalary(7000, 1000, 0.15)); // output 6950.00

// Task 2 - Product Price After Discount //
const calculateDiscount = function(price, discountRate) { // Function
let finalPrice = price - (price * discountRate); // Formula
return `Final Price: $${finalPrice.toFixed(2)}`;};
console.log(calculateDiscount(100, 0.2)); // output 80.00
console.log(calculateDiscount(250, 0.15)); // output 212.50


