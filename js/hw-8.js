// * Callback, setTimeout, setInterval
// * Task 1
const people1 = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
]

console.log(people1.sort((a, b) => {
   return a.age - b.age
}))


// * Task 2
function isPositive(num) {
   return num > 0
}

function isMale(person) {
   return person.gender === 'male'
}

function filter(arr, callback) {
   const filteredArr = []

   for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
         filteredArr.push(arr[i])
      }
   }

   return filteredArr
}

console.log(filter([3, -4, 1, 9], isPositive))

const people = [
   { name: 'Глеб', gender: 'male' },
   { name: 'Анна', gender: 'female' },
   { name: 'Олег', gender: 'male' },
   { name: 'Оксана', gender: 'female' }
]

console.log(filter(people, isMale))


// * Task 3
let secondsPassed = 0

const intervalId = setInterval(function () {
   console.log(new Date().toLocaleString('ru-Ru'))

   secondsPassed += 3
   if (secondsPassed >= 30) {
      console.log('30 секунд прошло')
      clearInterval(intervalId)
   }
}, 3000)


// * Task 4
function delayForSecond(callback) {
   setTimeout(callback, 1000)
}

delayForSecond(function () {
   console.log('Привет, Глеб!')
})


// * Task 5
function delayForSecond(cb) {
   setTimeout(() => {
      console.log('Прошла одна секунда')
      if (cb) { cb() }
   }, 1000)
}

function sayHi(name) {
   console.log(`Привет, ${name}!`)
}

delayForSecond(() => sayHi('Глеб'))
