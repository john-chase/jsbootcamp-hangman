'use strict'

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
    puzzleElem.innerHTML = game.puzzle
    guessesElem.innerHTML = game.getStatus()    
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

//using async fetch request
// getPuzzle('1').then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCountry('US').then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })