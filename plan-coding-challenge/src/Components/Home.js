import React from 'react';
import './Home.css'
import logo from '../logo.svg'
import SearchForm from './SearchForm'

class Home extends React.Component {

    render() {

        return (
            <div className="home">
                <header>
                    <img className="logo" src={logo} alt="plan.com logo"/>
                    <SearchForm/>
                </header>
                <aside>
                    List
                </aside>
                <main>
                    Main
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        )
    }
}

export default Home;