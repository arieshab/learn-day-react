import React, { Component } from 'react';
import logo from './Dolphin_Emoji_large.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Ariesha's Awesome App</h2>
        </div>
        <p className="App-intro">
          How to <b>feed</b> a dolphin
          

        </p>
      </div>
    );
  }
}

export default App;
