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

//using file
// const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
const puzzleElem = document.querySelector('#puzzle')
const guessesElem = document.querySelector('#guesses')
const difficulty = puzzle.length + parseInt(getLevel()) || puzzle.length
const game = new Hangman('test', 4) //randomWord, difficulty
const refresh = document.querySelector('#refresh')
puzzleElem.innerHTML = game.puzzle
guessesElem.innerHTML = `${game.remainingGuesses} guesses remaining.`

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    const result = game.makeGuess(guess)
    puzzleElem.innerHTML = game.puzzle
    guessesElem.innerHTML = `${result}`     
})

//using async fetch request
getPuzzle('1').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getCountry('US').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
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