// Human
//   name
//   walk()
//   talk()

// const user = {
//   name: 'Dima'
// }

// const key = 'isMy'

// const computer = {
//   'name': 'Asus',
//   'cores': 16,
//   'power': false,
//   'color': undefined,
//   ',': null,
//   [key]: true,
//   key1: null,
// }

// const computer2 = Object.assign({}, computer)

// console.log(computer.name)
// // console.log(computer.isMy) ==== console.log(computer['isMy'])
// console.log(computer[','])

// console.log()


// computer.age = 12
// console.log(computer.age)

// delete computer.age
// console.log(computer.age)

// for (const key in computer) {

// }

// Object.keys(computer).filter(v => v === 'age')

// const obj = {}

// function updateObject (object, key, value) {
//   object[key] = value
//   console.log(object)
// }

// updateObject(obj, 'k', 'v')

// let b = 0;

// function changeB(b) {
//   b++;
//   console.log(b);
// }

// changeB(b);
// console.log(b);

// let b = { status: true }; // 00101010101

// function changeB(b) {
//   b.status = false
//   console.log(b)
// }

// changeB(b)
// console.log(b)

const computer = {
  'name': 'Asus',
  'cores': 16,
  'power': false,
  'start': function () {
    // 'power' -> true
    this.power = true
    console.log('Power on!')
  }
}

// computer.start()
const status = computer.power
console.log(status)
