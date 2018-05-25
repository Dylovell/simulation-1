import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Dashboard from './Components/Dashboard.js';
import Form from './Components/Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>App</p>
        <Header/>
        <Dashboard/>
        <Form/>
      
      </div>
    );
  }
}

export default App;
