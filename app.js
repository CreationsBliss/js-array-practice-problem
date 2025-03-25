// Task-1: Create an array of 5 elements using the Array Constructor.

// Solution-1:
/* const arr = new Array(1, 2, 3, 4, 5);
console.log(arr); */

// Task-2: Create an array of 3 empty slots.

// Solution-2:
/* const arrOfThreeEmptySlots = new Array(3);
console.log(arrOfThreeEmptySlots); */

// Task-3: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

// Solution-3:
/* const arrOfSixElements = ["a", "b", "c", "d", "e", "f"];
const fourthElement = arrOfSixElements[arrOfSixElements.length - 3];
console.log(fourthElement); */

// Task-4: Use the for loop on the above array to print elements in the odd index.

// Solution-4:
/* const arrOfSixElements = ["a", "b", "c", "d", "e", "f"];
for (let index = 1; index < arrOfSixElements.length; index = index + 2) {
  const oddIndexElement = arrOfSixElements[index];
  console.log(oddIndexElement);
} */

// Task-5: Add one element at the front and the end of an array.

// Solution-5:
/* const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
arr.push(6);
console.log(arr); */

// Task-6: Remove an element from the front and the end of an array.

// Solution-6:
/* const arr = [1, 2, 3, 4, 5];
arr.shift();
arr.pop();
console.log(arr); */

// Task-7: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

// Solution-7:
/* const favouriteFoods = [
  "Pizza",
  "Burger",
  "Sushi",
  "Pasta",
  "Tacos",
  "Salad",
  "Steak",
  "Ice Cream",
  "Sandwich",
  "Soup",
];

const [, , , , , salad] = favouriteFoods;
console.log(salad); */

// Task-8:Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

// Solution-8:
/* const [pizza, burger, ...rest] = [
  "Pizza",
  "Burger",
  "Sushi",
  "Pasta",
  "Tacos",
  "Salad",
  "Steak",
  "Ice Cream",
  "Sandwich",
  "Soup",
];
console.log(rest); */

// Task-9: Clone an Array(Shallow cloning).

// Solution-9:
/* const arr = [1, 2, 3, 4, 5];
const copyArray = [...arr];
console.log(copyArray); */

// Task-10: Empty an array using its length property.

// Solution-10:
/* const arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr); */

// Task-11: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.

// Solution-11:
/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < arr.length; index++) {
  console.log("index:", index, "element:", arr[index]);
  if (arr[index] === 5) {
    arr.length = 6;
    console.log(arr);
    break;
  }
} */

// Task-12: Create an Array of 10 elements. Use the splice() method to empty the array.

// Solution-12:
/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.splice(0, arr.length);
console.log(arr); */

// Task-13: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?

// Solution-13:
/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.length = 0;
এটি সরাসরি অ্যারেটির দৈর্ঘ্য (length) ০ করে দেয়, ফলে অ্যারের সমস্ত এলিমেন্ট মেমোরি থেকে দ্রুত মুছে যায়। এটি সবচেয়ে দ্রুত ও কার্যকরী পদ্ধতি, কারণ এটি শুধুমাত্র একটি অপারেশন ব্যবহার করে মেমোরি ম্যানেজমেন্ট করে। */

// Task-14: What happens when you concatenate two empty arrays?

// Solution-14:
/* If we concatenate two empty arrays then it will produce an empty array.
const arr1 = [];
const arr2 = [];
const newArr = arr1.concat(arr2);
console.log(newArr); */

// Task-15: How can you check if a value is partially matching with any of the elements of an Array?

// Solution-15:
/* let fruits = ["apple", "banana", "cherry", "grape"];
let searchText = "err";
for (let index = 0; index < fruits.length; index++) {
  const partiallyMatched = fruits[index].includes(searchText);
  if (partiallyMatched) {
    console.log(fruits[index]);
  }
} */

// Task-16: What is the difference between the slice() and splice() methods?

// Solution-16:
/* slice(): Extracts a portion of an array without modifying the original array.
splice(): Adds/removes elements from an array and modifies the original array. */

// Task-17: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

