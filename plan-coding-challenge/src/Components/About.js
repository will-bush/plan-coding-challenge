import React from 'react';
import logo from '../logo.svg'
import './About.css';

class About extends React.Component {

    render() {

        return (
            <div className="about">
                <header>
                    <img className="logo" src={logo} alt="plan.com logo" onClick={() => this.props.history.push('/home')}/>
                </header>
                <main className="about">
                    <h1>About this project</h1>
                    <p><strong>Overview: </strong><br/>Write a CRA (create-react-app) application that allows searching movies from https://www.omdbapi.com/ and list results and then clicking on a film to show more details.</p>
                    <p><strong>Data fetching Hook: </strong><br/>Use a custom useFetch hook to fetch data from the omdbapi. The API of the hook is up to you (parameters of the hook, and shape of the object returned by the hook), but all the data must come from it.</p>
                    <p><strong>Navigation: </strong><br/>The application must use react-router or reach router.</p>
                    <p><strong>Detailed view: </strong><br/>Clicking on a movie in the list of search results should show a detailed view of the movie on the right hand side of the page.</p>
                    <p><strong>Other things we are looking for: </strong></p>
                    <ul>
                        <li>The use of hooks and logic used to write the custom hook.</li>
                        <li>A page refresh should display the same page (same list, same detailed movie)</li>
                        <li>Routing - how the page renders when you click a link/search or refresh</li>
                        <li>Forms - how data is handled from the input fields and then used to load data.</li>
                        <li>Error handling - Handle input errors and error responses from the api.</li>
                    </ul>
                </main>
                <footer>
                <button id="about" onClick={() => this.props.history.push('/home')}>HOME</button>
                </footer>
            </div>
        )
    }
}

export default About;