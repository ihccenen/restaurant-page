import { nav } from './nav.js'
import { home } from './home.js'
import { menu } from './menu.js'
import { contact } from './contact.js'
import './style.css'

export const contentControl = (() => {
  const changeContent = (event) => {
    const name = event.target.dataset.nav
    if (name === container.dataset.page) return

    removeDivChilds(container)
    _highlightNav(name)

    if (name === 'menu') {
      container.dataset.page = 'menu'
      container.appendChild(dishes)
    } else if (name === 'home') {
      container.dataset.page = 'home'
      container.appendChild(header)
    } else if (name === 'contact') {
      container.dataset.page = 'contact'
      container.appendChild(contact)
    }
  }

  const removeDivChilds = () => {
    while (container.firstChild) {
      container.firstChild.remove()
    }
  }

  const _highlightNav = (name) => {
    navLi.forEach((li) => {
      if (li.dataset.nav === name) li.classList.toggle('highlighted')
      else li.className = ''
    })
  }

  return { changeContent, removeDivChilds }
})()

const content = document.querySelector('[data-content]')
export const container = document.createElement('div')
const header = home.createHeader()
const dishes = menu.createDishGrid()

container.dataset.page = 'container'
container.classList.add('container', 'flex-container')
container.appendChild(header)
content.append(nav, container)

const navLi = Array.from(document.querySelectorAll('[data-nav]'))
navLi.forEach((li) =>
  li.addEventListener('click', contentControl.changeContent)
)
