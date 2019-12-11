import Hangman from './hangman'
import getPuzzle from './requests'
import wordsArray from './words'

//get play difficulty setting from LS
const getLevel = () => {
    const level = localStorage.getItem('level')
    try {
        return level ? level : []
    } catch(err) {
        return []
    }
}

const puzzleElem = document.querySelector('#puzzle')
const guessesElem = document.querySelector('#guesses')
const refresh = document.querySelector('#refresh')
let game 

const render = () => {
    puzzleElem.innerHTML = '' // game.puzzle
    guessesElem.innerHTML = game.getStatus()  
    game.puzzle.split('').forEach(char => puzzleElem.innerHTML += `<span>${char}</span>`)  
}

const startGame = async () => {
    //try api
    let puzzle = await getPuzzle('5') 
    if(puzzle.length < 2) {
        //use file if not successful 
        puzzle = wordsArray[Math.floor(Math.random() * wordsArray.length)]
    }
    const difficulty = puzzle.length + parseInt(getLevel()) || puzzle.length
    game = new Hangman(puzzle, difficulty)
    render()
}

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

startGame()

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