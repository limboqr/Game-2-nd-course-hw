// * Переменные и типы данных
// * Task 1
let a = 10
console.log(a)

a = 20
console.log(a)

// * Task 2
let iPhoneOne = 2007
console.log(iPhoneOne)

// * Task 3
const nameCreatorJavaScript = "Брендан Эйк"
console.log(nameCreatorJavaScript)

// * Task 4
const one = 10
const two = 2

console.log(10 + 2)
console.log(10 - 2)
console.log(10 * 2)
console.log(10 / 2)

// * Task 5
let result = Number(two**5)
console.log(result)

// * Task 6
a = 9
b = 2

let x = 9 % 2
console.log(x)

// * Task 7

let num = 1
num += 5
num -= 3
num *= 7
num /= 3
++num
--num
console.log(num)

// * Task 8
const age = +prompt("Сколько вам лет?")
console.log(age)

// * Task 9
let user = {
   name: "Pavel",
   age: null,
   isAdmin: true,
}

// * Task 9.1
user.cityOfResidence = "Novosibirsk"

// * Task 9.2
user.age = Number(prompt())

// * Task 9.3
delete user.cityOfResidence

//  * Task 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?")
console.log(user[info])

//  * Task 10
let nameUser = prompt("Введите ваше имя")
console.log(`Привет, ${nameUser}!`)
