console.log('APP STARTED')

class Task {
  done = false
  text = 'New task'
  el = null

  constructor (text) {
    this.text = text
    this.render()
  }

  onDoneClick () {
    this.done = true
    this.render()
  }

  createButton () {
    const btn = document.createElement('a')
    btn.classList.add('btn')
    btn.innerHTML = 'Done!'

    btn.addEventListener('click', this.onDoneClick.bind(this))

    return btn
  }

  render () {
    if (!this.el) {
      this.el = document.createElement('div')
      this.el.classList.add('task')
    }

    this.el.innerHTML = this.text

    let place = null
    if (this.done) {
      place = document.querySelector('#done .content')
    } else {
      this.el.appendChild(this.createButton())
      place = document.querySelector('#todo .content')
    }

    place.appendChild(this.el)
  }
}

const form = document.querySelector('form')
form.addEventListener('submit', function () {
  event.preventDefault()
  
  const input = this.querySelector('input')
  new Task(input.value)

  input.value = ''
})
