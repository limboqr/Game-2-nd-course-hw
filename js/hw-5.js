// * Функции
// * Task 1
function minNum(a, b) {
   if (a < b) {
      return a
   } else {
      return b
   }
}

let a = 10
let b = 8
console.log(minNum(a, b))

// * Task 2

function question(num) {
   return num % 2 === 0 ? 'Число четное' : 'Число нечетное'
}

let num = Number(prompt("Введите число"))

console.log(question(num))

// * Task 3
// * 3.1
function square(a) {
   a = a ** 2
   console.log(a)
}

let a = Number(prompt("Введите число", 24))

square(a)

// * 3.2
function square(a) {
   a = a ** 2
   return a
}

let a = Number(prompt("Введите число", 24))

console.log(square(a))

// * Task 4
function userAge(age) {
   if (age < 0) {
      console.log("Вы ввели неправильное значение")
   } else if (age >= 13) {
      console.log("Добро пожаловать!")
   } else if (age <= 12) {
      console.log("Привет, друг!")
   }
}

let age = Number(prompt("Сколько вам лет?"))

userAge(age)

// * Task 5
function sum(a, b) {
   if (isNaN(a) || isNaN(b)) {
      console.log("Одно или оба значения не являются числом")
   } else if (sum = a + b) {
      console.log(sum)
   }
}

let a = Number(prompt("Введите перове число"))
let b = Number(prompt("Введите второе число"))

sum(a, b)

// * Task 6
function cube(userNum) {
   if (isNaN(userNum)) {
      console.log("Переданный параметр не является числом")
   } else if (cubeNum = userNum ** 3) {
      console.log(`${userNum} в кубе равняется ${cubeNum}`)
   }
}

let userNum = Number(prompt("Введите число"))

cube(userNum)

// * Task 7
function getArea() {
   return Math.PI ** 2 * this.radius
}

function getPerimeter() {
   return 2 * Math.PI * this.radius
}

let circle1 = {
   radius: 28,
   getArea: getArea,
   getPerimeter: getPerimeter,
}

let circle2 = {
   radius: 37,
   getArea: getArea,
   getPerimeter: getPerimeter,
}

console.log(circle1.getArea())
console.log(circle1.getPerimeter())

console.log(circle2.getArea())
console.log(circle2.getPerimeter())

// * Task 8 ===> В main.js
