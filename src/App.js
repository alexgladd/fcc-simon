import React, { Component } from 'react';
import SimonGame from './components/SimonGame';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Simon</h1>
        </div>

        <SimonGame />

        <div className="Footer">
          <i className="fa fa-github fa-lg"></i> by <a href="https://github.com/alexgladd/fcc-simon">Alex Gladd</a>
        </div>
      </div>
    );
  }
}

export default App;
