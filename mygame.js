
const num = prompt('Guess a number between 0 and 10!')
if (isNaN(num)) {
    alert('Guess a number between 0 and 10')
}

//prompt the user to type a number

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }