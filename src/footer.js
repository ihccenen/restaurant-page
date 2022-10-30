export const footer = document.createElement('footer')
const email = document.createElement('p')
const phone = document.createElement('p')

footer.classList.add('footer')
email.textContent = 'e-mail: fake@email.com'
phone.textContent = 'Phone: number'

footer.append(email, phone)
