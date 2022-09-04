const form = document.querySelector('form')
const email = document.querySelector('#email')
const label = email.parentNode
const helperText = document.querySelector('#helper')

const getErrorMessage = (text) => {
  console.log(text);
  const hasAtSign = text.includes('@')

  if(text === '') {
    return('Error you must provide an email')
  }
  
  if(!hasAtSign) {
    return('Error you must add the "@"')
  }

  if(hasAtSign) {
    const [before, after] = text.split('@')
    if(before === '' || after === '') {
      return('Error the email format is not valid')
    }
  }

  return null
}

const displayError = (text) => {
  if(text !== null) {
    label.classList.replace('border','border-4')
    label.classList.replace('border-red-300','border-red-400')
  }
  else {
    label.classList.replace('border-4','border')
    label.classList.replace('border-red-400','border-red-300')
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const formData = Object.fromEntries(new FormData(form))
  const emailText = formData.email
  const verifiedText = getErrorMessage(emailText)
  
  displayError(verifiedText)
  helperText.textContent = verifiedText

})