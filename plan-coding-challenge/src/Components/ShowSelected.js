import React from 'react';
import { useFetch } from "../Hooks";
import poster from '../no_artwork.png'

function ShowSelected ({movie}) {
let search = "http://www.omdbapi.com/?apikey=a12b58ca&i=" + movie.imdbID
let result = useFetch(search, {})


        return (
            <div className="selected">
                {result.Poster === "N/A" ? <img className="poster" src={poster} alt={result.Title}/> : <img className="poster" src={result.Poster} alt={result.Title}/>}  
                <h1>{result.Title} ({result.Year})</h1>
                <h3>{result.Plot}</h3>
                <p><strong>{result.Genre}</strong></p>
                <p><strong>Rated: </strong>{result.Rated}</p>
                <p><strong>Runtime: </strong>{result.Runtime}</p>
                <p><strong>IMDB Rating: </strong>{result.imdbRating}</p>
                <p><strong>Director: </strong>{result.Director}</p>
                <p><strong>Starring: </strong>{result.Actors}</p>
            </div>
        )
    }

export default ShowSelected;
