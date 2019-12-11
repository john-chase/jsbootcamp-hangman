class Hangman {
    constructor(word, remainingGuesses, guesses) {
        this.Word = word
        this.word = word.toLowerCase().split('') //arrayed
        this.remainingGuesses = remainingGuesses
        this.duplicate = ''
        this.guesses = []
        this.status = 'playing'   
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            this.guesses.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*'
        })
        return puzzle
    }    
    makeGuess(guess) {
        if(this.status !== 'playing') return this.calcStatus()
        guess = guess.toLowerCase()
        const isUnique = !this.guesses.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        // check to see if guess is already in guesses array
        if(isUnique) {
            this.guesses.push(guess) //new letter, add to array
            this.duplicate = ''
        } else {
            this.duplicate = `You already guessed "${guess}." No penalty - try again...`
        }
        // check to see if its a bad guess
        if(isUnique && isBadGuess) {
            this.remainingGuesses -= 1 //decrement remaining
        }
        return this.calcStatus()       
    }
    calcStatus() {
        if (this.remainingGuesses <= 0) {
            this.status = 'failed'
        }
        const isMatch = this.word.every((letter) => this.guesses.includes(letter) || letter === ' ')
        if(isMatch) {
            this.status = 'finished'
        }
        console.log(this.status) 
        return this.getStatus()           
    }
    getStatus() {
        if(this.status === 'playing') {
            if(this.duplicate) {
                return this.duplicate
            } else {
                return `${this.remainingGuesses}  guesses remaining.`
            }
        } else if (this.status === 'failed') {
            return `Out of guesses. You lose! The word was "${this.Word}"...`
        } else if(this.status === 'finished') {
            return 'You win. Go stickman!!!'
        } 
    }
}

export { Hangman as default }