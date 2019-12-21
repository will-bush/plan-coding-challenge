const searchURL = "http://www.omdbapi.com/?apikey=a12b58ca&s="

// OMDB API CALL

const search = query => fetch(searchURL + query).then(resp => resp.json())

export default { search }