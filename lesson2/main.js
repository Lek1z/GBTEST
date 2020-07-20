let N = 0

function guess (tC) {
  if (tC === 1) {
    N = Math.floor(Math.random() * 10)
    console.log(N)
  }

  const myAns = parseInt(prompt('Input:'), 10)
  if (myAns === N) {
    alert(`You won! ${tC}`)
    guess(1)
  } else {
    guess(tC + 1)
  }
}

guess(1)
