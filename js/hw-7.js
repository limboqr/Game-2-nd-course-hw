// * Встроенные объекты
// * Task 1
let str = 'js'
console.log(str.toUpperCase())

console.log('js'.toUpperCase())

// * Task 2
const arrayStr = ['Кошка', 'Кит', 'Комар', 'Носорог', 'Дракон']
const str = 'ко'

console.log(arrayStr.filter((item) => item.toLowerCase().includes(str.toLowerCase()))) // * Кошка, Комар, Дракон

// * Task 3
const num = 32.58884;

const roundToNearest = num => {
   const decimalPart = num - Math.floor(num)

   return decimalPart > 0.5 ? Math.ceil(num) : Math.floor(num)
}

console.log(`До меньшего целого числа: ${Math.floor(num)}`)
console.log(`До большего целого числа: ${Math.ceil(num)}`)
console.log(`Ближайшее целое число: ${roundToNearest(num)}`)

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

   for (let i = 0; i < userNum; i++) {
      const randomIndex = Math.round(Math.random() * userNum)
      result.push(randomIndex)
      userNum -= 1
   }

   return result
}

const userNum = Number(prompt('Введите число', 8))

if (isNaN(userNum)) {
   console.log('Это не число о_О')
} else if (userNum <= 0) {
   console.log('0 и отрицательные числа не реботают =(')
} else {
   console.log(getRandomArrNumbers(userNum))
}

// * Task 7
function getRandomNum(minNum, maxNum) {
   return Math.round(Math.random() * (maxNum - minNum + 1)) + minNum
}

const maxNum = Number(prompt('Введите число от 10 до 20', 20))
if (isNaN(maxNum) || maxNum < 10 || maxNum > 20) {
   console.log('Не число или неверное число из предложенного')
} else {
   console.log(maxNum)
}

const minNum = Number(prompt('Введите число от 0 до 5', 0))
if (isNaN(minNum) || minNum < 0 || minNum > 5) {
   console.log('Не число или неверное число из предложенного')
} else {
   console.log(minNum)
}

if (isNaN(maxNum) || isNaN(minNum)) {
   console.log('Одно или оба из значений не число, или введено не корректное заначение')
} else {
   console.log(`${getRandomNum(minNum, maxNum)} число в диапазоне указанных чисел`)
}

// * Task 8
console.log(new Date())

// * Task 9
let currentDate = new Date()

console.log(new Date(currentDate.getTime() + 73 * 24 * 60 * 60 * 1000))

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
