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

// Task 4 - Car Rental Cost Calculation //
function calculateRentalCost(days, carType, insurance = false) { // Function
let dailyRate = carType === "Economy" ? 40 : carType === "Standard" ? 60 : 100;
let totalCost = (dailyRate * days) + (insurance ? 20 * days : 0);
return `Total Rental Cost: $${totalCost}`;}
console.log(calculateRentalCost(3, "Economy", true)); // output 180
console.log(calculateRentalCost(5, "Luxury", false)); // output 500

// Task 5 - Loan Payment Calculation //
function calculateLoanPayment(principal, rate, time) { // Function
let totalPayment = principal + (principal * rate * time); // Formula
return `Total Payment: $${totalPayment.toFixed(2)}`;}
console.log(calculateLoanPayment(1000, 0.05, 2)); // output 1100.00
console.log(calculateLoanPayment(5000, 0.07, 3)); // output 6050.00

// Task 6 - Identifying Large Transactions //
let transactions = [200, 1500, 3200, 800, 2500]; // Transactions
function filterLargeTransactions(transactions, filterFunction) { // Function
return transactions.filter(filterFunction);}
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // output [1500, 3200, 2500]

// Task 7 - Shopping Cart Tracker //
function createCartTracker() { // Function
let total = 0;
return function(amount) {
 total += amount; // Running Total
return `Total Cart Value: $${total}`;};}
let cart = createCartTracker();
console.log(cart(20)); // output 20
console.log(cart(35)); // output 55