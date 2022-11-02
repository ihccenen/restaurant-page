export const nav = document.createElement('nav')
const ul = document.createElement('ul')
const home = document.createElement('li')
const menu = document.createElement('li')
const contact = document.createElement('li')

home.dataset.nav = 'home'
menu.dataset.nav = 'menu'
contact.dataset.nav = 'contact'
home.textContent = 'Home'
menu.textContent = 'Menu'
contact.textContent = 'Contact'
ul.classList.add('nav', 'flex-container')
home.classList.add('highlighted')
ul.append(home, menu, contact)
nav.appendChild(ul)
