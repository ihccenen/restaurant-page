import headerImg from './tomatoes.jpg'

export const home = (() => {
  const _createCopyright = (name, profileLink, site, siteLink) => {
    const p = document.createElement('p')
    const profile = document.createElement('a')
    const imgLink = document.createElement('a')

    profile.textContent = name
    profile.href = profileLink
    imgLink.textContent = site
    imgLink.href = siteLink

    p.append('Photo by ', profile, ' on ', imgLink)

    return p
  }

  const createHeader = () => {
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const copyrightInfo = _createCopyright(
      'Alex Ghizila',
      'https://unsplash.com/@galex',
      'Unsplash',
      'https://unsplash.com/'
    )

    header.classList.add('header', 'flex-container')
    h1.textContent = 'Restaurant name'
    p.classList.add('header-description')
    p.textContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi itaque ipsum odio in. Quidem.'
    img.classList.add('header-tomato')
    img.src = headerImg
    img.alt = 'three cherry tomatoes'
    header.append(h1, img, copyrightInfo, p)

    return header
  }

  return { createHeader }
})()
