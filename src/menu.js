import { contentControl, container } from './index.js'
import armishTomatoPie from './amish-tomato-pie.jpg'
import capreseSalad from './caprese-salad-with-grilled-flank-steak.jpg'
import tomatoSoup from './garden-fresh-tomato-soup.jpg'
import grilledShrimp from './grilled-shrimp-with-fresh-tomato-sauce-and-angel-hair-pasta.jpg'
import tomatoChicken from './tomato-chicken.jpg'
import veraCruzTomatoes from './vera-cruz-tomatoes.jpg'

export const menu = (() => {
  const _dish = {
    'Amish Tomato Pie': [
      armishTomatoPie,
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, temporibus!',
    ],
    'Caprese Salad with Grilled Flank Steak': [
      capreseSalad,
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, voluptates.',
    ],
    'Garden-Fresh Tomato Soup': [
      tomatoSoup,
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, repudiandae?',
    ],
    'Grilled Shrimp with Fresh Tomato Sauce and Angel Hair Pasta': [
      grilledShrimp,
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, fugit!',
    ],
    'Tomato Chicken': [
      tomatoChicken,
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, suscipit.',
    ],
    'Vera Cruz Tomatoes': [
      veraCruzTomatoes,
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, libero!',
    ],
  }

  const _dishLink = {
    'Amish Tomato Pie':
      'https://www.allrecipes.com/recipe/281218/amish-tomato-pie/',
    'Caprese Salad with Grilled Flank Steak':
      'https://www.allrecipes.com/recipe/232209/caprese-salad-with-grilled-flank-steak/',
    'Garden-Fresh Tomato Soup':
      'https://www.allrecipes.com/recipe/238176/garden-fresh-tomato-soup/',
    'Grilled Shrimp with Fresh Tomato Sauce and Angel Hair Pasta':
      'https://www.allrecipes.com/recipe/280720/grilled-shrimp-with-fresh-tomato-sauce-and-angel-hair-pasta/',
    'Tomato Chicken':
      'https://www.allrecipes.com/recipe/192533/tomato-chicken/',
    'Vera Cruz Tomatoes':
      'https://www.allrecipes.com/recipe/57300/vera-cruz-tomatoes/',
  }

  const createDishGrid = () => {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')

    h1.textContent = 'Dishes'
    div.classList.add('dishes', 'grid-container')
    div.appendChild(h1)

    for (let key in _dish) {
      const dish = _createDishCard(key, _dish[key])

      dish.addEventListener('click', _openDishDescription, true)
      div.appendChild(dish)
    }

    return div
  }

  const _createDishCard = (name, arr) => {
    const card = document.createElement('div')
    const h2 = document.createElement('h2')
    const container = document.createElement('div')
    const foodImg = document.createElement('img')
    const p = document.createElement('p')

    h2.textContent = name
    foodImg.src = arr[0]
    foodImg.alt = name
    p.textContent = arr[1]
    foodImg.classList.add('dish-img')
    card.classList.add('dish-card', 'grid-container')
    card.dataset.dish = name
    container.classList.add('food-container', 'flex-container')
    container.append(foodImg, p)
    card.append(h2, container)

    return card
  }

  const _openDishDescription = (event) => {
    const p = document.createElement('p')
    const btn = document.createElement('button')
    const a = document.createElement('a')

    contentControl.removeDivChilds()

    btn.addEventListener('click', _reloadMenu)
    a.href = _dishLink[event.currentTarget.dataset.dish]
    a.textContent = 'All Recipes'
    p.textContent = 'Photo from '
    p.appendChild(a)
    p.classList.add('dish-description')
    btn.classList.add('back-btn')
    btn.textContent = 'Go back'
    container.append(p, btn)
  }

  const _reloadMenu = () => {
    const dishes = createDishGrid()

    contentControl.removeDivChilds()
    container.appendChild(dishes)
  }

  return { createDishGrid }
})()
