import { nav } from './nav.js'
import { home } from './home.js'
import { footer } from './footer'
import './style.css'

const content = document.querySelector('[data-content]')
const homepage = document.createElement('div')
const header = home.createHeader()
const info = home.createInfo()

homepage.dataset.page = 'home'
homepage.classList.add('home', 'flex-container')
homepage.append(header, info)

content.append(nav, homepage, footer)
