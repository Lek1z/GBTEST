const computer = {
  'name': 'Asus',
  'cores': 16,
  'power': false,
  'start': function () {
    this.power = true
    console.log('Power on!')
  }
}

const computer2 = {
  'name': 'Asus',
  'cores': 16,
  'power': false,
  'start': function () {
    this.power = true
    console.log('Power on!')
  }
}

class Computer {
  name;
  cores;
  power;

  _prop1;

  constructor (n) {
    this.name = n
    this.start()
  }

  meth1 () {
    console.log('!!')
  }

  start () {
    this.power = true
    console.log('Power on', this.power)
    this._check()
  }

  _check () {
    console.log('!' in this)
  }
}

const c1 = new Computer('Asus')
const c2 = new Computer('Lenovo')
const c3 = new Computer('Apple')
const c4 = new Computer('HP')

c4.start()
c4._check()

console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)


// private public protected

const c = new Cat('Alice')
console.log(c)

class Good {
  price = 0
}

class MainGood extends Good{
  addInCart()
}

class GoodInCart extends Good {
  length = 0
}



class Button {
  title = 'My button'
  press()
  constructor () {
    document.querySelector('body').innerHTML = this.html
  }
}

class RoundBtn extends Button {

}

class GreenButton extends Button {

}

class Pet {
  _name = ''

  constructor (n) {
    this.name = n
  }

  eat () {
    console.log('Creature gonna eat')
  }

  voice () {
    console.log('?')
  }

  get name () {
    return this._name
  }

  // set name (n) {
  //   this._name = n
  // }
}

const p = new Pet(123,123,123,123)
console.log(p.name)
p.name = 1234
console.log(p.name)

class Cat extends Pet {
  constructor (arg1) {
    super(arg1)
  }

  voice () {
    console.log('Meow')
  }
}

class Dog extends Pet {
  constructor (arg1) {
    super(arg1)
  }

  voice () {
    console.log('Wow')
  }
}

const myPets = [new Cat(), new Dog()]
myPets.forEach(function (pet) {
  pet.voice()
})

function sum1 (arg1, arg2) {
  return arg1 + arg2
}

const sum2 = (arg1, arg2) => {
  console.log('???')
  return arg1 + arg2
}

sum1(1,2)
sum2(1,2)
