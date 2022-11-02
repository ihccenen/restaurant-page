export const nav = document.createElement('nav')
const ul = document.createElement('ul')
const home = document.createElement('li')
const menu = document.createElement('li')

home.dataset.nav = 'home'
menu.dataset.nav = 'menu'
home.textContent = 'Home'
menu.textContent = 'Menu'
ul.classList.add('nav', 'flex-container')
home.classList.add('highlighted')
ul.append(home, menu)
nav.appendChild(ul)
