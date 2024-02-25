// * 2.5 Функции
// * Task 8
game1.addEventListener("click", () => {
   const userNumMounth = Number(prompt("Введите номер месяца"))

   if (isNaN(userNumMounth)) {
      console.log("Вы ввели какую-то дичь...")
   } else if (userNumMounth === 0 || userNumMounth >= 13) {
      console.log("Такого месяца не существует")
   } else if (userNumMounth === 12 || userNumMounth === 1 || userNumMounth === 2) {
      console.log("Зима")
   } else if (userNumMounth === 3 || userNumMounth === 4 || userNumMounth === 5) {
      console.log("Весна")
   } else if (userNumMounth === 6 || userNumMounth === 7 || userNumMounth === 8) {
      console.log("Лето")
   } else if (userNumMounth === 9 || userNumMounth === 10 || userNumMounth === 11) {
      console.log("Осень")
   }
})

// * 2.7 Встроенные объекты
// * Task 11
game2.addEventListener("click", () => {
   let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']

   fruits = fruits.sort(() => Math.random() - 0.5)
   alert(fruits.join(', '))

   const userFirst = prompt('Чему равнялся первый элемент массива?')
   const userSecond = prompt('Чему равнялся последний элемент массива?')

   const result1 = userFirst && userFirst.toLowerCase() === fruits[0].toLowerCase()
   const result2 = userSecond && userSecond.toLowerCase() === fruits.slice(-1)[0].toLowerCase()

   if (result1 && result2) {
      console.log('Поздравляем, вы победили в этой чудесной игре.\nP.S.: "Антон"')
   } else if (result1 || result2) {
      console.log('Вы были близки к победе!')
   } else {
      console.log('Молодэц баратэн, ты не лох, но лох')
   }
})
