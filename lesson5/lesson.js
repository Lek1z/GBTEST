// getElementByID()
// getElementsByClassName()

// querySelector()
// querySelectorAll()

// const el = document.getElementById('qwerty')
// console.log(el)

// const els = document.getElementsByClassName('link')
// console.log(els)

// const el = document.querySelectorAll('.link')
// console.log(el)

// const listContainer = document.querySelector('#list')
// console.log(listContainer)

// const newListElement = document.createElement('li')
// newListElement.innerHTML = 'Created element!'

// listContainer.appendChild(newListElement)

// const logo = document.querySelector('.logo')
// logo.classList.toggle('red')

// const btn = document.querySelector('button')
// btn.addEventListener('mouseover', () => {
//   btn.classList.toggle('red', )
//   btn.style.height = "200px"
//   // max-width
//   btn.style.maxWidth = "100px"
// })

// const input = document.querySelector('input')
// const value = input.value
// console.log(value)

// const links = document.querySelector('.link')
// console.log(links.href)

// input.setAttribute('newattribute', true)

// const newAttr = input.getAttribute('newattribute')
// console.log(newAttr)

const menu = ['Home', 'About', 'Media', 'Links', 'Extra', 'New']
const nav = document.querySelector('nav')

if (nav) {
  // menu.forEach(link => {
  //   // const linkElement = document.createElement('a', )
  //   // linkElement.innerText = link
  //   // linkElement.setAttribute('href', `/${link.toLowerCase()}/`)
  //   // linkElement.classList.add('link')
  //   // console.log(linkElement)
  //   // nav.appendChild(linkElement)
  // })
  const content = `
    <a href="/" class="link">Home</a>
    <a href="/" class="link">Home</a>
    <a href="/" class="link">Home</a>
    <a href="/" class="link">Home</a>
  `

  nav.innerHTML = content
}

class Element {

}

const arr = [1,2,3]

arr.forEach(el => {
  // create element
  // inner text
  // classList
  // fullprice
})
