import React, { Component } from 'react';
import logo from './Instagram_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Instagram market place</h2>
        </div>
        <p className="App-intro">
		  <h2>this is awsome</h2>
        </p>
      </div>
    );
  }
}

export default App;
