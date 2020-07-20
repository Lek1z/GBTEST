function generateNumber () {
  const arr = []
  while (arr.length < 4) {
    const d = Math.floor(Math.random() * 10)
    if (arr.indexOf(d) < 0) {
      arr.push(d)
    }
  }
  return arr.join('')
}

// [1,2,3,4].join('') -> '1234'


function play () {
  const N = generateNumber() // '1234' (3)
  console.log(N)

  let tryCounter = 1

  while (true) {
    const myAns = prompt('Введите четырехзначное число') // '1234'

    let bull = 0
    let cow = 0

    if (myAns === N) {
      break
    }

    for (let i = 0; i < myAns.length; i++) {
      const symbol = myAns[i]
      const found = N.indexOf(symbol)
      if (found >= 0) {
        if (found === i) {
          bull++
        } else {
          cow++
        }
      }
    }

    console.log(`${bull} bull(s) and ${cow} cow(s)`)

    tryCounter++
  }

  alert(`You won! ${tryCounter}`)
}

while (true) {
  play()
}
