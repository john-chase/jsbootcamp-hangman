'use strict'

const getPuzzle = async (wordCount) => {
    const response = await fetch("https://random-word-api.herokuapp.com/word?key=IL4Y2VEL&number=${wordCount}", {})
    if(response.status === 200) {
        const data = await response.json()
        return data[0]
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}