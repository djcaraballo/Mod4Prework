const button = document.querySelector('button')
const appSection = document.querySelector('section')

const appendText = () => {
  console.log('You did it!')
  event.preventDefault()
  const newP = document.createElement('p')
  const newText = 'Yay! You did it! (Louisa voice)'
  newP.innerHTML = newText
  appSection.appendChild(newP)
}

button.addEventListener('click', appendText);
