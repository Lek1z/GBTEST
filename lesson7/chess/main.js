const field = document.querySelector('.chess')
const letters = 'ABCDEFGH'

const N = 8

for (let i = 0; i < N + 1; i++) {
  const row = document.createElement('div')
  row.classList.add('row')
  for (let j = 0; j < N + 1; j++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')

    if (j && !i) {
      cell.innerHTML = letters[j - 1]
    }

    if (!j && i) {
      cell.innerHTML = N + 1 - i
    }

    if (i && j) {
      cell.classList.add(i % 2 !== j % 2 ? 'black' : 'white')
    }

    row.appendChild(cell)
  }
  field.appendChild(row)
}
