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
