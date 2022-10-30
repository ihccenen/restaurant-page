export const nav = document.createElement('nav')
const ul = document.createElement('ul')
const home = document.createElement('li')

ul.classList.add('nav', 'flex-container')
home.textContent = 'Home'
home.classList.add('highlighted')
ul.appendChild(home)
nav.appendChild(ul)
