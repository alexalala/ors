import React, { Component } from 'react';
import logo from './ors-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>New In</li>
            <li>Womens</li>
            <li>Get Inspired</li>
          </ul>
          <form>
            <input type="search"></input>
            <button>Search</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
