export const contact = document.createElement('div')
const email = document.createElement('p')
const phone = document.createElement('p')

email.textContent = 'e-mail: fake@email.com'
phone.textContent = 'Phone: number'
contact.classList.add('contact', 'flex-container')
contact.append(email, phone)
