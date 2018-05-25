import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import { PlanetSummaryContainer } from '../PlanetSummaryContainer'

/**
 * App is a container component representing
 * the Star Wars Planet Guide Application
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Star Wars Planet Guide</h1>
        </header>
        <Grid>
          <PlanetSummaryContainer />
        </Grid>
      </div>
    );
  }
}

export default App;
