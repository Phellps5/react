import React, { Component } from 'react';
import logo from './violin.png';
import './App.css';
import Header from './Header.js'
import Corpo from './Corpo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Corpo/>
      </div>
    );
  }
}

export default App;
