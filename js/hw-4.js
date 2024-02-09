// * Циклы
// * Task 1
let i = 0

while (i < 2) {
   console.log("Привет")
   i++
}


// * Task 2
i = 1

while (i <= 5) {
   console.log(i)
   i++
}


// * Task 3
i = 7

while (i <= 22) {
   console.log(i)
   i++
}


// * Task 4
let obj = {
   'Коля': 200,
   'Вася': 300,
   'Петя': 400,
}

for (key in obj) {
   if (obj[key]) {
      console.log(`${key} - зарплата ${obj[key]} долларов.`)
   }
}


// * Task 5
let n = 1000;
let num = 0;

while (n >= 50) {
   n = n / 2
   num++
}

console.log(`Получилось число ${n}. Число итеграций ${num}`);


// * Task 6
for (let friday = 2; friday < 29; friday += 7) {
   console.log(`Сегодня пятница, ${friday} число. Необходимо подготовить отчёт.`)
}