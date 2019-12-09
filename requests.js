'use strict'

//sync
const getPuzzle = function() {
    const request = new XMLHttpRequest() 
    let results
    request.open("GET", "https://random-word-api.herokuapp.com/word?key=SJ5ESC0G&number=1", false)
    request.send()
    if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        results = data[0]
    } else if(request.readyState === 4) {
        results = 'Error'
    }
    return results
}


// const request = new XMLHttpRequest() 
// request.open("GET", "https://restcountries.eu/rest/v2/all")
// request.send()
// request.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//         const country = data.find((country) => country.alpha2Code === 'MX')
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         return 'Error: unable to fetch data....'
//     }
// })