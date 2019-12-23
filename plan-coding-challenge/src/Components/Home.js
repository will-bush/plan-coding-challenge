import React from 'react';
import './Home.css'
import logo from '../logo.svg'
import SearchForm from './SearchForm'
// import ResultsList from './ResultsList'
// import API from '../API'
// import useFetch from './useFetch'
import Search from './Search';
import ShowSelected from './ShowSelected';

class Home extends React.Component {

    state = {
        // search_results: null,
        selected_result: null,
        search_query: ""
    }

    componentDidMount() {
        if (localStorage.getItem('selected_result')) {
            let selected = localStorage.getItem('selected_result')
            this.setState({
                selected_result: JSON.parse(selected)
            })
        }
        if (localStorage.getItem('search_query')) {
            let current_query = localStorage.getItem('search_query')
            this.setState({
                search_query: JSON.parse(current_query)
            })
        }
    }

    // A FUNCTION THAT SETS THE SELECTED RESULT IN THE DETAIL VIEW
    viewResult = (result) => {
        this.setState({
            selected_result: result
        })
        localStorage.setItem('selected_result', JSON.stringify(result));
    }
    // A FUNCTION THAT SETS THE RETURNED RESULTS IN THE LIST VIEW
    // addResultsToState = (results) => {
    //     this.setState({
    //         search_results: results
    //     })
    // }

    // A FUNCTION THAT SAVES THE SEARCH INPUT TERM IN STATE
    setSearchQuery = (query) => {
        this.setState({
            search_query: query
        })
        localStorage.setItem('search_query', JSON.stringify(query));
    }

    clearSelectedResult = () => {
        localStorage.setItem('selected_result', null);
        this.setState({
            selected_result: null
        })
    }

    render() {

        return (
            <div className="home">
                <header>
                    <img className="logo" src={logo} alt="plan.com logo"/>
                    <SearchForm search={this.search} setSearchQuery={this.setSearchQuery} clearSelectedResult={this.clearSelectedResult}/>
                </header>
                <aside>
                    {this.state.search_query !== "" ? <Search query={this.state.search_query} viewResult={this.viewResult}/> : null}
                </aside>
                <main>
                    {this.state.selected_result ? <ShowSelected movie={this.state.selected_result} ></ShowSelected> : <p>NO RESULT HAS BEEN SELECTED!!</p>}
                </main>
                <footer>
                    Footer
                </footer>
                
            </div>
        )
    }
}

export default Home;