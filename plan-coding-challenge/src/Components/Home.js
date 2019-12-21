import React from 'react';
import './Home.css'
import logo from '../logo.svg'
import SearchForm from './SearchForm'
import ResultsList from './ResultsList'
import API from '../API'

class Home extends React.Component {

    state = {
        search_results: null,
        selected_result: null
    }


    // WRITE A CUSTOM USEFETCH HOOK THAT MAKES THE OMDB API CALL, USING THE SEARCH QUERY PASSED IN BY SearchForm
    // useFetch = (searchQuery, options) => {
    //     const [response, setResponse] = React.useState(null);
    //     const [error, setError] = React.useState(null);
      
    //     React.useEffect(() => {
    //       const FetchData = async () => {
    //         try {
    //           const res = await fetch(SearchURL+searchQuery, options);
    //           const json = await res.json();
    //           setResponse(json);
    //         } catch (error) {
    //           setError(error);
    //         }
    //       };
    //       FetchData();
    //     }, []);
    //     return { response, error };
    //   };

    // WRITE A FUNCTION THAT SETS THE SELECTED RESULT IN THE DETAIL VIEW
    viewResult = (result) => {
        this.setState({
            selected_result: result
        })
    }

    search = (query) => {
        API.search(query)
        .then(resp => this.setState({
            search_results: resp
        }))
    }

    // X

    render() {

        return (
            <div className="home">
                <header>
                    <img className="logo" src={logo} alt="plan.com logo"/>
                    <SearchForm search={this.search}/>
                </header>
                <aside>
                   {this.state.search_results && this.state.search_results.Search.length > 0? <ResultsList results={this.state.search_results}/> : <p>We don't have any search results!!</p>}
                </aside>
                <main>
                    {this.state.selected_result ? <p>THIS IS THE SELECTED RESULT</p> : <p>NO RESULT HAS BEEN SELECTED!!</p>}
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        )
    }
}

export default Home;