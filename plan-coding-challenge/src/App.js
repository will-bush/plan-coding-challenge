import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Home from './Components/Home'
import About from './Components/About'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path='/' exact
          component={routerProps => (
              <Welcome {...routerProps} />
            )}
        />
        <Route
          path='/home'
          component={routerProps => (
              <Home {...routerProps} />
            )}
        />
        <Route
          path='/about'
          component={routerProps => (
              <About {...routerProps} />
            )}
        />
      </Switch>
      
    </div>
  );
}

export default withRouter(App)
