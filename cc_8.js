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

// Task 3 - Service Fee Calculation //
const calculateServiceFee = (amount, serviceType) => { // Function
let feeRate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : 0.05;
let fee = amount * feeRate; // Fee Calculation
return `Service Fee: $${fee.toFixed(2)}`;};
console.log(calculateServiceFee(200, "Premium")); // output 30.00
console.log(calculateServiceFee(500, "Standard")); // output 50.00

