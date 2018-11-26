const testNum = (num) => {
  if(num > 10) {
    return new Promise(resolve, reject) => {
      setTimeout(() => { resolve(num); }, 1000)
    }
    .then(result => { console.log(`Yup! ${result} is greater than 10!`) })
    .catch(result => { console.log(`Nah homie. ${result} ain't greater than 10!`)})
  } 
}

const makeAllCaps = (arrayOfWords) => {
  return new Promise(resolve, reject) => {
    setTimeout(() => { resolve(arrayOfWords.forEach(word => word.toUpperCase()); }, 1000)
  }
  .then(words => sortWords(words))
  .catch(error => console.log(error))
}

const sortWords = (arrayOfWords) => {
  arrayOfWords.sort();
}