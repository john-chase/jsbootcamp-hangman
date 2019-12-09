'use strict'

//promise w fetch
const getPuzzle = (wordCount) => {
    return fetch("https://random-word-api.herokuapp.com/word?key=SJ5ESC0G&number=${wordCount}", {}).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    }).then((data) =>  data[0])
}

const getCountry = (countryCode) => {
    return fetch("https://restcountries.eu/rest/v2/all", {}).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data.')
        }
    }).then((data) => data.find((country) => country.alpha2Code === countryCode))
}

//promise w XMLHttpRequest
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest() 
//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const length = data[0].length
//             resolve(data[0]) //puzzle
//         } else if(request.readyState === 4) {
//             reject('An error has occured.')
//         }
//     })
//     request.open("GET", `https://random-word-api.herokuapp.com/word?key=SJ5ESC0G&number=${wordCount}`)
//     //request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=1")
//     request.send()  
// })

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest() 
//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if(request.readyState === 4) {
//             reject('Error: Unable to fetch data.')
//         }
//     })
//     request.open("GET", "https://restcountries.eu/rest/v2/all")
//     request.send()
// })

//async callback
// const getPuzzle = (wordCount, callback) => {
//     const request = new XMLHttpRequest() 
//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined, data[0]) //puzzle
//         } else if(request.readyState === 4) {
//             callback('An error has occured.', undefined)
//         }
//     })
//     request.open("GET", `https://random-word-api.herokuapp.com/word?key=SJ5ESC0G&number=${wordCount}`)
//     //request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=1")
//     request.send()
// }
// const getCountry = (countryCode, callback) => {
//     const request = new XMLHttpRequest() 
//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             callback(undefined, country)
//         } else if(request.readyState === 4) {
//             callback('Error: Unable to fetch data.')
//         }
//     })
//     request.open("GET", "https://restcountries.eu/rest/v2/all")
//     request.send()
// }

//callback
// const getDataCallback = (callback) => {
//     setTimeout(() => {
//         callback(undefined, 'my data')
//     }, 2000)
// }

// getDataCallback((err, data) => {
//     if(err) {
//         console.log('err')
//     } else {
//         console.log(data)
//     }
// })

//promise
// const getDataPromise = (data) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(data)
//         //reject('Promise Error')
//     }, 2000)
// })

// const myPromise = getDataPromise(123)

// myPromise.then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })