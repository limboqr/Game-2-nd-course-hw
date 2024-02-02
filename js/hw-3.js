// * Условное ветвление
// * Task 1
let password = 'пароль'

let userPassword = prompt(`Введите ${password}`)

if (userPassword === password) {
   console.log("Пароль введен верно")
} else {
   console.log("Пароль введен неправильно")
}


// * Task 2
// ? c = 88
let c = 88

let result = c > 0 && c < 10 ? 'Верно' : 'Неверно'
console.log(result)

// ? c = 0
c = 0

result = c > 0 && c < 10 ? 'Верно' : 'Неверно'
console.log(result)

// ? c = 10
c = 10

result = c > 0 && c < 10 ? 'Верно' : 'Неверно'
console.log(result)

// ? c = −3
c = -3

result = c > 0 && c < 10 ? 'Верно' : 'Неверно'
console.log(result)

// ? c = 2
c = 2

result = c > 0 && c < 10 ? 'Верно' : 'Неверно'
console.log(result)


// * Task 3
// ? d = 43 & e = 268
let d = 43
let e = 268

result = d > 100 || e > 100 ? 'Верно' : 'Неверно' // ? Верно
console.log(result)

// ? d = 61 & e = 24
d = 61
e = 24

result = d > 100 || e > 100 ? 'Верно' : 'Неверно' // ? Неверно
console.log(result)


// * Task 4
let a = '2'
let b = '3'
// TODO Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
// ? alert(a + b)

console.log(Number(a) + Number(b))
console.log((+a) + (+b))
console.log(-(-a + -b))


// * Task 5
let monthNumber = Number(prompt('Введите номер месяца'))

// switch (monthNumber) {
//    case 1:
//       console.log('Зима')
//       break;
//    case 2:
//       console.log('Зима')
//       break;
//    case 3:
//       console.log('Весна')
//       break;
//    case 4:
//       console.log('Весна')
//       break;
//    case 5:
//       console.log('Весна')
//       break;
//    case 6:
//       console.log('Лето')
//       break;
//    case 7:
//       console.log('Лето')
//       break;
//    case 8:
//       console.log('Лето')
//       break;
//    case 9:
//       console.log('Осень')
//       break;
//    case 10:
//       console.log('Осень')
//       break;
//    case 11:
//       console.log('Осень')
//       break;
//    case 12:
//       console.log('Зима')
//       break;

//    default:
//       console.log('Нет такого месяца')
//       break;
// }

switch (monthNumber) {
   case 12:
   case 1:
   case 2:
      console.log('Зима')
      break;
   case 3:
   case 4:
   case 5:
      console.log('Весна')
      break;
   case 6:
   case 7:
   case 8:
      console.log('Лето')
      break;
   case 9:
   case 10:
   case 11:
      console.log('Осень')
      break;

   default:
      console.log('Нет такого месяца')
      break;
}


// * Task 6
// TODO Сделаны hover эффекты с animation


// * Task 7
let numUser = Number(prompt('Пожалуйста, введите любое число'))

numUser = Number(numUser)

if (numUser % 2) {
   console.log('Число нечетное')
} else {
   console.log('Число четное')
}


// * Task 8
// TODO (0 — iOS, 1 — Android)
const clientOS = 1

if (clientOS) {
   console.log('Установите версию приложения для Android по ссылке')
} else {
   console.log('Установите версию приложения для iOS по ссылке')
}


// * Task 9
let clientDeviceYear = 2014

if (clientDeviceYear >= 2015) {
   console.log('Установите версию приложения для Android по ссылке')
} else {
   console.log('Установите облегченную версию приложения для Android по ссылке')
}