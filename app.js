'use strict'

//get play setting from LS
const getLevel = () => {
    const level = localStorage.getItem('level')
    try {
        return level ? level : []
    } catch(err) {
        return []
    }
}

//using sync request
const randomWord = getPuzzle()
//using file
// const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
console.log(randomWord)
const puzzleElem = document.querySelector('#puzzle')
const guessesElem = document.querySelector('#guesses')
const difficulty = randomWord.length + parseInt(getLevel()) || randomWord.length
const game = new Hangman(randomWord, difficulty)
const refresh = document.querySelector('#refresh')
puzzleElem.innerHTML = game.puzzle
console.log(game.puzzle)
guessesElem.innerHTML = `${game.remainingGuesses} guesses remaining.`

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    const result = game.makeGuess(guess)
    puzzleElem.innerHTML = game.puzzle
    guessesElem.innerHTML = `${result}`     
})


document.querySelector('#refresh1').addEventListener('click', (e) => {
    localStorage.setItem('level', 2)
    location.reload()
})
document.querySelector('#refresh2').addEventListener('click', (e) => {
    localStorage.setItem('level', 0)
    location.reload()
})
document.querySelector('#refresh3').addEventListener('click', (e) => {
    localStorage.setItem('level', -2)
    location.reload()
})