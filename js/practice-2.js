// Task #1
// function checkAge(age) {
//   if (age>=18) {
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// Task #2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
  
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

// Task #3
// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// Task #4
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// Task #5
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = "apple";
// const secondElement = "plum";
// const lastElement = "orange";
// console.log(fruits);
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// Task #6
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// Task #7
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruits.length);

// Task #8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(fruits);
// console.log(fruits.length);

// Task #9
// function getExtremeElements(array) {
// firstItem = array[0];
// lastItem = array[array.length-1];
// console.log(firstItem);
// console.log(lastItem);
// itemEnd = [firstItem, lastItem];
// console.log(itemEnd);
// return itemEnd;
// }

// Task #10
// function splitMessage(message, delimiter) {
// let words;
// words = message.split(delimiter)
// return words;
// }

// Task #11
//  function calculateEngravingPrice(message, pricePerWord) {
//  let words = message.split(" ");
//  allPrice = words.length * pricePerWord;
//  return allPrice;
// }

// Task #12
// function makeStringFromArray(array, delimiter) {
//   let string;
// string = array.join(delimiter);
//   return string;
// }

// Task #13
// function slugify(title) {
// let normalizedTitle = title.toLowerCase();
//   let words = normalizedTitle.split(" ");
//   let slug = words.join("-");
//   return slug;
// }

// Task #14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// Task #15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);

// Task #16
// function makeArray(firstArray, secondArray, maxLength) {
// const allArray = firstArray.concat(secondArray);
//   const newArray = allArray.slice(0, maxLength);
//   return newArray;
//   }

// Task #17
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i +=1 ) {
// console.log(i);
// }

// Task #18
// function calculateTotal(number) {
//     let sum = 0;
//   for(let i = 1; i <= number; i += 1){
//     sum += i;
//     }
//     console.log(sum)
//   return sum;
// }

// Task #19
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// Task #20
// function calculateTotalPrice(order) {
//   let total = 0;
// for(let i = 0; i < order.length; i+=1){
//   total += order[i];
// }
//   return total;
// }

// Task #21
// function findLongestWord(string) {
// let word;
//   let wordLength = 0;
//   let longestWord;
//   word = string.split(" ");
//   for (i = 0; i < word.length; i += 1) {
//     wordLength = word[2].length;
    
//     if (word[i].length > wordLength) {
//         longestWord = word[i];
//       return longestWord;
//       }
//     }
// }

// Task #22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i)
// }
//   return numbers;
// }

// Task #23
// function filterArray(numbers, value) {
// let num = []
//  for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] > value) {
//      num.push(numbers[i]);
//    }
//  }
// return num;
// }

// Task #24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }

// Task #25
function getCommonElements(array1, array2) {
  // Change code below this line
let arr = [];
  for (i = 0; i < array1.length; i += 1) {
    let array = array1[i];
    if (array2.includes(array)) {
      arr.push(array1[i])
  }
  }
return arr;
 // Change code above this line
}