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

    if (this.snake) {
      cellHTML.classList.add('snake')
    }

    placeToRender.appendChild(cellHTML)
  }
}

class Field {
  // поле
  n = 10
  m = 10
  field = []
  foodExists = false

  constructor (n, m) {
    this.n = n
    this.m = m
    this._createField()
  }

  getCell (x, y) {
    return this.field[y] && this.field[y][x]
  }

  // {x:0, y:1}
  clearCell ({ x, y }) {
    const cell = this.getCell(x, y)
    if (cell) {
      cell.snake = false
    }
  }

  stepOnCell ({ x, y }) {
    const newCell = this.getCell(x, y)
    if (newCell && !newCell.snake) {
      newCell.snake = true
      return true
    }
    return false
  }

  checkFoodOnCell ({ x, y }) {
    const cell = this.getCell(x, y)
    if (cell) {
      const existance = cell.food
      if (existance) {
        cell.food = false
        this.foodExists = false
      }

      return existance
    }
    return false
  }

  generateFood () {
    if (this.foodExists) {
      return
    }

    const rand = max => Math.floor(Math.random() * (max - 1))
    if (rand(10) < 3) {
      while (!this.foodExists) {
        const x = rand(this.m)
        const y = rand(this.n)
        const cell = this.getCell(x, y)
        if (cell && !cell.snake) {
          cell.food = true
          this.foodExists = true
        }
      }
    }
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
    placeToRender.innerHTML = ''

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
  body = []
  direction = 'right'
  fed = false

  constructor (startX = 0, startY = 0, direction = 'right') {
    this.direction = direction
    this.body = [{ x: Math.floor(startX), y: Math.floor(startY) }]
  }

  changeDirection (direction) {
    if (this.direction === 'up' || this.direction === 'down') {
      if (direction === 'up' || direction === 'down') {
        return
      }
    }
    if (this.direction === 'right' || this.direction === 'left') {
      if (direction === 'right' || direction === 'left') {
        return
      }
    }

    this.direction = direction
  }

  move () {
    const currentHead = this.body[this.body.length - 1]
    const newCoords = {}

    switch (this.direction) {
      case 'right':
        newCoords.x = currentHead.x + 1
        newCoords.y = currentHead.y
        break
      case 'left':
        newCoords.x = currentHead.x - 1
        newCoords.y = currentHead.y
        break
      case 'up':
        newCoords.x = currentHead.x
        newCoords.y = currentHead.y - 1
        break
      case 'down':
        newCoords.x = currentHead.x
        newCoords.y = currentHead.y + 1
        break
    }

    let leaved = { x: -1, y: -1}
    if (this.fed) {
      this.fed = false
    } else {
      leaved = this.body.shift()
    }
    
    this.body.push(newCoords)
    console.log(JSON.stringify(this.body))

    return {
      leaved,
      stepped: newCoords,
    }
  }
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
    this.Snake = new Snake(n / 2, m / 2)
    this.setEventListeners()
  }

  setEventListeners () {
    const UP = 38
    const DOWN = 40
    const LEFT = 37
    const RIGHT = 39

    document.addEventListener('keydown', event => {
      switch(event.keyCode) {
        case UP:
          this.Snake.changeDirection('up')
          break
        case DOWN:
          this.Snake.changeDirection('down')
          break
        case LEFT:
          this.Snake.changeDirection('left')
          break
        case RIGHT:
          this.Snake.changeDirection('right')
          break
      }
    })
  }

  // игровая логика
  start () {
    this.logicLoop = setInterval(() => {
      const {leaved, stepped} = this.Snake.move()

      this.Field.clearCell(leaved)
      const foodOnSteppedCellExists = this.Field.checkFoodOnCell(stepped)
      if (foodOnSteppedCellExists) {
        this.Snake.fed = true
        this.score++
      }

      const result = this.Field.stepOnCell(stepped)
      if (result) {
        this.Field.generateFood()
        this.Field.render()
      } else {
        alert(`You are looser! Your score: ${this.score}`)
        clearInterval(this.logicLoop)
      }
    }, 500)
  }
}

const game = new Game(7, 9)
game.start()
