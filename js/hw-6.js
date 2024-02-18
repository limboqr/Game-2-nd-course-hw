// * Массивы
// * Task 1
const array = [1, 5, 4, 10, 0, 3]

for (let iArray = 0; iArray < array.length; iArray++) {
   if (array[iArray] === 10) {
      break
   }
   console.log(array[iArray])
}


// * Task 2
console.log(array[2]) // * 2 i числа 4
console.log(array.indexOf(4))


// * Task 3
const array3 = [1, 3, 5, 10, 20]
console.log(array3.join(' '))


// * Task 4
let array4 = [];

for (let iArray4 = 0; iArray4 < 3; iArray4++) {
   let subArray4 = [];

   for (let jArray4 = 0; jArray4 < 3; jArray4++) {
      subArray4.push(1);
   }
   array4.push(subArray4);
}

console.log(array4);


// * Task 5
let array5 = [1, 1, 1]

array5.push(2, 2, 2)

console.log(array5)


// * Task 6
let array6 = [9, 8, 7, 'a', 6, 5]

array6 = array6.sort()
let arrayA = array6.pop() // * arrayA = 'a'

console.log(array6)


// * Task 7
function userQuest() {
   const array7 = [9, 8, 7, 6, 5];
   let userAnswer = Number(prompt("Угадайте число от 1 до 10."));

   if (isNaN(userAnswer)) {
      console.log("Вы ввели не число!");
   } else if (array7.includes(userAnswer)) {
      console.log("Вы угадали!");
   } else {
      console.log("К сожалению, вы не угадали...");
   }
}

userQuest();


// * Task 8
// * 1
const str8 = 'abcdef'
let res8 = ''

for (const char of str8) {
   res8 = char + res8
}

console.log(res8)

// * 2
res8 = ''

for (let i = 0; i < str8.length; ++i) {
   res8 = str8[i] + res8
}

console.log(res8)

// * 3
res8 = ''

for (let i = str8.length - 1; i >= 0; --i) {
   res8 += str8[i]
}

console.log(res8)

// * 4
res8 = []

for (let i = str8.length - 1; i >= 0; --i) {
   res8.push(str8[i])
}

console.log(res8.join(''))


// * Task 9
const array9 = [[1, 2, 3,], [4, 5, 6]]
const result = array9.flat()
console.log(result)


// * Task 10
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < array10.length - 1; i++) {
   console.log(array10[i] + array10[i + 1])
}


// * Task 11
const array11 = [2, 5, 6]

const result11 = array11.map((item) => item ** 2)
console.log(result11)


// * Task 12
function getLengthWords(array) {
   return array.map((item) => item.length)
}

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']))


// * Task 13
function array13(array) {
   return array.filter((item) => item < 0)
}

console.log(array13([-1, 0, 5, -10, 56]))
console.log(array13([-25, 25, 0, -1000, -2]))
