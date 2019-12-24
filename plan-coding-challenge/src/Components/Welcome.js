import React from 'react';
import './Welcome.css';
import background from '../background.jpg'
import logo from '../logo.svg'

class Welcome extends React.Component {

    render() {

        return (
            <div className="container">
                <img src={background} alt="Snow" style={{width: "100%"}}></img>
                <div className="centered">
                <h1>Welcome!</h1>
                <img className="logo" src={logo} alt="plan.com logo"/>
                <p>This is Will Bush's submission for the coding challenge skill assessment for a Front-end Developer role at plan.com</p>
                <button id="about" onClick={() => this.props.history.push('/home')}>TRY THE APP</button>
                </div>
            </div>
        )
    }
}

export default Welcome;