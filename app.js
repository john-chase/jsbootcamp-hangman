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
const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
const difficulty = randomWord.length + parseInt(getLevel()) || randomWord.length
const game = new Hangman(randomWord, difficulty)
const puzzle = document.querySelector('#puzzle')
const guesses = document.querySelector('#guesses')
const refresh = document.querySelector('#refresh')
puzzle.innerHTML = game.getPuzzle()
guesses.innerHTML = `${game.remainingGuesses} guesses remaining.`

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    const result = game.makeGuess(guess)
    puzzle.innerHTML = game.getPuzzle()
    guesses.innerHTML = `${result}`     
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


//API - integrate later
// const wordUrl = "https://random-word-api.herokuapp.com//word?key=7KCZB5L8&number=1"
// randomWord = fetch(wordUrl).then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     console.log(data[0]);
//   }).catch(function() {
//     console.log("Booo");
//   });