// Solution-17:
/* let alphanumericArray = ["abc123", "xyz456", "hello2024", "A1B2C3", "test99"];
const ascendingSort = alphanumericArray.toSorted();
console.log(ascendingSort);
const descendingSort = alphanumericArray.toSorted((a, b) => {
  return a === b ? 0 : a > b ? -1 : 1;
});
console.log(descendingSort);
console.log(alphanumericArray); */

// Task-18: Can you give examples of sparse and dense arrays?

// Solution-18:
/* Sparse (বিচ্ছিন্ন) Array: যে অ্যারেতে কিছু ইনডেক্স খালি থাকে বা undefined থাকে, তাকে Sparse Array বলে। let sparseArray = [1, , 3, , 5];  

Dense (ঘন) Array: যে অ্যারেতে সব ইনডেক্সে মান থাকে, তাকে Dense Array বলে। let denseArray = [1, 2, 3, 4, 5]; */

// Task-19: Give a practical usages of the .fill() method.

// Solution-19:
/* .fill() মেথড ব্যবহার করে আমরা একটি অ্যারের সব এলিমেন্টকে নির্দিষ্ট মান দিয়ে পরিবর্তন করতে পারি। এটি সাধারণত ডিফল্ট ভ্যালু সেট করার জন্য ব্যবহৃত হয়।
let arr = new Array(5).fill(0); // ৫টি ০ দিয়ে অ্যারে তৈরি
console.log(arr);  */

// Task-20: How to convert an array to a string?

// Solution-20:
/* const arr = ["a", "b", "c", "d", "e"];
const arrayToString = arr.join("");
console.log(arrayToString); */

// Task-21: Can you filter employees who work in the "Engineering" department?

// Solution-21:
/* const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];
const engineeringDepartment = departments.filter((department) => {
  return department.name === "Engineering";
});
console.log(engineeringDepartment); */

// Task-22: Create a new array that combines employee names and department names in the format: "Alice (HR)".

// Solution-22:

// Task-23: Find the highest salary among employees.

// Solution-23:
/* const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

let highestSalary = 0;
employees.forEach((employee) => {
  if (employee.salary > highestSalary) {
    highestSalary = employee.salary;
  }
});
console.log(highestSalary); */

// Task-24: Check if there is at least one employee in the "Sales" department.

// Solution-24:
/* const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

const isThereSalesDepartmentEmployee = departments.some((department) => {
  return department.name === "Sales";
});
console.log(isThereSalesDepartmentEmployee); */

// Task-25: Write a function to filter employees earning more than 6000.

// Solution-25:
/* const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
const employeesEarningMoreThanSixThousand = employees.filter((employee) => {
  return employee.salary > 6000;
});
console.log(employeesEarningMoreThanSixThousand); */

// Task-26: Create an array of employee names only.

// Solution-26:
/* const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
const employeesName = employees.map((employee) => employee.name);
console.log(employeesName); */

// Task-27: Calculate the total salary of all employees using reduce method.

// Solution-27:
/* const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
const totalSalary = employees.reduce((accumulator, employee) => {
  return accumulator + employee.salary;
}, 0);

console.log(totalSalary); */

// Task-28: Is there any employee earning less than 5000?

// Solution-28:
/* const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const employeeEarningLessThanFiveThousand = employees.some((employee) => {
  return employee.salary > 5000;
});
console.log(employeeEarningLessThanFiveThousand); */

// Task-29: Find the first employee who earns exactly 5100.

// Solution-29:
/* const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
const firstEmployeeEarnsFiveThousandOneHoundred = employees.find((employee) => {
  return employee.salary === 5100;
});
console.log(firstEmployeeEarnsFiveThousandOneHoundred); */

// Task-30: Find the last employee in the "HR" department.

// Solution-30:
/* const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const hrDepartment = departments.findLastIndex(
  (department) => department.name === "HR"
);

const hREmployee = hrDepartment >= 0 ? departments[hrDepartment] : null;

const hrEmployees = employees.filter(
  (emp) => emp.departmentId === hREmployee.id
);

const lastHREmployee =
  hrEmployees.length > 0 ? hrEmployees[hrEmployees.length - 1] : null;

console.log("Last HR Employee:", lastHREmployee); */
