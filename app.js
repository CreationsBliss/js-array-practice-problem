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
