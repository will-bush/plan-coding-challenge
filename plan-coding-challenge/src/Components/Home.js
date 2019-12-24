import React from 'react';
import './Home.css'
import logo from '../logo.svg'
import SearchForm from './SearchForm'
import Search from './Search';
import ShowSelected from './ShowSelected';

class Home extends React.Component {

    state = {
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
                    {this.state.selected_result ? <ShowSelected movie={this.state.selected_result} ></ShowSelected> : <p>Please perform a search and select a movie from the results list.</p>}
                </main>
                <footer>
                <button id="about" onClick={() => this.props.history.push('/about')}>ABOUT</button>
                </footer>
            </div>
        )
    }
}

export default Home;