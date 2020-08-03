// Cell
// Field
// Snake
// Game

class Cell {
  food = false
  snake = false

  // ячейка
  constructor () {
  }

  draw (placeToRender) {
    const cellHTML = document.createElement('div')
    cellHTML.classList.add('cell')

    if (this.food) {
      cellHTML.innerHTML = '*'
    }
    placeToRender.appendChild(cellHTML)
  }
}

class Field {
  // поле
  n = 10
  m = 10
  field = []

  constructor (n, m) {
    this.n = n
    this.m = m
    this._createField()
  }

  _createField () {
    const { n, m } = this

    for (let i = 0; i < n; i++) {
      const row = []
      for (let j = 0; j < m; j++) {
        row.push(new Cell())
      }
      this.field.push(row)
    }
  }

  render () {
    const placeToRender = document.querySelector('main')
    this.field.forEach(row => {
      const rowHTML = document.createElement('div')
      rowHTML.classList.add('row')

      row.forEach(cell => {
        cell.draw(rowHTML)
      })

      placeToRender.appendChild(rowHTML)
    })
  }
}

class Snake {
  // змея
}

class Game {
  Field = null
  Snake = null
  score = 0

  constructor (n, m) {
    /**
     * 1) Сгенерироваться поле
     * 2) Создать змею
     * 3) РАЗМЕСТИТЬ ЗМЕЮ В ЦЕНТРЕ ???
     */
    this.Field = new Field(n, m)
    this.Snake = new Snake()
  }

  // игровая логика
  start () {
    this.Field.render()
  }
}

const game = new Game(7, 9)
game.start()
