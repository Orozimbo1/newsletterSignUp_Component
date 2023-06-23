const email = document.querySelector('#email')
const submit = document.querySelector('.submit')
const errorMessage = document.querySelector('span')
const goHome = document.querySelector('#go-home')

const signup = document.querySelector('#sign-up')
const success = document.querySelector('#success')
const strongEmail = document.querySelector('strong')

let error = false

const emailValidate = (emailAddress) => {
  error = false
  if(!emailAddress.includes('@')) return error = true
  emailAddress = emailAddress.split('@')

  if(emailAddress[0].length < 3 || !emailAddress[1].includes('.') || emailAddress[1].indexOf('.') == 0) return error = true
} 

submit.addEventListener('click', (e) => {
  e.preventDefault()

  emailValidate(email.value)
  if(error) {
    errorMessage.innerHTML = 'Valid email required'
    email.focus()
    return 
  }

  signup.classList.add('hidden')
  errorMessage.innerHTML = ''
  success.classList.remove('hidden')
  strongEmail.innerHTML = email.value
})

goHome.addEventListener('click', () => {
  signup.classList.remove('hidden')
  success.classList.add('hidden')
  email.value = ''
})