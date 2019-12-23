import React from "react";
import { useFetch } from "../Hooks";
import ResultItem from "./ResultItem";

function Search ({ viewResult, query }) {
  let search = "http://www.omdbapi.com/?apikey=a12b58ca&type=movie&s=" + query
  let results = useFetch(search, {});
  // localStorage.setItem('search_results', JSON.stringify(results));

  return (
    <div>
        <h3>Results:</h3>
        {results.Search ? results.Search.map(result => <ResultItem MovieData={result} viewResult={viewResult}><h3>{result.Title}</h3></ResultItem>) : <p>NO RESULTS!</p>}
    </div>
  );
};
export default Search;