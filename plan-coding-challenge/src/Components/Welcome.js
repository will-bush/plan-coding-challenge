import React from 'react';
import './Welcome.css';
import logo from '../logo.svg'

class Welcome extends React.Component {

    render() {

        return (
            <div className="welcome">
                <header>
                    <img className="logo" src={logo} alt="plan.com logo"/>
                </header>
                <main>
                    <h1>Welcome!</h1>
                    <p>This is Will Bush's submission for the coding challenge skill assessment for a Front-end Developer role at plan.com</p>
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        )
    }
}

export default Welcome;