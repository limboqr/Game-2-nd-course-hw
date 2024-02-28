// * Встроенные объекты
// * Task 1
let str = 'js'
console.log(str.toUpperCase())

console.log('js'.toUpperCase())

// * Task 2
function filterStartsWith(arrayStr, string) {
   return arrayStr.filter(str => str.toLowerCase().startsWith(string.toLowerCase()))
}

const arrayStr = ['Кошка', 'Кит', 'Комар', 'Носорог']
const string = 'ко'
const filteredStrings = filterStartsWith(arrayStr, string)
console.log(filteredStrings)

// * Task 3
const num = 32.58884;

const roundToNearest = num => {
   const decimalPart = num - Math.floor(num)

   return decimalPart > 0.5 ? Math.ceil(num) : Math.floor(num)
}

console.log(`До меньшего целого числа: ${Math.floor(num)}`)
console.log(`До большего целого числа: ${Math.ceil(num)}`)
console.log(`Ближайшее целое число: ${Math.round(num)}`)

// * Task 4
const numbArray = [52, 53, 49, 77, 21, 32]

console.log(Math.min(...numbArray))
console.log(Math.max(...numbArray))

// * Task 5
function randomNum() {
   return Math.floor(Math.random() * 10 + 1)
}

console.log(randomNum())

// * Task 6
function getRandomArrNumbers(userNum) {
   const result = []
   const length = Math.floor(userNum / 2)

   for (let i = 0; i < length; i++) {
      const randomIndex = Math.round(Math.random() * userNum)
      result.push(randomIndex)
   }

   return result
}

function promptDie(message, value) {
   let userNum = prompt(message, value)

   if (userNum === null || userNum.trim() === '') {
      return 'Вы ничтажество, Сээээр'
   }

   userNum = Number(userNum)

   if (isNaN(userNum)) {
      return 'Это не число о_О'
   }

   return userNum
}

let userNum = promptDie('Введите число', 8)

if (typeof userNum === "string") {
   console.log(userNum)
} else if (userNum <= 0) {
   console.log('0 и отрицательные числа не реботают =(')
} else {
   console.log(getRandomArrNumbers(userNum))
}

// * Task 7
function getRandomNum(minNum, maxNum) {
   return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}

function task7() {
   const maxNum = promptDie('Введите число от 10 до 20', 20)
   if (typeof userNum === "string") {
      console.log('Система обиделась')
      return console.log(userNum)
   } else if (isNaN(maxNum) || maxNum < 10 || maxNum > 20) {
      console.log('Система обиделась')
      return console.log('Не число или неверное число из предложенного')
   } else {
      console.log(maxNum)
   }

   const minNum = promptDie('Введите число от 0 до 5', 0)
   if (typeof userNum == "string") {
      return console.log(userNum)
   } else if (isNaN(minNum) || minNum < 0 || minNum > 5) {
      return console.log('Не число или неверное число из предложенного')
   } else {
      console.log(minNum)
   }

   console.log(`${getRandomNum(minNum, maxNum)} число в диапазоне указанных чисел`)
}

task7()

// * Task 8
console.log(new Date())

// * Task 9
let currentDate = new Date()

console.log(new Date(currentDate.setDate(currentDate.getDate() + 73)))

// * Task 10
function formatDate(date) {
   const monthNames = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
   ]

   const weekdayNames = [
      'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'
   ]

   const formattedDate = `Дата: ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} - это ${weekdayNames[date.getDay()]}`

   const formattedTime = `Время: ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`

   return `${formattedDate}\n${formattedTime}`
}

const currentDate = new Date()
console.log(formatDate(currentDate))

// * Task 11 ===> В main.js
