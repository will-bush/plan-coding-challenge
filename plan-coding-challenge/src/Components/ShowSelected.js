import React from 'react';
import { useFetch } from "../Hooks";

function ShowSelected ({movie}) {
let search = "http://www.omdbapi.com/?apikey=a12b58ca&i=" + movie.imdbID
let result = useFetch(search, {})


        return (
            <div key={result.imdbID}>
                <img src={result.Poster} />
                <h1>{result.Title}</h1>
                 <p>{result.Plot}</p>
            </div>
        )
    }

export default ShowSelected;
